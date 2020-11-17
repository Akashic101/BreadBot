/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const Discord = require('discord.js');
const pjson = require(`../package.json`);

module.exports = {
    name: `bread`,
    description: `Lets the user find out what kind of bread he is`,
    async execute(client, message, args) {

        var code;

        var embedQuestion1 = new Discord.MessageEmbed()
            .setColor(`#A3641A`)
            .setDescription('What kind of art do you draw?')
            .addFields({
                name: 'Comics',
                value: ':one:',
                inline: true
            }, {
                name: 'Graphics Designs',
                value: ':two:',
                inline: true
            }, {
                name: 'Sketches',
                value: '3️⃣',
                inline: true
            }, )
            .setTimestamp()
            .setFooter(`BreadBot V${pjson.version}`, 'https://cdn.discordapp.com/app-icons/777884542924488715/7ab195239e08e913b4434905a19b94db.png?size=256');

        var embedQuestion2 = new Discord.MessageEmbed()
            .setColor(`#A3641A`)
            .setDescription('How cool are you?')
            .addFields({
                name: 'Too cool',
                value: ':one:',
                inline: true
            }, {
                name: 'Cool enough',
                value: ':two:',
                inline: true
            }, {
                name: 'Not cool, just hot',
                value: '3️⃣',
                inline: true
            }, )
            .setTimestamp()
            .setFooter(`BreadBot V${pjson.version}`, 'https://cdn.discordapp.com/app-icons/777884542924488715/7ab195239e08e913b4434905a19b94db.png?size=256');

        message.channel.send({
            embed: embedQuestion1
        }).then(embedMessage => {
            embedMessage.react("1️⃣").then(() => embedMessage.react('2️⃣').then(() => embedMessage.react('3️⃣')));

            const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
            };

            embedMessage.awaitReactions(filter, {
                    max: 1,
                    time: 60000,
                    errors: ['time']
                })
                .then(collected => {
                    const reaction = collected.first();

                    switch (reaction.emoji.name) {
                        case '1️⃣':
                            code = 0;
                            break;
                        case '2️⃣':
                            code = 1;
                            break;
                        case '3️⃣':
                            code = 2;
                            break;
                    }

                    message.channel.send({
                        embed: embedQuestion2
                    }).then(embedMessage => {
                        embedMessage.react("1️⃣").then(() => embedMessage.react('2️⃣').then(() => embedMessage.react('3️⃣')));

                        const filter = (reaction, user) => {
                            return ['1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
                        };

                        embedMessage.awaitReactions(filter, {
                                max: 1,
                                time: 60000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                switch (reaction.emoji.name) {
                                    case '1️⃣':
                                        code = code + "0";
                                        break;
                                    case '2️⃣':
                                        code = code + "1";
                                        break;
                                    case '3️⃣':
                                        code = code + "2";
                                        break;
                                }

                                var bread;

                                var breadEmbed = new Discord.MessageEmbed()
                                    .setColor(`#A3641A`)
                                    .setTimestamp()
                                    .setFooter(`BreadBot V${pjson.version}`, 'https://cdn.discordapp.com/app-icons/777884542924488715/7ab195239e08e913b4434905a19b94db.png?size=256');

                                switch (code) {
                                    case ("00"):
                                        bread = "Bagel";
                                        break;
                                    case ("01"):
                                        bread = "Baguette";
                                        break;
                                    case ("02"):
                                        bread = "Crossiant";
                                        break;
                                    case ("10"):
                                        bread = "Donut";
                                        break;
                                    case ("11"):
                                        bread = "Hot Dog Bun";
                                        break;
                                    case ("12"):
                                        bread = "Pita";
                                        break;
                                    case ("20"):
                                        bread = "Toast";
                                        break;
                                    case ("21"):
                                        bread = "Wheat Bread";
                                        break;
                                    case ("22"):
                                        bread = "White Bread";
                                        break;
                                }

                                const attachment = new Discord.MessageAttachment(`./bread/${bread}.PNG`, `${bread}.PNG`);
                                breadEmbed.setTitle(`Congratulation, you are ${bread}`)
                                breadEmbed.attachFiles(attachment)
                                breadEmbed.setImage(`attachment://${bread}.PNG`);

                                return message.channel.send(breadEmbed)
                            })
                    });
                })
        });
    }
};