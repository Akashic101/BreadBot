/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const {
    RedditSimple
} = require('reddit-simple');
const Discord = require('discord.js');
const pjson = require(`../package.json`);

module.exports = {
    name: `meme`,
    modOnly: false,
    color: `#2153f5`,
    description: `Sends a random meme from reddit`,
    async execute(client, message, args) {

        var subredditList = [
            "BoneHurtingJuice",
            "xkcd",
            "me_irl",
            "wholesomememes"
        ]

        var subreddit = subredditList[Math.floor(Math.random() * subredditList.length)];

        RedditSimple.RandomPost(subreddit).then(res => {

            var embed = new Discord.MessageEmbed()
                .setColor('#FF4500')
                .setTitle(res[0].data.title)
                .setURL(`https://www.Reddit.com${res[0].data.permalink}`)
                .setImage(res[0].data.url)
                .setTimestamp()
                .setFooter(`BreadBot V${pjson.version}`, 'https://cdn.discordapp.com/app-icons/777884542924488715/7ab195239e08e913b4434905a19b94db.png?size=256');

            message.channel.send(embed);
        }).catch(e => {
            console.log(e);
        });
    }
};