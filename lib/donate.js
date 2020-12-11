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
║│➸ *OVO*: _0823-2802-3356_
║│➸ *PULSA*: _0823-2802-3356_
║│➸ *GOPAY*: _0823-2802-3356_
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
║ _*POWERED BY FIKRI LANGKAP*_
╚════════════════════`
}

