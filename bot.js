const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643813432772132867")
setInterval(function() {
channel.send(`anas the king here and fuck you and your mother anas the king here and fuck you and your mother anas the king here and fuck you and your mother`);
}, 30)
})

client.login(process.env.BOT_TOKEN);