const Discord = require('discord.js');
const magicConch = require('magic-conch-core');

if (!process.env.DISCORD_API_KEY) {
  require('dotenv').config();
}

const token = process.env.DISCORD_API_KEY;

const bot = new Discord.Client();

bot.login(token)
 .catch(e => {
   console.log(e);
 });


bot.on('ready', () => {
  console.log('Ready!');
});

bot.on('message', (msg) => {
  if (msg.isMentioned('507355928950210584')) {
    msg.reply(magicConch(msg.content));
  }
});
