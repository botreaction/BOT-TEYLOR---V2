import fetch from "node-fetch"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    const text = args.length >= 1 ? args.slice(0).join(" ") : (m.quoted && m.quoted?.text || m.quoted?.caption || m.quoted?.description) || null;

    if (!text) return m.reply(`Masukkan teks atau reply pesan dengan teks yang ingin diolah.\nContoh penggunaan:\n*${usedPrefix}${command} Hai, apa kabar?*`);

    await m.reply(wait)
    try {
        let res = await FreeGPT4(text)
        await m.reply(res)
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["freegpt4"]
handler.tags = ["gpt"];
handler.command = /^(freegpt4)$/i

export default handler

/* New Line */
async function FreeGPT4(your_qus) {
try {
    const response = await fetch("https://api.freegpt4.ddns.net/?text=" + encodeURIComponent(your_qus));
    const res = await response.text();
    return res || null;
     } catch (e) {
        return e || null;
    }
}