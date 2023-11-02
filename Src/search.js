
module.exports = [{
    name: "search",
    aliases: "p",
    info: {
        usage: "play <song>",
        description: "Plays a given song.",
        aliases: ["p"],
        type: "text",
        permissions: ["sendmessages", "viewchannel", "embedlinks", "connect", "speak"]
    },
    $if: "old",
    code: `
    $awaitMessages[$channelID;$authorID;25s;everything;selecttrack;Cancelled current selection.;{"messageID": "$get[id]", "songs": "$uri[$get[songs];decode]", "channelID": "$channelID"}]
    
    $let[messageID;$sendMessage[{newEmbed:{title:Pick one of the following songs#COLON#}{description:
- 1. **$advancedTextSplit[$get[songlist];$authorID;1]** 
- 2. **$advancedTextSplit[$get[songlist];$authorID;2]**
- 3. **$advancedTextSplit[$get[songlist];$authorID;3]**
- 4. **$advancedTextSplit[$get[songlist];$authorID;1]**
- 5. **$advancedTextSplit[$get[songlist];$authorID;1]**
    }{color:Random}};true]]
    $let[songs;$search[$message;youtube;[{title}]({url});5;$authorID]]
$let[songlist;$search[$message;youtube;[{title}]({url});5;$authorID]]

    $if[$checkCondition[$voiceID[$clientID]==&&$hasPlayer==false]==true]
    $joinVC[$voiceID]
    $endif

    $onlyIf[$voiceID[$authorID]!=;You need to join a Voice Channel before trying to play something!]
   
 `
}, {
    name: "selecttrack",
    type: "awaited",
    $if: "old",
    code: `

$playTrack[$nonEscape[https://youtu.be/$replaceText[$splitText[2];);]];youtube]
$textSplit[$advancedTextSplit[$uri[$advancedTextSplit[$awaitData[songs];$authorID;$message];decode;&&;3]];?v=]

    $sendMessage[{newEmbed:{title:Added $advancedTextSplit[$uri[$advancedTextSplit[$awaitData[songs];$authorID;$message];decode];||;1] to the queue.}{color:Random}}]
    $if[$checkCondition[$voiceID[$clientID]==&&$hasPlayer==false]==true]
$joinVC
    $endif
    $onlyIf[$isNumber[$message]==true&&$message<=5;That isn't a valid input.]

`
}]