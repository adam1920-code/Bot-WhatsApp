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
║│➸ *AUTHOR*: _ADAMOEY19_
║│➸ *BOT NAME*: _WIKIBOT™_
║│➸ *INSTAGRAM*: _@adam_oey107_
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
