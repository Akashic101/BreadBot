/* eslint-disable no-undef */
const Discord = require(`discord.js`);
var pjson = require(`../package.json`);

module.exports = async (client, message) => {

	if (client.bot) return;

	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: `MESSAGE_DELETE`,
	});

	const deletionLog = fetchedLogs.entries.first();

	if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

	const {
		executor,
		target
	} = deletionLog;

	const messageDeletedEmbed = new Discord.MessageEmbed()
		.setTitle(`**Deleted message**`)
		.setColor(`#c3032b`)
		.setTimestamp()
		.setFooter(`BreadBot V${pjson.version}`, 'https://cdn.discordapp.com/app-icons/777884542924488715/7ab195239e08e913b4434905a19b94db.png?size=256');

	if (target.id === message.author.id) {
		messageDeletedEmbed.setDescription(`A message by **${message.author.tag}** was deleted by **${executor.tag}**.`);
		messageDeletedEmbed.setThumbnail(message.author.displayAvatarURL({
			format: `jpg`
		}));
	} else {
		messageDeletedEmbed.setDescription(`A message by **${message.author.tag}** was deleted, but I don't know by who`);
		messageDeletedEmbed.setThumbnail(message.author.displayAvatarURL({
			format: `jpg`
		}));
	}
	let log_channel = message.guild.channels.cache.get(channel => channel.id === '777887023876669441')
	return log_channel.send(memberLeftEmbed)
};