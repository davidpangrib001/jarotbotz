let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

› ROZI
› ZIFA BOTZ
› JAROT
› DAVITT
› ALYAA XZY 
› BOTCAHX ( Tio )
› NURUTOMO
› LAYANAN API
› ALL CREATOR BOT
› ALL USER BOT
`.trim(), watermark, 'TERIMAKASIH👋', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
