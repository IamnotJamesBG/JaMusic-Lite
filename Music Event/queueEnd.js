module.exports = {
name: "Song End",
channel: "$channelID",
type: "queueEnd",
code: `

$leaveVC[$guildID]

$wait[2s]

$sendMessage[{newEmbed: {author:| Queue Finished:$userAvatar[$clientId]}{description:Current queue has ended,I have left <#$voiceId[$clientId]> to continue listening add some songs!}
{footer:Music Powered by JaMusic Lite | © Copyright @ 2023 JM Lite Entertainment}{color:Random}
{timestamp}}{actionRow:
{button:Donate:link:https\\://www.paypal.me/JaMusicLite:false}}]


`
}