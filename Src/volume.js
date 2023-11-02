module.exports = {

name: "volume",
category: "Music",

code: `

$volume[$message]

$title[Volume Changed]

$description[Successfully Changed the volume to **$message**%]

$footer[Changed by $username]

$addTimestamp

$color[Random]

$onlyIf[$voiceId==$voiceId[$clientId];You're not in the same voice channel]

$onlyIf[$voiceId!=;You must join a voice channel!]


$onlyIf[$message<=150;⚠️ Sorry You Exceeded The Maximum Limit 

Maximum Volume Is Only:**150**%]

$onlyIf[$message>=0;⚠️ Sorry You Exceeded The Minimum Limit 
$onlyIf[$queueLength>0;There's no music currently playing!]
Minimum Volume Is Only:**0**%]
$onlyIf[$voiceId[$clientId]!=; I'm not in any voice channel]

$onlyIf[$message!=;You must specify the number to change the volume!]

`

}