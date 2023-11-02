module.exports = {

name: "join",

code: `

$joinVC

$title[Joined]

$description[Successfully Joined <#$voiceId>!]

$addTimestamp

$color[Random]
$onlyIf[$voiceId!=;You're not in a voice channel!]

$onlyIf[$getVar[maintenance]==true;This Command is currently in maintenance]

`

}