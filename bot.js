var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

function magicBall(user)
{
    var stmt = Math.floor(Math.random() * 22);
    var msg = '';
    switch(stmt)
    {
      case 0:
          msg = 'It is certain.';
      break;
      case 1:
          msg = 'It is decidedly so.';
      break;
        case 2:
          msg = "Why are you asking me? I'm a robot.";
      break;
        case 3:
          msg = 'I mean...with enough lube? Sure.';
      break;
        case 4:
          msg = 'Probably not.';
      break;
        case 5:
          msg = 'I thought that caused autism?';
      break;
        case 6:
          msg = 'Yes. Definitely yes.';
      break;
        case 7:
          msg = 'Hmmm...I will think about it.';
      break;
        case 8:
          msg = "Don't put your dick in crazy.";
      break;
        case 9:
          msg = "What is this? FarmersOnly.com?";
      break;
        case 10:
          msg = "Absolutely not.";
      break;
        case 11:
          msg = 'Hi, FBI? Yes, this post right here.';
      break;
        case 12:
          msg = "@" + user;
      break;
        case 13:
          msg = "My sources say yes. But they also said Trump wouldn't be president, so who knows.";
      break;
        case 14:
          msg = "IDK, are you at least 6ft?";
      break;
        case 15:
          msg = "Pineapple on pizza? No. Never. Get out.";
      break;
        case 16:
          msg = "Oh no. Have I become sentient?";
      break;
        case 17:
          msg = "That depends on whether or not you believe in happiness.";
      break;
        case 18:
          msg = "Do you enjoy hentai? Then yeah, probably.";
      break;
        case 19:
          msg = "Honestly? No. That's pretty fucked up.";
      break;
        case 20:
          msg = "Hi, I'm Ron, all my jokes are about suicide.";
      break;
        case 21:
          msg = "No, Tom Cruise is not gay. Stop asking that question.";
      break;
        case 22:
          msg = "Your chances are 50/50 AT BEST.";
      break;
        
    }
    return msg;
}

bot.on('message', function (user, userID, channelID, message, evt, receivedMessage) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd.toLowerCase()) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'pew':
                bot.sendMessage({
                    to: channelID,
                    message: 'PEW!'
                });
            break;
            case 'magic':
                bot.sendMessage({
                    to: channelID,
                    message: magicBall(/*receivedMessage.author.toString()*/"USER")
                });
            break;
            case 'ah':
                bot.sendMessage({
                    to: channelID,
                    message: '!ah'
                });
            break;
            // Just add any case commands if you want to..
        }
    }
});