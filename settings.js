const fs = require('fs')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'ohyRFakHccZKlJw',
}

global.namabot = "Zuka"
global.namaowner = "Zuka"
global.packname = namabot
global.author = namaowner
global.myweb = "https://Zuka.vercel.app"
global.footer_text = " " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6283174508962']
global.ownernomer = ['6283174508962']
global.sessionName = 'session'
global.background = "https://telegra.ph/file/40342e0085d521cb8b907.jpg" //maks size 50kb agar welcome nya gk lemot
global.prefa = ['-_-']
global.grup_only = false //bot hanya bisa di gunakan dalam grup jika true
global.mess = {
    done: 'Done ✅',
    wait: '_Sedang di proses_',
    admin: '_Fitur Khusus Admin Group_',
    botNotAdmin: '_Jadikan Bot Sebagai Admin Terlebih Dahulu_',
    owner: '_Fitur Khusus Owner Bot_',
    group: '_Fitur Khusus Dalam Group_',
}
global.butwel =  [{
   buttonId: '.menu',
   buttonText: {
      displayText: '⚡ Menu'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner 👤'
   },
   type: 1
}]
global.help = {
menu(pushname, salam, mundur, upload, download, totalGb, usedGb, freeGb, ownerName, botName, jam, tanggal, runtime, prefix){
  return `${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}

*HITUNG MUNDUR IDUL FITRI*
 ${mundur}

Creator : wa.me/6283174508962
Time : ${jam}
Date : ${tanggal}
Runtime : ${runtime}

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
.ai
`
}
}
