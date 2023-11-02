const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./index.js", {
    token: "MTExNTg2ODQ1MDkxMzUzODA4OQ.GnHmT6.-bz9UlzEbmnfqdRm57QEzltdrGVAZh-fC88h3c"
});

sharder.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
sharder.startProcess();