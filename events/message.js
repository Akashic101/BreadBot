/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */

const Discord = require(`discord.js`);
var pjson = require(`../package.json`);

const prefix = `!`;

module.exports = async (client, message) => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix) || message.author.bot || message.author.self || !client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.modOnly) {
        if (!message.member.roles.cache.some((role) => role.id == '764276592427270154')) {
            return message.reply(`This command is only available for moderators. You do not have the permissions to use it`);
        }
    }

    sendLog(command, message)
    return command.execute(client, message, args);


    function sendLog(command, message) {
        var serverLogEmbed = new Discord.MessageEmbed()
            .setColor(command.color)
            .setTitle(`**${command.name}**`)
            .setDescription(command.description)
            .addFields({
                name: `Username`,
                value: message.member.user.tag
            }, {
                name: `Command`,
                value: message.content
            }, {
                name: `Date`,
                value: date = new Date().toUTCString()
            })
            .setThumbnail(message.member.user.displayAvatarURL({
                format: `jpg`
            }))
            .setTimestamp()
            .setFooter(`BreadBot V${pjson.version}`, 'https://cdn.discordapp.com/app-icons/777884542924488715/7ab195239e08e913b4434905a19b94db.png?size=256');
        client.channels.cache.get("764316786635046954").send(serverLogEmbed)
    }
}