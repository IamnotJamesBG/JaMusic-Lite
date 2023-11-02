module.exports = {

name: "resume",
category: "Music",

code: `

$resumeTrack

$title[Resumed]

$description[Successfully resumed [$songInfo[title]]($songInfo[url])!]

$onlyIf[$voiceId!=;You need to be in a voice channel!]

$onlyIf[$voiceId[$clientId]!=;I'm not in a voice channel!]

$addTimestamp

$color[Random]

$onlyIf[$queueLength>0;There's no music currently playing!]

$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]

`

}