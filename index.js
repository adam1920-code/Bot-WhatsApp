const create = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
const left = require('./lib/left')
const cron = require('node-cron')
const color = require('./lib/color')
const fs = require('fs')
// const msgHndlr = require ('./rootbot')
const figlet = require('figlet')
const options = require('./options')

// AUTO UPDATE BY FIKRI•LANGKAP
// THX FOR FIKRI•LANGKAP
// Cache handler and check for file change
require('./rootbot.js')
nocache('./rootbot.js', module => console.log(`'${module}' Updated!`))

const adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
const setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    mtc: mtcState,
    banChats,
    restartState: isRestart
    } = setting

function restartAwal(rootbot){
    setting.restartState = false
    isRestart = false
    rootbot.sendText(setting.restartId, 'Restart Succesfull!')
    setting.restartId = 'undefined'
    //fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null,2));
}

const start = async (rootbot = new Client()) => {
        console.log('------------------------------------------------')
        console.log(color(figlet.textSync('ROOT BOT', { horizontalLayout: 'full' })))
        console.log('------------------------------------------------')
        console.log('[DEV] FIKRILANGKAP')
        console.log('[SERVER] Server Started!')
        rootbot.onAnyMessage((fn) => messageLog(fn.fromMe, fn.type))
        // Force it to keep the current session
        rootbot.onStateChanged((state) => {
            console.log('[Client State]', state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') rootbot.forceRefocus()
        })
        // listening on message
        rootbot.onMessage((async (message) => {

        rootbot.getAmountOfLoadedMessages() // Cut message Cache if cache more than 3K
            .then((msg) => {
                if (msg >= 1000) {
                    console.log('[CLIENT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    rootbot.cutMsgCache()
                }
            })
        // msgHndlr(rootbot, message)
        // Message Handler (Loaded from recent cache)
        require('./rootbot.js')(rootbot, message)
    }))
           

        rootbot.onGlobalParicipantsChanged((async (heuh) => {
            await welcome(rootbot, heuh) 
            left(rootbot, heuh)
            }))
        
        rootbot.onAddedToGroup(async (chat) => {
            if(isWhite(chat.id)) return rootbot.sendText(chat.id, 'Halo aku Elaina, Ketik #help Untuk Melihat List Command Ku...')
            if(mtcState === false){
                const groups = await rootbot.getAllGroups()
                // BOT group count less than
                if(groups.length > groupLimit){
                    await rootbot.sendText(chat.id, 'Maaf, Batas group yang dapat Elaina tampung sudah penuh').then(async () =>{
                        rootbot.deleteChat(chat.id)
                        rootbot.leaveGroup(chat.id)
                    })
                }else{
                    if(chat.groupMetadata.participants.length < memberLimit){
                        await rootbot.sendText(chat.id, `Maaf, BOT keluar jika member group tidak melebihi ${memberLimit} orang`).then(async () =>{
                            rootbot.deleteChat(chat.id)
                            rootbot.leaveGroup(chat.id)
                        })
                    }else{
                        if(!chat.isReadOnly) rootbot.sendText(chat.id, 'Halo aku Elaina, Ketik #help Untuk Melihat List Command Ku...')
                    }
                }
            }else{
                await rootbot.sendText(chat.id, 'Elaina sedang maintenance, coba lain hari').then(async () => {
                    rootbot.deleteChat(chat.id)
                    rootbot.leaveGroup(chat.id)
                })
            }
        })

        /*rootbot.onAck((x => {
            const { from, to, ack } = x
            if (x !== 3) rootbot.sendSeen(to)
        }))*/

        // listening on Incoming Call
        rootbot.onIncomingCall(( async (call) => {
            await rootbot.sendText(call.peerJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!')
            .then(() => rootbot.contactBlock(call.peerJid))
        }))
    }

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

create(options(true, start))
    .then(rootbot => start(rootbot))
    .catch((error) => console.log(error))
