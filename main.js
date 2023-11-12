const { Client, Events, GatewayIntentBits} = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("message", (message) => {
    if (message.content === "hello") {
        message.reply("hi!");
    }
});

client.login(token)