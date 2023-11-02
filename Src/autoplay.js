module.exports = {
name: "autoplay",

category: "Music",
code: `
$autoPlay[youtube]

$title[Autoplay Successful]
$description[Now Autoplaying **YouTube Video**!]
$color[Random]
$addTimestamp


$onlyIf[$voiceId!=;You're not in a voice channel!]
$onlyIf[$voiceId[$authorId]==$voiceId[$clientId];You're not in the same voice channel!]


$onlyIf[$queueLength>0; There's no music currently playing]

$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]

`
}
