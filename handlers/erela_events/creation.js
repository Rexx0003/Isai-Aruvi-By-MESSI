var {
    Manager
  } = require("erela.js"),
  
    Spotify = require("erela.js-spotify"),
    Deezer = require("erela.js-deezer"),
    Facebook = require("erela.js-facebook"),
    config = require(`${process.cwd()}/botconfig/config.json`),
  
    clientID = process.env.clientID || config.spotify.clientID,
    clientSecret = process.env.clientSecret || config.spotify.clientSecret;
  module.exports = (client) => {
      if (!clientID || !clientSecret) {
        client.manager = new Manager({
          nodes: config.clientsettings.nodes,
          plugins: [
            new Deezer(),
            new Facebook(),
          ],
          send(id, payload) {
            var guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
          },
        });
      } else {
        client.manager = new Manager({
          nodes: config.clientsettings.nodes,
          plugins: [
            new Spotify({
              clientID, //get a clientid from there: https://developer.spotify.com/dashboard
              clientSecret
            }),
            new Deezer(),
            new Facebook(),
          ],
          send(id, payload) {
            var guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
          },
        });
      }
      //require the other events
      require("./node_events")(client)
      require("./client_events")(client)
      require("./events")(client)
      require("./musicsystem")(client)
      
  };
  /**
   * @INFO
   * Bot Coded by MESSI#2586 | https://github?.com/MESSI2586/discord-js-lavalink-Music-Bot-erela-js
   * @INFO
   * Work for tamilanmessi Development | https://tamilanmessi.tech
   * @INFO
   * Please mention Him / tamilanmessi Development, when using this Code!
   * @INFO
   */
  
