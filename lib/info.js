exports.info = (id, ROOTBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
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
║ *About ${ROOTBOT}*
╠════════════════════
║   *⚠️WARNING⚠️*
╠════════════════════
╠════════════════════
║ *TIDAK BOLEH*
║  *MENGGANTI INFO!!!*
╠════════════════════
║╭──❉ *INFO* ❉──
║│➸ *AUTHOR*: _FikriLangkap_
║│➸ *BOT NAME*: _ROOTBOT_
║│➸ *INSTAGRAM*: _@creator_official03_
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
