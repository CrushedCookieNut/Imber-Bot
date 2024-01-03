const { SlashCommandBuilder } = require('discord.js');

const gifs = ["https://tenor.com/view/hug-anime-hugging-love-i-missed-you-gif-7552077", "https://tenor.com/view/hug-hugging-comfort-cuddle-love-gif-4885268", "https://tenor.com/view/anime-hug-k-on-so-tired-eyes-closed-gif-17509835", "https://tenor.com/view/hug-anime-cute-comfort-cuddle-gif-17907296", "https://tenor.com/view/anime-happy-girl-hug-shocked-gif-15788552", "https://tenor.com/view/chuunibyou-hug-anime-gif-10942016", "https://wifflegif.com/tags/139561-anime-hug-gifs", "https://tenor.com/view/hug-anime-kon-hugging-imissed-you-gif-7552072", "https://www.pinterest.com/pin/3870349666023883/", "https://tenor.com/de-CH/view/hug-anime-love-cute-seraph-of-the-end-gif-14495460", "https://tenor.com/view/hug-anime-gif-10195705", "https://tenor.com/view/hug-darker-than-black-anime-gif-13976210", "https://tenor.com/view/anime-hug-jump-intense-kyoukai-no-kanata-gif-7988203", "https://tenor.com/view/anime-hug-gif-9200935", "https://www.tenor.co/view/hug-anime-gif-4898650"];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hugs a user.'),
	async execute(interaction) {
        i=Math.floor(Math.random() * 5);
		await interaction.reply(gifs[i]);
	},
};