module.exports = {
name: "nowplaying",
aliases: "np",
code: `
$author[Now Playing]
$description[Title:[$songInfo[title]]($songInfo[url])
Duration:$replaceText[$digitalFormat[$getCurrentTrackDuration];00:0;;1]/$replaceText[$digitalFormat[$songInfo[duration]];00:0;;1]
Playing in:<#$voiceId>
Views:$numberSeparator[$songInfo[views];,]
Author:[$songInfo[artist]]($songInfo[artistURL])
]
$footer[Requested by $username | © Copyright @ 2023 JM Lite Entertainment]
$addTimestamp
$image[$songInfo[thumbnail]
$color[Random]

$onlyIf[$queueLength>0;There's no music currently playing]
$onlyIf[$voiceId!=; You're not in a voice channel!]
$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]
`
}