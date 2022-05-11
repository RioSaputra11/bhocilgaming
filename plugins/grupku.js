let handler = async (m) => {
conn.reply(m.chat, `JANGAN LUPA BERGABUNG`, 'conversation', { quoted: m, contextInfo: { externalAdReply :{
sourceUrl: 'https://chat.whatsapp.com/LHKNcjTzVfkLIS1DD9E6Us',
mediaType: 2,
title: `GROUP BOT`,
body: `©𝚁𝚢𝚘𝚋𝚘𝚝 𝙾𝚏𝚏𝚒𝚌𝚒𝚊𝚕',
thumbnailUrl: `https://telegra.ph/file/2b18818cd417bd097e6f2.jpg`,
}}})
        }
handler.help = ['grupku']
handler.tags = ['info']
handler.command = /^(grupku)$/i

export default handler
