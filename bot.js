const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'jgalere') {
    msg.reply('GALERIEN VA FOUTRE QQ CHOSE');
  }
});

client.login('NTcyMTM2NzE3MzY1MDE4NjU1.XMdUuQ.Fe0h9Lf14sAPv8syo10xoNNZGmo');
