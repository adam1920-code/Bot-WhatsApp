const fs = require('fs-extra')

module.exports = left = async (rootbot, event) => {
    //console.log(event.action)
    const left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
    const isLeft = left.includes(event.chat)
    try {
        if (event.action == 'remove' && left) {
            const gChat = await rootbot.getChatById(event.chat)
            const pChat = await rootbot.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await rootbot.getProfilePicFromServer(event.who)
            const capt = `Sayonaraaa @${event.who.replace('@c.us', '')} 👋`
            if (pepe == '' || pepe == undefined) {
                await rootbot.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg')
            } else {
                await rootbot.sendFileFromUrl(event.chat, pepe, 'profile.jpg')
                rootbot.sendTextWithMentions(event.chat, capt)
            }
        }
    } catch (err) {
        console.log(err)
    }
}
