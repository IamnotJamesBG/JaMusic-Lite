

module.exports = {

  name: "queue",
  aliases: "q",
  code: `

   

   $author[1;Requested By $usertag;$authorAvatar]

   $description[
**Now Playing**
[$songInfo[title]]($songInfo[url]) - $songInfo[requester]

**Queue**
$queue[1;1;{position}.] $queue[1;1;{title} -] $humanizems[$queue[1;1;{duration}]] $queue[1;1;| {requester}]

$if[$queue[2;1;{position}]!=;2.] $queue[2;1;{title} -] $humanizems[$queue[2;1;{duration}]] $queue[2;1;| {requester}]

$if[$queue[3;1;{position}]!=;3.] $queue[3;1;{title} -] $humanizems[$queue[3;1;{duration}]] $queue[3;1;| {requester}]

$if[$queue[4;1;{position}]!=;4.] $queue[4;1;{title} -] $humanizems[$queue[4;1;{duration}]] $queue[4;1;| {requester}]

$if[$queue[5;1;{position}]!=;5.] $queue[5;1;{title} -] $humanizems[$queue[5;1;{duration}]] $queue[5;1;| {requester}]

$if[$queue[6;1;{position}]!=;6.] $queue[6;1;{title} -] $humanizems[$queue[6;1;{duration}]] $queue[6;1;| {requester}]

$if[$queue[7;1;{position}]!=;7.] $queue[7;1;{title} -] $humanizems[$queue[7;1;{duration}]] $queue[7;1;| {requester}]

$if[$queue[8;1;{position}]!=;8.] $queue[8;1;{title} -] $humanizems[$queue[8;1;{duration}]] $queue[8;1;| {requester}]

$if[$queue[9;1;{position}]!=;9.] $queue[9;1;{title} -] $humanizems[$queue[9;1;{duration}]] $queue[9;1;| {requester}]

$if[$queue[10;1;{position}]!=;10.] $queue[10;1;{title} -] $humanizems[$queue[10;1;{duration}]] $queue[10;1;| {requester}]]
   $footer[1;number of songs ->$queueLength]
$thumbnail[$songInfo[thumbnail]]

   $color[1;#00ffff]

   $addTimestamp[1]

   $onlyIf[$voiceId==$voiceId[$clientId];You're not in the same channel]

   $onlyIf[$voiceId!=;You need to be in a voice channel to check queue!]

   

   $onlyIf[$queueLength>0;Theres No Music Currently Playing!]

   $suppressErrors[⚠️ An Error Occurred]

    `,

};

