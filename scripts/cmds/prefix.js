module.exports = {
 config: {
         name: "prefix",
         version: "1.0",
         author: "Tokodori_Frtiz",//remodified by cliff
         countDown: 5,
         role: 0,
         shortDescription: "no prefix",
         longDescription: "no prefix",
         category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█

░██████╗██╗░██████╗██╗
██╔════╝██║██╔════╝██║
╚█████╗░██║╚█████╗░██║
░╚═══██╗██║░╚═══██╗██║
██████╔╝██║██████╔╝██║
╚═════╝░╚═╝╚═════╝░╚═╝


 ╭─────────────────────╮
 | 🐰 ﹝ . ﹞ 𝘂𝘀𝗲 𝗺𝘆 𝗽𝗿𝗲𝗳𝗶𝘅 𝗹𝗼𝘃𝗲.
 | 🐰 ﹝ 𝗵𝗲𝗹𝗽 ﹞ 𝘁𝘆𝗽𝗲 𝘁𝗵𝗶𝘀 𝘁𝗼 𝘀𝗲𝗲 𝗰𝗺𝗱𝘀
 | 🐰 𝗨𝗦𝗘 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗔𝗟𝗪𝗔𝗬𝗦 𝗙𝗢𝗥 
 |    𝗣𝗥𝗘𝗩𝗘𝗡𝗧𝗜𝗡𝗚 𝗢𝗙𝗙𝗟𝗜𝗡𝗘
 |     
 |
 | 🐇 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧’𝗦 
 |    𝗔𝗗𝗠𝗜𝗡 𝗜𝗙 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗖𝗠𝗗 
 |    𝗗𝗜𝗘𝗦 :https://www.facebook.com/profile.php?id=100095262681590
 ╰─────────────────────╯`,
 });
 }
 }
}