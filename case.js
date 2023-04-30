require('./settings')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const FormData = require("form-data");
const {
    fromBuffer
} = require('file-type')
const fetch = require('node-fetch')
const {
    exec
} = require("child_process")
const {
    smsg,
    fetchJson,
    getBuffer,
    getGroupAdmins,
    TelegraPh,
    msToDate,
    isUrl,
    hitungmundur,
    checkBandwidth,
    runtime
} = require('./lib/simple')
const {
    isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome
} = require("./lib/store")
const similarity = require('similarity')
const threshold = 0.72
const nou = require('node-os-utils');

const _family100 = {}
const tebakgambar = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkota = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}

module.exports = alpha = async (alpha, m, chatUpdate, store, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_open, set_close, _welcome, _left) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' //omzee
        var budy = (typeof m.text == 'string' ? m.text : '')
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
        const prefix = isCmd ? budy[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await alpha.decodeJid(alpha.user.id)
        const tanggal = moment().tz("Asia/Jakarta").format("dddd, ll")
        const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz("Asia/Jakarta").locale('id').format('a')
        const isCreator = ["6283174508962@s.whatsapp.net", botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const from = m.chat
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAntiLink = antilink.includes(m.chat) ? true : false
        const isAntiWame = antiwame.includes(m.chat) ? true : false
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false
        const isWelcome = _welcome.includes(m.chat)
        const isLeft = _left.includes(m.chat)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

        const reply = (text) => {
            alpha.sendFakeLink(m.chat, text, salam, footer_text, pp_bot, myweb, pushname, m)
        }


        switch (command) {
            case 'owner':
            case 'creator': {
                alpha.sendContact(m.chat, global.owner, m)
            }
            break
            case 'menu':
            case 'help': {
            reply(`${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}
Creator : wa.me/6283174508962

*Menu Download*
${prefix}igdl
${prefix}igphoto
${prefix}igvideo
${prefix}igreels
${prefix}tiktok
${prefix}tiktokaudio
${prefix}tiktokvn

*Menu Pembuatan*
.sticker

*Menu Openai*
.ai`)
            }
            break
            case 'bot': {
            	m.reply(`Apa Sayang🥰🥰`)
            }
            break
            case 'igphoto':
            case 'instaphoto':
            case 'instafoto':
            case 'igfoto':
            case "ig":
            case "igdl": {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/instagram-photo', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                for (let i of result.url) {
                    alpha.sendFile(m.chat, i, 'ig.jpg', mess.done, m)
                }
            }
            break
            case 'igvideo':
            case 'instavideo':
            case 'instavid':
            case 'igreels':
            case 'instareels':
            case 'instareel': {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/instagram-video', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                for (let i of result.url) {
                    alpha.sendFile(m.chat, i, 'ig.mp4', mess.done, m)
                }
            }
            break
            case "tiktoknowm":
            case "tiktok": {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                alpha.sendMessage(from, {
                    video: {
                        url: result.nowm
                    },
                    mimetype: "video/mp4",
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break
            case "tiktokaudio": {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                alpha.sendMessage(from, {
                    audio: {
                        url: result.audio
                    },
                    mimetype: "audio/mpeg",
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break
            case "tiktokvn": {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                reply(mess.wait)
                let res = await fetch(global.api('alfa', '/api/downloader/tiktok', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var result = result.result
                alpha.sendMessage(from, {
                    audio: {
                        url: result.audio
                    },
                    mimetype: "audio/mpeg",
                    ptt: true,
                    caption: mess.done
                }, {
                    quoted: m
                })
            }
            break
         case 'sgif':
         case 'stikerin':
         case 's':
         case 'sticker':
         case 'stiker': {
         let name = ${pushname}
            if (!quoted) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
            if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: name
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
               let media = await quoted.download()
               let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: name
               })
               await fs.unlinkSync(encmedia)
            } else {
               reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
            }
         }
         break
         case 'ai':
	case 'openai':
	case 'search':
	case 'rain': {
		if (args.length < 1) return reply(`Mau Nanya Apa?`)
	
		axios.get(encodeURI(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${q}&user=user-unique-id `)).then(({
			data
		}) => {
			if (data.result == '') return reply('Kata Kunci Tidak Ditemukan!')
			reply(data.result)
		}).catch((err) => {
				return reply('Terjadi Kesalahan, Mungkin Sistem Sedang Error Atau Coba Ketik Ulang Perintah Kamu!')
			})
	}
	break


            default:
                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    }
                    catch (err) {
                        await reply(util.format(err))
                    }
                }
        }

    }
    catch (err) {
        m.reply(util.format(err))
    }
}