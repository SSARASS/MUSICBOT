const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'lyrics',
    description: 'get lyrics for the current track',
    voiceChannel: true,

    async execute({ inter }) {

        const queue = player.nodes.get(inter.guildId);

        if (!queue || !queue.isPlaying()) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        const search = await genius.songs.search(queue.currentTrack.title); 

        // now match the artist name to the current track
        const song = search.find(song => song.artist.name.toLowerCase() === queue.currentTrack.author.toLowerCase());
        if (!song) return inter.reply({ content: `No lyrics found for ${queue.currentTrack.title}... try again ? ❌`, ephemeral: true });
        const lyrics = await song.lyrics();
        // if the lyrics are too long, split them into multiple messages
        const embeds = [];
        for (let i = 0; i < lyrics.length; i += 4096) {
            const toSend = lyrics.substring(i, Math.min(lyrics.length, i + 4096));
            embeds.push(new EmbedBuilder()
                .setTitle(`Lyrics for ${queue.currentTrack.title}`)
                .setDescription(toSend)
                .setColor('#2f3136')
                .setTimestamp()
                .setFooter({ text: 'Music comes first - Made with heart by Zerio ❤️', iconURL: inter.member.avatarURL({ dynamic: true })})
                );
        }
        return inter.reply({ embeds: embeds });
    },
};
