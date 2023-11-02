module.exports = {
name: "requestchannel",
$if: "old",
code: `        
$loop[1;{"channel":"$get[channel]"};createNewMusicEmbed]
        $setGuildVar[MUSIC_channel;$get[channel]]
        $setGuildVar[MUSIC_embedMessage;]
        $let[channel;$createChannel[$guildID;$username[$clientID]-music;Text;true]]


        $onlyIf[$guildChannelExists[$guildID;$getGuildVar[MUSIC_channel]]==false;You already have a channel created! <#$getGuildVar[MUSIC_channel]>]
        $onlyPerms[managechannel;manageserver;You're missing one of these premissions: \`MANAGE_CHANNELS, MANAGE_SERVER\`{delete:5s}]
$onlyForGuilds[1091252826174394378;This command is currently in Beta and not yet released]
`
}