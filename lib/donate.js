exports.donate = (id, ROOTBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *DONASI KE ${ROOTBOT}*
╠════════════════════
║╭──❉ *DONASI BOS* ❉──
║│➸ *OVO*: -
║│➸ *PULSA*: _0831-5384-3600_
║│➸ *GOPAY*: -
║╰───────────
╠════════════════════
║  *${ROOTBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│➸ *Group WhatsApp*
║│ _${groupwhatsapp}_
║│➸ *YouTube <subscribe>*
║│ _${youtube}_
║│➸ *Instagram <Follow>*
║│ _${instagram}_
║│➸ *Creator ${ROOTBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*POWERED BY ONEBOX COMPANY™*_
╚════════════════════`
}

