/* eslint-disable no-undef */

const Discord = require(`discord.js`);
const pjson = require(`../package.json`);

module.exports = async (client, channel, message) => {

    let embed = new Discord.MessageEmbed()
        .setTitle(`**Channel deleted**`)
        .addField(`name`, channel.name, true)
        .addField(`id`, channel.id, true)
        .setColor(`1e1a1e`)
        .setTimestamp()
        .setFooter(`BreadBot V${pjson.version}`, 'https://cdn.discordapp.com/app-icons/777884542924488715/7ab195239e08e913b4434905a19b94db.png?size=256');

    return client.channels.cache.get('764316786635046954').send(embed);
};