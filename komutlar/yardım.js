const disbut = require("discord-buttons")
const Discord = require("discord.js")
module.exports = {
  name: "r",
  run: async (client, message, args) => {

        const select1 = new disbut.MessageMenuOption()
            .setLabel('Genel')
            .setDescription("Genel Komutlar覺 G繹sterir.")
            .setValue('1')
            .setEmoji("????")
            // select 1
        const select2 = new disbut.MessageMenuOption()
            .setLabel('Owner')
            .setDescription(`Owner ??zel Komutlar覺 G繹sterir.`)
            .setValue('2')
            .setEmoji("????")
 // select 2
          const select3 = new disbut.MessageMenuOption()
            .setLabel('Ek')
            .setDescription(`Botun Ek ??zelliklerini G繹sterir.`)
            .setValue('3')
            .setEmoji("????")

            // dokunma
        const menu = new disbut.MessageMenu()
        .addOptions(select1, select2, select3)
        .setMaxValues(1)
        .setMinValues(1)
        .setID("menu")
// buraya dokunma
        const ana = new Discord.MessageEmbed()
            .setTitle('GHOST EKONOM襤 BOTU')
            .setDescription(`> :busts_in_silhouette: Destek Sunucusu:[T覺kla!](https://discord.gg/delimine) \n\n > :yum: TOP.GG: [T覺kla!](https://top.gg/bots/${client.user.id}) \n\n > :moneybag: Ba??覺?? No'lar覺 \n  > Papara: 0000000000 \n > 襤ninal: 0000000000 \n\n T羹m Haklar覺 Sakl覺d覺r,??al覺nmas覺 Yasakt覺r. `)
             .setFooter(`${client.user.username}`)
  .setColor("#5555dd")
  .setTimestamp()
  .setThumbnail('https://cdn.discordapp.com/emojis/817847900880896001.png?v=1')

// embedler kendinize g繹re editleyin 
      let embed1 = new Discord.MessageEmbed()
          .setTitle("Ekonomi Komutlar覺")
            .setDescription(`> **!param**: Ne Kadar Paran Oldu??unu G繹r羹rs羹n. \n\n > **!ara**: Aray覺p kazan覺rs覺n! \n\n > **!g羹nl羹k**: G羹nl羹k 繹d羹l羹n羹 al覺rs覺n. \n\n > **!dilen**: Dilenirsin. \n\n > **!癟al覺??**: ??al覺??覺p para kazan覺rs覺n. \n\n > **!ara**: Aray覺p kazan覺rs覺n. \n\n >  **!davet**: Botun davet linkini g繹r羹rs羹n. \n\n > **!stats**: Botun istatisti??ini g繹r羹rs羹n.`)
            .setColor("#5555dd")
           .setTimestamp()
          .setFooter(`${client.user.username}`)
            .setTimestamp()
              .setThumbnail('https://cdn.discordapp.com/emojis/817847900880896001.png?v=1')
// embed 2
            let embed2 = new Discord.MessageEmbed()
           .setTitle("Owner Komutlar覺")
            .setDescription(`> **!coin-ekle**: Belirtti??in 羹yeye coin eklersin.\n\n > **!coin-sil**: Belirtti??in 羹yeden coin silersin.`)
            .setColor("#5555dd")
            .setTimestamp()
             .setFooter(`${client.user.username}`)
             .setTimestamp()
            .setThumbnail('https://cdn.discordapp.com/emojis/817847900880896001.png?v=1')
         // embed 3
          let embed3 = new Discord.MessageEmbed()
         .setTitle("Ek ??zellikler")
            .setDescription(`> Sunucu i癟erisinde belirli mesaj say覺s覺na ula??t覺??覺nda hediye olarak coin verir. **(500,1000,2000,4000)**`)
            .setColor("#5555dd")
            .setTimestamp()
          .setTimestamp()
             .setFooter(`${client.user.username}`)
            .setThumbnail('https://cdn.discordapp.com/emojis/817847900880896001.png?v=1')
         
        let msg = await message.channel.send({ embed: ana, component: menu })


        const filter = (menu) => menu.clicker.user.id === message.author.id;
        const collector = message.createMenuCollector(filter, { time: 120000 });
        client.on("clickMenu", menu => {
            if(menu.clicker.id !== message.author.id) return;
            menu.reply.defer();
         
            if (menu.values[0] === '1') {
                msg.edit({
                    embed: embed1,
                })
            }
            if (menu.values[0] === '2') {
                msg.edit({
                    embed: embed2,
                })
            }
              if (menu.values[0] === '3') {
                msg.edit({
                    embed: embed3,
                })
            }
      
        })
}
}