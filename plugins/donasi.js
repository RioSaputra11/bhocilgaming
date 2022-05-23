let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082119094904]
│ • Telkomsel [082119094904]
╰────
╭─「 NOTE 」
│ • Ingin donasi? wa.me/6282117332347 hasil donasi akan dibelikan
│ • RDP/VPS agar bot berjalan 24 tanpa kendala
| • Terimakasih yang sudah mau berdonasi
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
