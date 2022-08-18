const fs = require('fs');
const chalk = require('chalk')
var AsciiTable = require('ascii-table')
var table = new AsciiTable()
table.setHeading('Eventos', 'Status')

module.exports = (client) => {
    fs.readdirSync('./events/').filter((file) => file.endsWith('.js')).forEach((event) => {
      	require(`../events/${event}`);
	table.addRow(event.split('.js')[0], '✅')
    })
	console.log(chalk.greenBright(table.toString()))
};
