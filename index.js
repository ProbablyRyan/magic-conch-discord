const Discord = require('discord.js');
const magicConch = require('magic-conch-core');

if (!process.env.DISCORD_BOT_TOKEN || !process.env.DISCORD_CLIENT_ID) {
  require('dotenv').config();
}

const token = process.env.DISCORD_BOT_TOKEN;
const clientID = process.env.DISCORD_CLIENT_ID;

const bot = new Discord.Client();

bot.login(token)
 .catch(e => {
   console.log(e);
 });

bot.on('ready', () => {
  console.log('Ready!');
});

bot.on('message', (msg) => {
  if (msg.isMentioned(clientID)) {
    msg.reply(magicConch(msg.content));
  }
});
