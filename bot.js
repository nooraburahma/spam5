const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("578505943013130240")
setInterval(function() {
channel.send(`سبحان الله اللهم صلى على سيدنا محمد`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
