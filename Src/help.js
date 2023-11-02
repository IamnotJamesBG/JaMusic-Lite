module.exports = {
name: "helpcmd",
aliases: "help",
code: `

$author[Help Lite Commands List]

$description[**Global Prefix**
Prefix:**-**



**Music Lite Commands**
-play
-leave
-join
-skip
-stop
-volume
-nowplaying (aliases:np)
-save (aliases:grab)
-pause
-resume
-soundcloud (aliases:sc)
-queue (aliases:q)
-loop
-autoplay
-shuffle
-unshuffle
-search
-requestchannel

**Filter Lite Commands**
-nightcore
-bassboost
-earrape
-resetfilter (aliases:reset)

**Bot Lite Command**
-status
-vote
-news

**Game Lite Commands**
-rps
-guess
-ttt

**Mod Lite Commands**
-delchan
-steal
-ccount
-slowmode
-deafen (aliases:deaf)
-undeafen (aliases:undeaf)
</purge:0>
-ban
-purge
-kick
-enable-antiswear
-disable-antiswear
-createticket

**Economy Lite Commands**
-balance (aliases:bal)
-work
-crime
-deposit (aliases:dep)
-withdraw (aliases:with)
-coinflip (aliases:cf)
-rob

**Other Lite Commands**
-avatar
-calculator (aliases:calc)
-weather
-time
-say

**Slash Music Lite Commands**
</play:0>
</join:0>
</leave:0>
</stop:0>
</loop:0>
</pause:0>
</resume:0>
</nowplaying:0>
</save:0>
]
$footer[Lite Version:v8.9]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]
$color[Random]

`
}