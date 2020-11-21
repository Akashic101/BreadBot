/* eslint-disable no-undef */

const Discord = require(`discord.js`);
const pjson = require(`../package.json`);

module.exports = async (client, member) => {

	var date = new Date();

	const memberLeftEmbed = new Discord.MessageEmbed()
		.setColor('#f14e43')
		.setTitle('Member left')
		.addFields({
			name: 'Username',
			value: member.user.tag
		}, {
			name: 'Left at',
			value: date
		})
		.setThumbnail(member.user.displayAvatarURL({
			format: 'jpg'
		}))
		.setTimestamp()
		.setFooter(`BreadBot V${pjson.version}`, 'https://cdn.discordapp.com/app-icons/777884542924488715/7ab195239e08e913b4434905a19b94db.png?size=256');

		let log_channel = message.guild.channels.cache.get(channel => channel.id === '764316786635046954')
		return log_channel.send(memberLeftEmbed)
};