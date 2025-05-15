const mineflayer =
require('mineflayer');

const bot = mineflayer.createBot({
  host: 'mc1679557.fmcs.cloud',
  port: 35592,
  username: 'AfkBot',
  version: false
});

bot.on('spawn', () => {
  console.log('Bot je ušao na server!');
});
