module.exports = {

name: "shuffle",
category: "Music",

code: `

$shuffleQueue

$title[Shuffled]

$description[Successfully shuffled the current queue!]

$onlyIf[$voiceId!=;You need to be in a voice channel!]

$onlyIf[$voiceId[$clientId]!=;I'm not in a voice channel!]

$addTimestamp

$color[Random]

$onlyIf[$queueLength>0;There's no music currently playing!]

$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]

`

}