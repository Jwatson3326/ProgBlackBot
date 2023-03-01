const { Client, GatewayIntentBits } = require('discord.js') // allows us to use discord.js commands
require('dotenv/config') // links this to our bot token

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ], //I think this is kinda like what the bot intents to do, i.e. read and write messages in guilds (servers)
})

client.on('ready', () => {
    console.log('The bot is ready')
}) //tells us if the bot is ready

client.on('messageCreate', message => {
    if (message.content === 'ping') {
        message.reply('pong')
    }
}) //if user writes 'ping' replies 'pong'

client.login(process.env.TOKEN)