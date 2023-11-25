var Discord = require('discord.js');
const { PermissionsBitField,EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user.')
        .getUser(user, required = true) 
        .getString(reason, required = false),

    async execute(interaction, client) {
        const users = interaction.options.getUser('name');
        const id = users.id;
        const userBan = client.users.cache.get(id);

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await
        interaction.reply({ content: 'You do not have permissions to ban users!'});
        
        if (interaction.member.id === id) return await
        interaction.reply({ content: 'You can not ban yourself!'});

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason given!";

        const embed = new EmbedBuilder()
        .setDescription('Successfully banned **${userBan.tag}** | ${reason}')

        await interaction.guild.bans.create(userBan.id, {reason}).catch(err => {
            return interaction.reply({ content: 'I can not ban this user.'})
        })

        await interaction.reply({ embeds: [embed]});


        
    }

};
