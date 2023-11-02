module.exports = {

name: "leave",

code: `

$leaveVC

$title[Left]

$description[Successfully left <#$voiceId>!]

$addTimestamp

$color[Random]

$onlyIf[$voiceId!=;You need to be in a voice channel!]
$onlyIf[$voiceId[$authorId]==$voiceId[$clientId];You're not in the same voice channel!]
$onlyIf[$voiceId[$clientId]!=;I'm not in a voice channel!]
$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]

`

  

}