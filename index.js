require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.yes;
console.log(TOKEN)

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.startsWith('hi')||msg.content.startsWith('Hi')) {
    msg.reply('hello gorgeous');
  }
  else if(msg.content.startsWith('bye')){
    msg.reply('bye see you later');
  }
});
