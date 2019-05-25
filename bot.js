const auth = require("../auth.json")
const commandsJSON = require("./commands.json")
const Discord = require("discord.js")
const ytdl = require("ytdl-core")
const bot = new Discord.Client()
const Enmap = require("enmap")

global.servers = {}
var miecatt = {}

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`)
    //bot.user.setActivity("Big titty goth girls", { type: "WATCHING" })
    bot.user.setActivity("those binaries, baby", { type: "PLAYING" })

    bot.fetchUser("276586260326383617")
        .then(user => bot.emit("miecatt", user))
        .catch(console.error)

    bot.points = new Enmap({ name: "points" })
})

bot.on("miecatt", user => {
    miecatt = user
    //console.log(miecatt)
})

bot.on("error", e => {
    console.error(e)
    miecatt
        .send(e)
        .then(message => console.log(`Sent message: ${message.content}`))
        .catch(console.error)
})
bot.on("warn", e => {
    console.warn(e)
    miecatt
        .send(e)
        .then(message => console.log(`Sent message: ${message.content}`))
        .catch(console.error)
})
//bot.on("debug", (e) => console.info(e));

bot.login(auth.token)

function magicBall(user) {
    var stmt = Math.floor(Math.random() * 53)
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
        case 52:
            msg = "Let it be fear."
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

    die = Math.floor(Math.random() * numSides) + 1
    sum += die
    msg += "(" + die + ") "

    for (var i = 0; i < numDice; i++) {
        die = Math.floor(Math.random() * numSides) + 1
        sum += die
        msg += "+ (" + die + ") "
    }

    msg += "= " + sum.toString()
    return msg
}

function flipCoin() {
    var stmt = Math.floor(Math.random() * 2)
    if (stmt == 0) return "./Pics/tails.png"
    return "./Pics/heads.png"
}

function help() {
    var msg = ""
    commandsJSON.commands.forEach(c => {
        msg += "__" + c.name + "__\n    " + c.help + "\n"
    })

    return msg
}

function joinChannel(msg, args) {
    if (msg.member.voiceChannel) {
        servers[msg.guild.id] = { queue: [], con: "" }
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
        servers[msg.guild.id].queue = []
    } else {
        msg.reply("I need to join a voice channel first!")
    }
}

function play(con, msg) {
    var server = servers[msg.guild.id]
    //console.log(server.queue)
    const stream = ytdl(server.queue[0], { filter: "audioonly" })
    server.dispatcher = con.playStream(stream)
    server.dispatcher.on("end", function() {
        server.queue.shift()
        if (server.queue[0]) play(con, msg)
        else con.disconnect()
    })
}

function addSong(msg, args, first = false) {
    if (msg.member.voiceChannel) {
        if (args) {
            var server = servers[msg.guild.id]
            if (first) {
                var first = server.queue.shift()
                server.queue.unshift(args)
                server.queue.unshift(first)
                msg.channel.send("Congrats, your song is now 1 in queue.")
            } else {
                server.queue.push(args)
                msg.channel.send("Congrats, your song is now " + (server.queue.length - 1) + " in queue.")
            }
        }
    } else {
        msg.reply("you must be in the voice channel to add songs.")
    }
}

function listSongs(msg) {
    var str = ""
    var counter = 0
    var max = 5
    var queue = servers[msg.guild.id].queue
    queue.forEach(element => {
        if (counter < max) str += "[" + counter++ + "] " + element.toString() + "\n"
    })
    if (counter < queue.length) str += "Plus " + (queue.length - max) + " more."
    msg.channel.send(str)
}

function addForRuss(msg) {
    var ids = require("./ids.json")
    //console.log(ids.list)
    if (msg.member.voiceChannel) {
        var server = servers[msg.guild.id]
        var list = ids.list
        shuffle(list)
        list.forEach(song => {
            server.queue.push(song)
        })
        msg.channel.send("Congrats, the queue is now " + (server.queue.length - 1) + " songs long.")
    } else {
        msg.reply("you must be in the voice channel to add songs.")
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}

function includesStr(msg, str, reply, attach = false) {
    if (msg.content.toLowerCase().includes(str)) {
        if (attach) reply = new Discord.Attachment(reply)
        msg.channel
            .send(reply)
            .then(() => {
                if (str == "russ") {
                    const emoji = msg.guild.emojis.find(emoji => emoji.name === "1_")
                    msg.channel.lastMessage.react(emoji)
                }
            })
            .catch(error => {
                msg.channel.send("Error: " + error.message)
            })
    }
}

function checkStr(receivedMessage) {
    const lower = receivedMessage.content.toLowerCase()
    const mentions = receivedMessage.mentions.users
    if (mentions.find(val => val.username === bot.user.username)) receivedMessage.channel.send("Don't @ me.")

    includesStr(receivedMessage, "ocelot", "https://media.giphy.com/media/TTCuvR7Zc6hva/giphy.gif")
    includesStr(receivedMessage, "luna", "./Pics/Luna.png", true)
    includesStr(receivedMessage, "danger", "```diff\n-DANGER!\n```")

    // For Travis' server.
    if (receivedMessage.channel.type == "text" && receivedMessage.channel.guild.id == 312816442460602368) {
        if (lower.includes("travis")) {
            receivedMessage
                .react("🇹") //T
                .then(() => receivedMessage.react("🇷")) //R
                .then(() => receivedMessage.react("🇦")) //A
                .then(() => receivedMessage.react("🇻")) //V
                .then(() => receivedMessage.react("🇮")) //I
                .then(() => receivedMessage.react("🇸")) //S
                .catch(error => {
                    msg.channel.send("Error: " + error.message)
                })
        }
        includesStr(receivedMessage, "russ", "Russ? Press 1 to kick.")
    }

    if (lower.includes("rob") || lower.includes("r.o.b.")) {
        const exampleEmbed = new Discord.RichEmbed().setColor("LUMINOUS_VIVID_PINK").setTitle("Sup?")
        receivedMessage.channel.send(exampleEmbed)
    }
}

function sarcasticResponse(msg) {
    var stmt = Math.floor(Math.random() * 3)
    var str = ""
    switch (stmt) {
        case 0:
            str = "Shut up, " + msg.author.toString()
            break
        case 1:
            str = "Wait, no, that's wrong."
            break
        case 2:
            str = "**Sarcastic response.**"
            break
        case 3:
            str = "Math Bot Here: You're wrong because I'm " + msg.author.toString() + " and I am math."
            break
    }
    msg.channel.send(str)
}

function sendEmbed(msg) {
    const exampleEmbed = new Discord.RichEmbed().setColor("LUMINOUS_VIVID_PINK").setTitle("Sup?")
    //.setURL('https://discord.js.org/')
    //.setAuthor('miecatt')
    //.setDescription('Some description here')
    //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
    //.addField('Regular field title', 'Some value here')
    //.addBlankField()
    //.addField('Inline field title', 'Some value here', true)
    //.addField('Inline field title', 'Some value here', true)
    //.addField('Inline field title', 'Some value here', true)
    //.setImage('https://i.imgur.com/wSTFkRM.png')
    //.setTimestamp()
    //.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    msg.channel.send(exampleEmbed)
}

function rank(msg, single = false) {
    const max = 5
    const rankEmbed = new Discord.RichEmbed().setColor(1752220).setTitle("Rankings")
    //.setURL('https://discord.js.org/')
    //.setAuthor('miecatt')
    //.setDescription('Some description here')
    //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
    //.addField('Regular field title', 'Some value here')
    //.addBlankField()
    //.setImage('https://i.imgur.com/wSTFkRM.png')
    //.setTimestamp()
    //.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    const keys = bot.points.indexes.filter(key => key.includes(`${msg.guild.id}-`))

    var guildUsers = []
    keys.forEach(key => {
        var val = bot.points.get(key)
        bot.users.array().forEach(user => {
            //console.log(user)
            if (user.id === val.user) guildUsers.push({ val: val, user: user })
        })
    })

    // Sort descending
    guildUsers.sort((a, b) => b.val.points - a.val.points)

    if (!single) {
        var count = 0
        guildUsers.forEach(user => {
            if (count++ < max) {
                rankEmbed.addField(`#${count} ${user.user.username}`, `Level:  ${user.val.level}\nPoints: ${user.val.points}`)
            }
        })
    } else {
        var placement = guildUsers.findIndex(val => val.user.username === msg.author.username)
        rankEmbed.addField(`${msg.author.username}`, `#${placement + 1}/${msg.guild.members.array().length}`)
    }

    msg.channel.send(rankEmbed)
}

function clean(text) {
    if (typeof text === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
    else return text
}
bot.on("test", test => {
    test.msg.member
        .addRole(test.role)
        .then()
        .catch(console.error)
})

bot.on("message", function(receivedMessage) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (receivedMessage.author !== bot.user) {
        if (receivedMessage.author.username == "miecatt")
            if (receivedMessage.channel.type == "text")
                if (receivedMessage.channel.guild.id == 312816442460602368)
                    // For Travis' server.
                    sarcasticResponse(receivedMessage)

        // Points system
        if (receivedMessage.guild) {
            const key = `${receivedMessage.guild.id}-${receivedMessage.author.id}`
            bot.points.ensure(key, {
                user: receivedMessage.author.id,
                guild: receivedMessage.guild.id,
                points: 0,
                level: 1
            })
            bot.points.inc(key, "points")
            const curLevel = Math.floor(Math.sqrt(bot.points.get(key, "points")))

            // Level up message
            if (bot.points.get(key, "level") < curLevel) {
                receivedMessage.author.send(`You've leveled up to level **${curLevel}** in __${receivedMessage.guild.name}__! Ain't that dandy?`)
                bot.points.set(key, curLevel, "level")
            }
        }

        const prefixes = commandsJSON.prefixes
        const commands = commandsJSON.commands

        //if (prefix == "!" || prefix == "/" || prefix == "\\" || prefix == "?") {
        prefixes.forEach(pre => {
            commands.forEach(com => {
                if (receivedMessage.content.toLowerCase().includes(pre + com.name.toLowerCase())) {
                    var args = receivedMessage.content.substring(1).split(" ")
                    switch (com.name.toLowerCase()) {
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
                            receivedMessage.channel.send(new Discord.Attachment("./Pics/ROB.png")).catch(error => {
                                receivedMessage.channel.send("Error: " + error.message)
                            })
                            break
                        case "flip":
                            receivedMessage.channel.send("Drum roll, please...")
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
                        case "addfirst":
                            addSong(receivedMessage, args[1], true)
                            break
                        case "skip":
                            servers[receivedMessage.guild.id].dispatcher.end()
                            receivedMessage.channel.send("Skipped! Now playing: " + servers[receivedMessage.guild.id].queue[0])
                            break
                        case "current":
                            receivedMessage.channel.send("Currently playing: " + servers[receivedMessage.guild.id].queue[0])
                            break
                        case "pause":
                            const dis = servers[receivedMessage.guild.id].dispatcher
                            if (dis)
                                if (dis.paused) dis.resume()
                                else dis.pause()
                            break
                        case "addforruss":
                            addForRuss(receivedMessage)
                        //break
                        case "list":
                            listSongs(receivedMessage)
                            break
                        case "rank":
                            rank(receivedMessage, true)
                            break
                        case "top":
                            rank(receivedMessage)
                            break
                        case "test": // Used for testing purposes.
                            // miecatt
                            if (receivedMessage.author.id === "276586260326383617") {
                                //bot.emit("error", "hey")
                                //console.log(receivedMessage.author)

                                /*receivedMessage.guild
                                    .createRole({
                                        name: "Crustifer",
                                        color: 1752220,
                                        hoist: true
                                    })
                                    .then(role => bot.emit("test", { role: role, msg: receivedMessage }))
                                    .catch(console.error)
                                bot.users.array().forEach(user => {
                                    console.log(user.username + ": " + user.id)
                                })*/
                                console.log(bot.points)
                            }
                            break
                        // Just add any case commands if you want to...
                        default:
                            receivedMessage.channel.send("Not yet implemented.")
                    }
                }
            })
        })

        checkStr(receivedMessage)
    }
})
