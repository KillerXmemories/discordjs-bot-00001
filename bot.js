const Discord = require('discord.js');
const bot = new Discord.Client();


bot.once('ready', () => {
    console.log('Bot已啟動');

    bot.user.setActivity('伺服器專用Bot', {type: "PLAYING"}) //設定狀態 type: "playing/watching/listing/streaming"
    .then(presence => console.log(`Bot狀態設置為 ${presence.activities[0].type} ${presence.activities[0].name}`))
    .catch(console.error);

});

bot.on('rateLimit', (info) => {
  console.log(`Rate limit hit ${info.timeDifference ? info.timeDifference : info.timeout ? info.timeout: 'Unknown timeout '}`)
  console.log(`Limit: ${info.limit}`)
  console.log(`Timeout: ${info.timeout}`)
  console.log(`Method: ${info.method}`)
  console.log(`Path: ${info.Path}`)
  console.log(`Route: ${info.route}`)
})


bot.on('guildMemberAdd', member => {
    const username = member.user.username;
    const nickname = `${username} | •́ ▾ •̀ |`;
    if (nickname !== null){
        member.setNickname(nickname);
        console.log(`${username} Auto-Nickname Success!`);
    }
})

bot.login(process.env.BOT_TOKEN);
