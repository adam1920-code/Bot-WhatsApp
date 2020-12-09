const { create, Client } = require('@open-wa/wa-automate')
const figlet = require('figlet')
const options = require('./utils/options')
const { color, messageLog } = require('./utils')
const HandleMsg = require('./HandleMsg')

const start = (jarot = new Client()) => {
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('ARUGA BOT', { font: 'Ghost', horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color('[DEV]'), color('ArugaZ', 'yellow'))
    console.log(color('[~>>]'), color('BOT Started!', 'green'))

    // Mempertahankan sesi agar tetap nyala
    jarot.onStateChanged((state) => {
        console.log(color('[~>>]', 'red'), state)
        if (state === 'CONFLICT' || state === 'UNLAUNCHED') jarot.forceRefocus()
    })

    // ketika bot diinvite ke dalam group
    jarot.onAddedToGroup(async (chat) => {
	const groups = await jarot.getAllGroups()
	// kondisi ketika batas group bot telah tercapai,ubah di file settings/setting.json
	if (groups.length > groupLimit) {
	await jarot.sendText(chat.id, `Sorry, the group on this bot is full\nMax Group is: ${groupLimit}`).then(() => {
	      jarot.leaveGroup(chat.id)
	      jarot.deleteChat(chat.id)
	  }) 
	} else {
	// kondisi ketika batas member group belum tercapai, ubah di file settings/setting.json
	    if (chat.groupMetadata.participants.length < memberLimit) {
	    await jarot.sendText(chat.id, `Sorry, BOT comes out if the group members do not exceed ${memberLimit} people`).then(() => {
	      jarot.leaveGroup(chat.id)
	      jarot.deleteChat(chat.id)
	    })
	    } else {
        await jarot.simulateTyping(chat.id, true).then(async () => {
          await jarot.sendText(chat.id, `Hai minna~, Im Aruga BOT. To find out the commands on this bot type ${prefix}menu`)
        })
	    }
	}
    })

    // ketika seseorang masuk/keluar dari group
    jarot.onGlobalParicipantsChanged(async (event) => {
        const host = await jarot.getHostNumber() + '@c.us'
		const welcome = JSON.parse(fs.readFileSync('./settings/welcome.json'))
		const isWelcome = welcome.includes(event.chat)
		let profile = await jarot.getProfilePicFromServer(event.who)
		if (profile == '' || profile == undefined) profile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
        // kondisi ketika seseorang diinvite/join group lewat link
        if (event.action === 'add' && event.who !== host && isWelcome) {
			await jarot.sendFileFromUrl(event.chat, profile, 'profile.jpg', '')
            await jarot.sendTextWithMentions(event.chat, `Hello, Welcome to the group @${event.who.replace('@c.us', '')} \n\nHave fun with us✨`)
        }
        // kondisi ketika seseorang dikick/keluar dari group
        if (event.action === 'remove' && event.who !== host) {
			await jarot.sendFileFromUrl(event.chat, profile, 'profile.jpg', '')
            await jarot.sendTextWithMentions(event.chat, `Good bye @${event.who.replace('@c.us', '')}, We'll miss you✨`)
        }
    })

    jarot.onIncomingCall(async (callData) => {
        // ketika seseorang menelpon nomor bot akan mengirim pesan
        await jarot.sendText(callData.peerJid, 'Maaf sedang tidak bisa menerima panggilan.\n\n-bot')
        .then(async () => {
            // bot akan memblock nomor itu
            await jarot.contactBlock(callData.peerJid)
        })
    })

    // ketika seseorang mengirim pesan
    jarot.onMessage(async (message) => {
        jarot.getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[jarot]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    jarot.cutMsgCache()
                }
            })
        HandleMsg(jarot, message)    
    
    })
	
    // Message log for analytic
    jarot.onAnyMessage((anal) => { 
        messageLog(anal.fromMe, anal.type)
    })
}

//create session
create(options(true, start))
    .then((jarot) => start(jarot))
    .catch((err) => new Error(err))
