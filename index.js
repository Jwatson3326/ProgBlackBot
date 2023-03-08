//any comments written in this file are to cement my understanding of what the program is doing, as most of this will be taken from guides, referenced in the ReadMe

const { Client, GatewayIntentBits, Collection, Events } = require('discord.js') // allows us to use discord.js commands
const { token } = require('./config.json')
const fs = require('node:fs')
const path = require('node:path')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ], //I think this is kinda like what the bot intents to do, i.e. read and write messages in guilds (servers)
})

client.commands = new Collection()

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')); //This is getting all the js files contained within the "commands" directory

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file); //creates a variable with the file path of the command
	const command = require(filePath); //reads the content of that file 
	if ('data' in command && 'execute' in command) {//must require data and execute properties, as each command must have a name to call upon, and must perform some form of action, otherwise it isn't a command
		client.commands.set(command.data.name, command); //adds command to client.commands, which is a collection of commands, not ready to execute yet
	} 
    else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	} //exception handling
}

client.on(Events.InteractionCreate, async interaction => { 
    //listens for event, then runs code
	if (!interaction.isChatInputCommand()) return; //if not slash command, return

	const command = interaction.client.commands.get(interaction.commandName); //finds name of command

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return; //if no command name, return error and return
	}

	try {
		await command.execute(interaction); //try to execute command (runs execture from the command file)
	} catch (error) { //if command doesn't work
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true }); //if replied then follow up reply
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true }); //if not replied, then reply
		}
	}
});

client.on('ready', () => {
    console.log('The bot is ready')
}) //tells us if the bot is ready


client.login(token)