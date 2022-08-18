const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const config = require('./configs/config.json')
const fs = require('fs')

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});

client.commands = new Collection()
client.aliases = new Collection()
client.prefix = config.prefix
module.exports = client;
client.categories = fs.readdirSync("./commands/");

["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(config.token)