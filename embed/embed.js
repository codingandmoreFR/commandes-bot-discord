if(message.content.startsWith("embed") || message.content.startsWith(prefix + "embed")){
    let embed = new Discord.MessageEmbed()                   //création de l'emebd
        .setColor("#fff")                                    //code héxadécimal de la couleur
        .setTitle("Embed")                                   //titre de l'embed
        .setAuthor("Créateur : coding_andmore#4773")         //créateur du bot (vous pouvez mettre autre chose)
        .setDescription("Voici ma description")              //description de l'embed
        .addField("Titre champ 1", "Contenu champ 1")        //champ que l'on peux remplir. Vous pouvez en mettre autant que vous le souhaitez. J'en ai mis 3 pour l'exemple
        .addField("Titre champ 2 ", "Contenu champ 2")       //      ''
        .addField("Titre champ 3", "Contenu champ 3")        //      ''
    message.channel.send({embeds : [embed]})                 //envoi de l'embed
}
