var moment = require('moment');
const Discord = require("discord.js");
const client = new Discord.Client();
client.login('token')
client.once("ready", () => {
    console.log(`Client ready ${client.user.tag}`)
    setInterval(() => {
        var hora = moment.utc().subtract(7, 'h').format("HH:mm:ss")
        var day = moment.utc().subtract(7, 'h').format("D")
        var date = moment.utc().subtract(7, 'h')
        if(hora === '00:00:00' && parseInt(day) == 1){
            const channel = client.channels.cache.find(channel => channel.name === 'notificaciones-y-alertas')
            const embed = new Discord.MessageEmbed()
            .setTitle('Información')
            .setColor('RED')
            .setDescription('Operation Siren se ha reiniciado comandantes');            
            channel.send('@everyone',embed);
        }
        
        if(hora === '00:00:00' && date.day() === 1){
            const channel = client.channels.cache.find(channel => channel.name === 'notificaciones-y-alertas')
            const embed = new Discord.MessageEmbed()
            .setTitle('Información')
            .setColor('RED')
            .setDescription('Reset del supply pack semanal gratuito');            
            channel.send('@everyone',embed);
        }
        else{
            console.log(date.format("DD MM yyyy HH:mm:ss"))
            console.log(date.day())
        }

    },1000)
})