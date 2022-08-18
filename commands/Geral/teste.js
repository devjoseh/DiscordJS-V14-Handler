const { EmbedBuilder } = require('discord.js');

module.exports = {

    name: 'teste',
    aliases: ['test'],
    description: "Apenas um Comando Teste!",
    usage: '!teste',
    category: 'Geral',
    cooldown: 5000,
	userPerms: ['Administrator'],
	botPerms: ['Administrator'],

	run: async (client, message, args) => {
        return message.channel.send(`abc`)
	}
};