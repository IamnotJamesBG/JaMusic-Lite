module.exports = {

name: "pause",

code: `

$pauseTrack

$title[Paused]

$description[Successfully paused [$songInfo[title]]($songInfo[url])!]



$addTimestamp

$color[Random]
$onlyIf[$voiceId!=;You need to be in a voice channel!]
$onlyIf[$voiceId[$authorId]==$voiceId[$clientId];You're not in the same voice channel!]
$onlyIf[$voiceId[$clientId]!=;I'm not in a voice channel!]
$onlyIf[$queueLength>0;There's no music currently playing!]

$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]

`

}