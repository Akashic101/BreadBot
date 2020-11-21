/* eslint-disable no-undef */

const Discord = require(`discord.js`);
const pjson = require(`../package.json`);

module.exports = async (client, member) => {

	var date = new Date();

	timeDifference = Math.abs(date.getTime() - member.user.createdAt.getTime());
	timeDifference = timeDifference / (1000 * 3600 * 24)

	const memberJoinedEmbed = new Discord.MessageEmbed()
		.setColor('#cf8d1c')
		.setTitle('Member joined')
		.addFields({
			name: 'Username',
			value: member.user.tag
		}, {
			name: 'Joined at',
			value: date
		}, )
		.setThumbnail(member.user.displayAvatarURL({
			format: 'jpg'
		}))
		.setTimestamp()
		.setFooter(`BreadBot V${pjson.version}`, 'https://cdn.discordapp.com/app-icons/777884542924488715/7ab195239e08e913b4434905a19b94db.png?size=256');

	if (timeDifference <= 7) {
		memberJoinedEmbed.setDescription(`**Warning** The account of ${member.user.tag} is only ${Math.ceil(timeDifference)} days old`)
	}

	let log_channel = message.guild.channels.cache.get(channel => channel.id === '764316786635046954')
	return log_channel.send(memberJoinedEmbed)
};