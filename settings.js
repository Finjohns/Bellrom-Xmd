//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: JINWIILONGINJO" //ur yt chanel name
global.socialm = "IG: JINWIIL ONGINJO" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = '𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝' //ur bot name
global.ownernumber = '254769365617' //ur owner number
global.ownername = '© JINWIILONGINJO' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaxZbeSDTkJwBgUb9u3N" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/EqDVC9BGF9k86ZMHdjxY0d" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "JINWIIL ONGINJO"
global.botscript = 'https://whatsapp.com/channel/0029VaxZbeSDTkJwBgUb9u3N' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = "VINKEL"
global.author = "JINWIIL"
global.creator = "254769365617@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254769365617"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v8'
global.typereply = 'v1' // reply type 'v1' => 'v3'
global.autoblocknumber = '263,234' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XMEDIA/theme/bellah.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
