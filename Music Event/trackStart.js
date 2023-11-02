module.exports = [{
    type: "trackStart",
    channel: "$channelID",
    code: `
$loop[$math[$songInfo[duration]/1000];{"msgID": "$get[id]", "channelID": "$channelID"};updatesonginfo]
$setGuildVar[music_player;$get[id];$guildID;main]
$setGuildVar[music_ID;$channelID;$guildID;main]
$let[id;$sendMessage[{newEmbed:{author:| Now Playing:$userAvatar[$clientId]}{description:Title:[$songInfo[title]]($songInfo[url])
Duration:$replaceText[$digitalFormat[$songInfo[duration]];00:0;;1]
Artist:[$songInfo[artist]]($songInfo[artistURL])
Platform:$songInfo[formatedPlatforms]
Playing in:<#$voiceId[$clientId]>
Requester:$songInfo[requester]
Volume:$volume%}{image:$songInfo[thumbnail]}{color:$replaceText[$replaceText[$replaceText[$songInfo[formatedPlatforms];SoundCloud;FE6D35];Youtube;ff0000];Spotify;1ed760]}}{actionRow:{button: $digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]] :secondary:bye:yes}{button:$replaceText[$songInfo[formatedPlatforms];Youtube;YouTube]:secondary:bye2:yes}};true]]
$suppressErrors

`
}]