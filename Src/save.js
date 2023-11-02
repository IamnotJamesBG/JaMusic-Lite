module.exports = {
name: "save",
aliases: "grab",
category: "Music",
code: `
$dm[$authorID]
$channelSendMessage[$channelID;Saved! Please Check You're Dm!]





$author[Saved Song!]
$title[$songInfo[title];$songInfo[url]]
$description[Author:[$songInfo[artist]]($songInfo[artistURL])
Duration:$replaceText[$digitalFormat[$songInfo[duration]];00:0;;1]
Requested:$songInfo[requester]]
$image[$songInfo[thumbnail]]
$color[Random]
$addTimestamp
$cooldown[5s;Please wait **%time%** to save the song again.]

$onlyIf[$voiceId!=;You're not in a voice channel!]


$onlyIf[$queueLength>0; There's no music currently playing]

$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]

`
}
