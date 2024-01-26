const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Provides information about the user and the server.'),

  async execute(interaction) {
	const embed = {
      color:'15878906',
      fields: [
		{
			name:'Server Information',
			value:`Server: ${interaction.guild.name}\nMembers: ${interaction.guild.memberCount}`,
		},
		{
			name:'User Information',
			value:`Username: ${interaction.user.username}\nJoined at: ${interaction.member.joinedAt}.`,
		},
	  ]
	};

	await interaction.reply({ embeds: [embed] });
	},

};