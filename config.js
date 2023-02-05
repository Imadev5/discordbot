const Discord = require('discord.js');
const client = new Discord.Client();

//Required Configurations

client.once('ready', () => {
    console.log('Client is Ready');
});

//Events

client.on('message', message => {
    if (message.content === 'Hello') {
        message.channel.send('Hi there!');
    }
});

client.login('MTA3MTkwMTUzMzg5NTE0NzYxMQ.G3E3di.9v-zbIb_jjDDpq7nW2jcbHwRBRyWvDRa3locjE')
    .then(console.log)
    .catch(console.error);





/ Set the prefix for your Discord bot
const PREFIX = '!';

client.on('message', message => {
	// Listen for commands that start with the prefix
	if (message.content.startsWith(PREFIX)) {
		// Do something
	}
});





