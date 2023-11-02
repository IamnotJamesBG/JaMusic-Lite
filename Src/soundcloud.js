module.exports = {

 name: "soundcloud",
 aliases: "sc",
 category: "Music",

 $if: "old",

 code: `

     

      $if[$hasPlayer!=true]

    $author[Now Playing;https://media.tenor.com/9xkXH3JNwxQAAAAM/digibyte-dgb.gif]

    $title[Added,Now Playing...]

  $thumbnail[$songInfo[thumbnail]]

  $description[Title:[$songInfo[title]]($songInfo[url])

  

Requester: $songInfo[requester]

$addField[Duration;$humanizeMS[$songInfo[duration]]]

  ]

  $color[00ffff]

  $footer[Requested by $username]

$addtimestamp

$playTrack[$nonEscape[$message];soundcloud]

$onlyIf[$voiceID!=;You must enter the voice channel.]

$joinVC

$endif

$if[$hasPlayer!=false]

$author[Added In The Queue;https://media.tenor.com/9xkXH3JNwxQAAAAM/digibyte-dgb.gif]

$title[Queued]

$description[Added **$message** In The Queue!]

$color[#00ffff]

$color[d8ffa1]

$playTrack[$nonEscape[$message];soundcloud]

$onlyIf[$voiceID!=;You must enter the voice channel.]



$endif

    $onlyIf[$message!=;Please provide a title or a SoundCloud link To Play A Song!]
$onlyIf[$getVar[maintenance]==true;This command is currently in maintenance]

`

}