module.exports = {

 name: "loop",

 

 code: `
$loopMode[$message]
$title[Loop Mode]
$description[Looped Mode Is Set To **$message**]

$addTimestamp

$color[Random]
     

      




$onlyIf[$voiceID!=;You must enter the voice channel.]




$onlyIf[$voiceId[$authorId]==$voiceId[$clientId];You're not in the same voice channel!]
    $onlyIf[$message!=;Please provide a loop state
Available State:song,queue or none]
$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]

`

}