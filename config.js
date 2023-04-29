module.exports = {
    app: {
        token: 'MTEwMTg0MzkzNTIxNjc5NTcyOA.GXqf31.6ev29pzTMbp8087v0mRsjcC3EYvpZyQ1UGWETI',
        playing: 'Pa las reguetonas',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
