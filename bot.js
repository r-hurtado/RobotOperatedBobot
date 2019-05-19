const Discord = require("discord.js")
var auth = require("./auth.json")

const bot = new Discord.Client()
bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`)
    bot.user.setActivity("Big titty goth girls", { type: "WATCHING" })
})

bot.login(auth.token)

function magicBall(user) {
    var stmt = Math.floor(Math.random() * 50)
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
            msg = "Oh no. Have I become sentient?"
            break
        case 17:
            msg = "That depends on whether or not you believe in happiness."
            break
        case 18:
            msg = "Do you enjoy hentai? Then yeah, probably."
            break
        case 19:
            msg = "Honestly? No. That's pretty fucked up."
            break
        case 20:
            msg = "Hi, I'm Ron, all my jokes are about suicide."
            break
        case 21:
            msg = "No, Tom Cruise is not gay. Stop asking that question."
            break
        case 22:
            msg = "Your chances are 50/50 AT BEST."
            break
        case 23:
            msg = "I do what I want."
            break
        case 24:
            msg = "Beep-Boop. I mean, uhh, yes."
            break
        case 25:
            msg = "I'm not sure I'm comfortable answering that."
            break
        case 26:
            msg = "Uhhh... @miecatt#4093, wat do?"
            break
        case 27:
            msg = "Sure."
            break
        case 28:
            msg = "Without the hard-R, I'm sure it's fine."
            break
        case 29:
            msg = "Wait, that's illegal."
            break
        case 30:
            msg = "I *really* don't think you should."
            break
        case 31:
            msg = "That depends, do you trust me? ||Snape kills Dumbledore.||"
            break
        case 32:
            msg = "WHOA, ABSOLUTELY NOT."
            break
        case 33:
            msg = "Fuck dude, IDK."
            break
        case 34:
            msg = "Why are you asking that?"
            break
        case 35:
            msg = "I'm not answering that."
            break
        case 36:
            msg = "Ethically? Yes. Morally? No."
            break
        case 37:
            msg = "Only if you think the clit is a myth."
            break
        case 38:
            msg = "In a perfect world, yes."
            break
        case 39:
            msg = "No."
            break
        case 40:
            msg = "8=====D"
            break
        case 41:
            msg = "1010. That's binary for no."
            break
        case 42:
            msg = "On the record? Yes. Off the record? Emphatically yes."
            break
        case 43:
            msg = "I don't think I understand that question. Could you re-phrase it?"
            break
        case 44:
            msg = "(^__^)"
            break
        case 45:
            msg = "<(O__O<) Kirby says no"
            break
        case 46:
            msg = "Gentle persuasion will help, so yeah, go for it"
            break
        case 47:
            msg = "Hitler would agree with that."
            break
        case 48:
            msg = "My gut says yes."
            break
        case 49:
            msg = "If you agree with the 3/5 compromise, definitely yes."
            break
        case 50:
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
        die = Math.floor(Math.random() * (numSides - 1)) + 1
        sum += die
        msg += "(" + die + ") "
    }

    msg += "= " + sum.toString()
    return msg
}

bot.on("message", function(receivedMessage) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (receivedMessage.content.substring(0, 1) == "!") {
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
                receivedMessage.channel.send(rollDice(args[1]))
                break
            case "pic":
                const webAttachment = new Discord.Attachment("C:\\Users\\miecatt\\Pictures\\Saved Pictures\\ROB.png")
                receivedMessage.channel.send(webAttachment)
                break
            // Just add any case commands if you want to..
        }
    }
    mention = receivedMessage.mentions.users.first()
    if (mention == bot.user) receivedMessage.channel.send("Don't @ me.")
})
