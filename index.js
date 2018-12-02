const Discord = require('discord.js');
const magicConch = require('magic-conch-core');
const auth = require('./auth.json');

const bot = new Discord.Client();

bot.login(auth.token);

bot.on('ready', () => {
  console.log('Ready!');
});

bot.on('message', (msg) => {
  if (msg.isMentioned('507355928950210584')) {
    msg.reply(magicConch(msg.content));
  }
});
