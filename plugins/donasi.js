let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [082119094904]
│ • Hasil donasi akan dibelikan RDP/VPS agar bot berjalan 24 jam 
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282117332347
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
