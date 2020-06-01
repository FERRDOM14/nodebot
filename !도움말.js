client.on('message', (message) => {
    if(message.content === '!도움말') {
      message.reply('아직은 미완성 봇입니다. 더 더욱 기능이 좋은 봇으로 오겠습니다.');
    }
  });
  
  client.login(token);