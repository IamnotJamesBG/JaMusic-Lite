module.exports = {

 name: "play",
 $if: "old",
 code: `

     

      $if[$hasPlayer!=true]
    $author[Added in the queue #$queueLength;https://cdn.discordapp.com/emojis/1168821722380783657.gif]

  $description[Added [$songInfo[title]]($songInfo[url]) ]

  $color[Random]

  $footer[Requested by $username | © Copyright @ 2023 JM Lite Entertainment]

$addtimestamp
$if[$advancedTextSplit[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;https://;true-];www.;];?v=;];youtube.com/watch?v=;];youtube.com/shorts/;];youtu.be/;];-;1]==true]
$playTrack[$nonEscape[https://youtube.com/watch?v=$get[stuff]];youtube]
$let[stuff;$advancedTextSplit[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;https://;];www.;];?v=;];youtube.com/watch;];youtube.com/shorts/;];youtu.be/;];?si=;1]]
$else
$playTrack[$nonescape[$message];youtube]
$endif

$joinVC

$endif

$if[$hasPlayer!=false]

$author[Added In The Queue #$queueLength;https://cdn.discordapp.com/emojis/1168821722380783657.gif]

$title[Queued]


$description[Added **[$songInfo[title;$sub[$queueLength;1]]]($songInfo[url;$sub[$queueLength;1]])** In The Queue!]

$thumbnail[$songInfo[thumbnail;$sub[$queueLength;1]]]
$color[Random]
$footer[Requested by $username | © Copyright @ 2023 JM Lite Entertainment]
$addtimestamp
$if[$advancedTextSplit[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;https://;true-];www.;];?v=;];youtube.com/watch?v=;];youtube.com/shorts/;];youtu.be/;];-;1]==true]
$playTrack[$nonEscape[https://youtube.com/watch?v=$get[stuff]];youtube]
$let[stuff;$advancedTextSplit[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;https://;];www.;];?v=;];youtube.com/watch;];youtube.com/shorts/;];youtu.be/;];?si=;1]]
$else
$playTrack[$nonescape[$message];youtube]
$endif

$onlyIf[$voiceID!=;You must enter the voice channel.]
$endif
$clientTyping


    $onlyIf[$message!=;Please provide a title or a YouTube link To Play A Song!]
$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]

`

}