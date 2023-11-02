const { AoiClient, LoadCommands, Util }  = require("aoi.js");
const { setup } = require("aoi.parser");

setup(Util);


const allIntents = ["MessageContent", "Guilds","GuildMessages", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"]

const {

    AoiVoice,

    PluginName,

    

    PlayerEvents,

    Cacher,

    Filter,

} = require(`@akarui/aoi.music`);

const bot = new AoiClient({

    token: "MTExNTg2ODQ1MDkxMzUzODA4OQ.GnHmT6.-bz9UlzEbmnfqdRm57QEzltdrGVAZh-fC88h3c",

    prefix: "-",

    intents: allIntents,

    events: ["onMessage", "onInteractionCreate","onGuildJoin","onMessageUpdate","onFunctionError","onVoiceStateUpdate","onJoin","onLeave","onChannelDelete","onEmojiCreate","onBanAdd"],

suppressAllErrors: true,

  database: {

   type: "aoi.db",

   db: require("@akarui/aoi.db"),

   tables: ["main"],

   path: "./database/",

   extraOptions: {

   dbType: "KeyValue",

     mainFile: "index.js"

     }

 }

});



bot.status({
name: "Lite v8.9",
type: "PLAYING",
status: "idle",
time: 12
});






const loader = new LoadCommands(bot)
loader.load(bot.cmd, "./Src/")
require("./variables/variables")(bot);

bot.readyCommand({
code: `
$log[╔════════════════════════════════════════════╗
║ 
║                                            ║
║ Ready:$username[$clientId]                                    
║ Commands Loaded:$commandsCount         
║ Ping:$pingms                                           ║
║                                            ║
╚════════════════════════════════════════════╝]
$wait[1s]
$log[


██████╗░███████╗░█████╗░██████╗░██╗░░░██╗
██╔══██╗██╔════╝██╔══██╗██╔══██╗╚██╗░██╔╝
██████╔╝█████╗░░███████║██║░░██║░╚████╔╝░
██╔══██╗██╔══╝░░██╔══██║██║░░██║░░╚██╔╝░░
██║░░██║███████╗██║░░██║██████╔╝░░░██║░░░
╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░
]

$wait[2s]
$log[[API] 0 Shard Spawned]
$wait[2s]
$log[[API] Database Connected]
$wait[3s]
$log[[API] Connecting To The Database]
$wait[3s]
$log[[API] Token Detected]
$wait[2s]
$log[[API] Detecting Token]
$wait[0.75s]
`
});

bot.functionManager.createFunction({
  name: "$search",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [type = "youtube", query, format = "{title} by {artist} ({duration})", list = 5] = data.inside.splits;

    const searchType = type.toLowerCase() === "youtube" ? 3 : 0;

    let results;
    if (searchType === 3) {
      results = await bot.voiceManager.search(3, query, list);
    } else if (searchType === 0) {
      results = await bot.voiceManager.search(0, query, list);
    }

    if (results.length === 0) {
      data.result = "No songs found with the given query!";
      return {
        code: d.util.setCode(data)
      };
    };

    const formattedResults = results.map((result) => {
      let formattedResult = format;

      const placeholders = {
        "{title}": result.title,
        "{artist}": searchType === 3 ? result.author.name : result.publisher_metadata?.artist || "Unknown Artist",
        "{duration}": searchType === 3 ? result.duration.seconds * 1000: result.duration,
        "{formattedDuration}": searchType === 3 ? result.duration.text : new Date(result.duration).toISOString().substr(14, 5),
        "{id}": result.id,
        "{url}": searchType === 3 ? "https://www.youtube.com/watch?v=" + result.id : result.permalink_url
      };

      for (const placeholder in placeholders) {
        formattedResult = formattedResult.replace(new RegExp(placeholder, "g"), placeholders[placeholder]);
      }

      return formattedResult;
    });

    data.result = formattedResults.join("\n");

    return {
      code: d.util.setCode(data)
    };
  }
});

bot.functionManager.createFunction({

  name: "$commands",

  type: "djs",

  code: async (d) => {

const data = d.util.aoiFunc(d);

const [arg] = data.inside.splits;

const type = arg.split(':')[0]

const value = arg.split(':')[1]

const output = d.client.cmd.default

  .filter(x=> x[type] == value )

  .map(x => x.name)

  .filter(x => x !== '$alwaysExecute')

  .join(", ")

data.result = output

return { code: d.util.setCode(data) }

}

});

bot.functionManager.createFunction({
  name: "$search",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [query, type = "youtube", format = "{title} by {artist} ({duration})", list = 5, separator = "\n"] = data.inside.splits;

    const searchType = type.toLowerCase() === "youtube" ? 3 : 0;

    let results;
    if (searchType === 3) {
      results = await d.client.voiceManager.search(3, query, list);
    } else if (searchType === 0) {
      results = await d.client.voiceManager.search(0, query, list);
    }

    const formattedResults = results.map((result) => {
      let fr = format;

      const placeholders = {
        "{title}": result.title,
        "{artist}": searchType === 3 ? result.author.name : result.publisher_metadata?.artist || "Unknown Artist",
        "{duration}": searchType === 3 ? result.duration.seconds * 1000: result.duration,
        "{formattedDuration}": searchType === 3 ? result.duration.text : new Date(result.duration).toISOString().substr(14, 5),
        "{id}": result.id,
        "{url}": searchType === 3 ? "https://www.youtube.com/watch?v=" + result.id : result.permalink_url
      };

      for (const placeholder in placeholders) {
        fr= fr.replace(new RegExp(placeholder, "g"), placeholders[placeholder]);
      }

      return fr;
    });

    data.result = formattedResults.join(separator);

    return {
      code: d.util.setCode(data)
    };
  }
});


bot.functionManager.createFunction({
  name: "$or",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    let [...or] = data.inside.splits;

    const result = or.reduce((acc, arg) => acc || arg, false);

    data.result = result;
    return {
      code: d.util.setCode(data),
    };
  },
});



const voice = new AoiVoice(bot, {

    searchOptions: {

        // soundcloudClientId: "SoundCloud Client ID",

        youtubegl: "US",

        youtubeClient: "WEB",

        

    },

    requestOptions: {

        offsetTimeout: 0,

        soundcloudLikeTrackLimit: 200,

    },

});

// adds a cacher plugin

voice.addPlugin(PluginName.Cacher, new Cacher("disk" /* or "disk" */));

// adds a filter plugin

voice.addPlugin(

    PluginName.Filter,

    new Filter({

        filterFromStart: false,

    }),

);

voice.bindExecutor(bot.functionManager.interpreter);

voice.addEvent(PlayerEvents.QueueEnd);
voice.addEvent(PlayerEvents.TrackEnd);
voice.addEvent(PlayerEvents.TrackStart);
voice.addEvent(PlayerEvents.QueueStart);
loader.load(voice.cmds, "./Music Event/");


//DONT DELETE THIS

const keepalive = require("./server")

keepalive() //add on uptimerobot