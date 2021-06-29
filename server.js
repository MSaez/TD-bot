var moment = require('moment');
const Discord = require("discord.js");
const client = new Discord.Client();
client.login('token')
client.once("ready", () => {
    console.log(`Client ready ${client.user.tag}`)
    setInterval(() => {
        var hora = moment.utc().subtract(7, 'h').format("HH:mm:ss")
        var day = moment.utc().subtract(7, 'h').format("D")
        if(hora === parseInt(day) == 17){
            const channel = client.channels.cache.find(channel => channel.name === 'notificaciones-y-alertas')
            const embed = new Discord.MessageEmbed()
            .setTitle('Información')
            .setColor('RED')
            .setDescription('Operation Siren se ha reiniciado comandantes');            
            channel.send('@everyone',embed);
        }
        else{
            console.log("!!")
        }
    },1000)
})

