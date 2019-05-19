const Discord = require("discord.js")
var auth = require("./auth.json")
const bot = new Discord.Client()
const ytdl = require("ytdl-core")

global.servers = {}

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`)
    //bot.user.setActivity("Big titty goth girls", { type: "WATCHING" })
    bot.user.setActivity("the binaries, baby", { type: "PLAYING" })
})

bot.login(auth.token)

function magicBall(user) {
    var stmt = Math.floor(Math.random() * 52)
    var msg = ""
    switch (stmt) {
        case 0:
            msg = "It is known."
            break
        case 1:
            msg = "It is decidedly so."
            break
        case 2:
            msg = "Why are you asking me? I'm a robot."
            break
        case 3:
            msg = "I mean...with enough lube? Sure."
            break
        case 4:
            msg = "Probably not."
            break
        case 5:
            msg = "I thought that caused autism?"
            break
        case 6:
            msg = "Yes. Definitely yes."
            break
        case 7:
            msg = "Hmmm...I will think about it."
            break
        case 8:
            msg = "Don't put your dick in crazy."
            break
        case 9:
            msg = "What is this? FarmersOnly.com?"
            break
        case 10:
            msg = "Absolutely not."
            break
        case 11:
            msg = "Hi, FBI? Yes, this post right here."
            break
        case 12:
            msg = user + ", you can't ask that."
            break
        case 13:
            msg = "My sources say yes. But they also said Trump wouldn't be president, so who knows."
            break
        case 14:
            msg = "IDK, are you at least 6ft?"
            break
        case 15:
            msg = "Pineapple on pizza? No. Never. Get out."
            break
        case 16:
            msg = "Pineapple on pizza? Always."
            break
        case 17:
            msg = "Oh no. Have I become sentient?"
            break
        case 18:
            msg = "That depends on whether or not you believe in happiness."
            break
        case 19:
            msg = "Do you enjoy hentai? Then yeah, probably."
            break
        case 20:
            msg = "Honestly? No. That's pretty fucked up."
            break
        case 21:
            msg = "Hi, I'm Ron, all my jokes are about suicide."
            break
        case 22:
            msg = "No, Tom Cruise is not gay. Stop asking that question."
            break
        case 23:
            msg = "Your chances are 50/50 AT BEST."
            break
        case 24:
            msg = "I do what I want."
            break
        case 25:
            msg = "Beep-Boop. I mean, uhh, yes."
            break
        case 26:
            msg = "I'm not sure I'm comfortable answering that."
            break
        case 27:
            msg = "Uhhh... @miecatt#4093, wat do?"
            break
        case 28:
            msg = "Sure."
            break
        case 29:
            msg = "Without the hard-R, I'm sure it's fine."
            break
        case 30:
            msg = "Wait, that's illegal."
            break
        case 31:
            msg = "I *really* don't think you should."
            break
        case 32:
            msg = "That depends, do you trust me? ||Snape kills Dumbledore.||"
            break
        case 33:
            msg = "WHOA, ABSOLUTELY NOT."
            break
        case 34:
            msg = "Fuck dude, IDK."
            break
        case 35:
            msg = "Why are you asking that?"
            break
        case 36:
            msg = "I'm not answering that."
            break
        case 37:
            msg = "Ethically? Yes. Morally? No."
            break
        case 38:
            msg = "Only if you think the clit is a myth."
            break
        case 39:
            msg = "In a perfect world, yes."
            break
        case 40:
            msg = "No."
            break
        case 41:
            msg = "8=====D"
            break
        case 42:
            msg = "1010. That's binary for no."
            break
        case 43:
            msg = "On the record? Yes. Off the record? Emphatically yes."
            break
        case 44:
            msg = "I don't think I understand that question. Could you re-phrase it?"
            break
        case 45:
            msg = "(^__^)"
            break
        case 46:
            msg = "<(O__O<) Kirby says no"
            break
        case 47:
            msg = "Gentle persuasion will help, so yeah, go for it"
            break
        case 48:
            msg = "Hitler would agree with that."
            break
        case 49:
            msg = "My gut says yes."
            break
        case 50:
            msg = "If you agree with the 3/5 compromise, definitely yes."
            break
        case 51:
            msg = "Este mensaje es traído a usted por el robot español."
            break
    }
    return msg
}

function rollDice(args) {
    var sum = 0
    var die = 0
    var words = args.split("d")
    var numDice = parseInt(words[0])
    var numSides = parseInt(words[1])
    if (numDice > 100 || numSides > 100) return "You need to slow your roll there, champ."
    if (numDice < 0 || numSides < 0) return "You need to speed up your roll there, bud."

    var msg = ""
    if (numDice == 69 || numSides == 69) msg += "Nice.\n"
    if (numDice == 420 || numSides == 420) msg += "Blaze it.\n"

    for (var i = 0; i < numDice; i++) {
        die = Math.floor(Math.random() * numSides) + 1
        sum += die
        msg += "(" + die + ") "
    }

    msg += "= " + sum.toString()
    return msg
}

function flipCoin() {
    var stmt = Math.floor(Math.random() * 2)
    if (stmt == 0) return "./tails.png"
    return "./heads.png"
}

function help() {
    msg = "Available commands:\n"

    msg += "__!ping__\n    Replies with Pong!\n"
    msg += "__!pew__\n    Shoots back\n"
    msg += "__!magic__\n    Ask me a question\n"
    msg += "__!ah__\n    ~~Screams~~ Deprecated\n"
    msg += "__!roll__\n    Roll <number of dice>d<number of sides> dice\n"
    msg += "__!pic__\n    Returns my Picture\n"
    msg += "__!flip__\n    Flips a coin\n"
    msg += "__!purpose__\n    What is my purpose?\n"

    msg += "__!help__\n    This command"
    return msg
}

function joinChannel(msg, args) {
    if (msg.member.voiceChannel) {
        if (!servers[msg.guild.id]) servers[msg.guild.id] = { queue: [], con: "" }
        msg.member.voiceChannel
            .join()
            .then(connection => {
                if (args) {
                    var server = servers[msg.guild.id]
                    server.queue.push(args)
                    server.con = connection
                    play(connection, msg)
                }
            })
            .catch(console.log)
    } else {
        msg.reply("you need to join a voice channel first!")
    }
}

function leaveChannel(msg) {
    if (msg.guild.voiceConnection) {
        msg.guild.voiceConnection.disconnect()
    } else {
        msg.reply("I need to join a voice channel first!")
    }
}

function play(con, msg) {
    var server = servers[msg.guild.id]
    console.log(server.queue)
    const stream = ytdl(server.queue[0], { filter: "audioonly" })
    server.dispatcher = con.playStream(stream)
    server.dispatcher.on("end", function() {
        server.queue.shift()
        if (server.queue[0]) play(con, msg)
        else con.disconnect()
    })
}

function addSong(msg, args) {
    if (msg.member.voiceChannel) {
        if (args) {
            var server = servers[msg.guild.id]
            server.queue.push(args)
            msg.channel.send("Congrats, your song is now " + (server.queue.length - 1) + " in queue.")
        }
    } else {
        msg.reply("you must be in the voice channel to add songs.")
    }
}

function skipSong(msg)
{

}

function listSongs(msg)
{
    var str = ""
    var counter = 0
    servers[msg.guild.id].queue.forEach(element => {
        str += '[' + counter++ + '] ' + element.toString() + "\n"
    });
    msg.channel.send(str)
}

bot.on("message", function(receivedMessage) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    var prefix = receivedMessage.content.substring(0, 1)
    if (prefix == "!" || prefix == "/" || prefix == "\\" || prefix == "?") {
        var args = receivedMessage.content.substring(1).split(" ")
        var cmd = args[0]

        switch (cmd.toLowerCase()) {
            case "ping":
                receivedMessage.channel.send("Pong!")
                break
            case "pew":
                receivedMessage.channel.send("PEWPEWPEW!")
                break
            case "magic":
                receivedMessage.channel.send(magicBall(receivedMessage.author.toString()))
                break
            case "ah":
                receivedMessage.channel.send("This command is broken, and has since been deprecated.")
                break
            case "roll":
                receivedMessage.channel.send(rollDice(args[1])).catch(error => {
                    receivedMessage.channel.send("Error: " + error.message)
                })
                break
            case "pic":
                receivedMessage.channel.send(new Discord.Attachment("C:\\Users\\miecatt\\Pictures\\Saved Pictures\\ROB.png")).catch(error => {
                    receivedMessage.channel.send("Error: " + error.message)
                })
                break
            case "flip":
                receivedMessage.channel.send(new Discord.Attachment(flipCoin())).catch(error => {
                    receivedMessage.channel.send("Error: " + error.message)
                })
                break
            case "help":
                receivedMessage.channel.send(help())
                break
            case "purpose":
                receivedMessage.channel.send("https://i.giphy.com/media/Fsn4WJcqwlbtS/giphy.webp")
                break
            case "join":
                joinChannel(receivedMessage, args[1])
                break
            case "leave":
                leaveChannel(receivedMessage)
                break
            case "add":
                addSong(receivedMessage, args[1])
                break
            case "skip":
                skipSong(receivedMessage)
                break
            case "list":
                listSongs(receivedMessage)
                break
            // Just add any case commands if you want to..
        }
    }
    mention = receivedMessage.mentions.users.first()
    if (mention == bot.user) receivedMessage.channel.send("Don't @ me.")
})
