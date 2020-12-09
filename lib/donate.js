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
║ *Donasi Ke ${ROOTBOT}*
╠════════════════════
║├≽️⚜ *OVO*: _0823-2802-3356_
║├≽️⚜ *PULSA*: _0823-2802-3356_
║├≽️⚜ *GOPAY*: _0823-2802-3356_
╠════════════════════
║  *${ROOTBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${ROOTBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY TnDjarot-ID404*_
╚════════════════════`
}

