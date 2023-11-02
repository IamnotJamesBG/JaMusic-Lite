module.exports = {
    name: "Track Ended",
    type: "trackEnd",
    channel: "$channelID",
    code: ` $deleteMessage[$getGuildVar[music_player];$getGuildVar[music_ID]]
  $onlyIf[$channelExists[$getGuildVar[music_ID]]==true;]
  $onlyIf[$messageExists[$getGuildVar[music_player]]==true;]`
}