const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('croissant')
		.setDescription('Replies with Quaso!'),
	async execute(interaction) {
		await interaction.reply('Quaso...');
	},
};
