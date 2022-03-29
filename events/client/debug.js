//here the event starts
const { events: { debug } } = require("../../botconfig/settings.json");
module.exports = (client, info) => {
  if(debug) {
    console.log(String(info).grey);
  }
}
/**
  * @INFO
  * Bot Coded by MESSI#2586 | https://discord.gg/tamilanmessi
  * @INFO
  * Work for tamilanmessi Development | https://tamilanmessi.eu
  * @INFO
  * Please mention him / tamilanmessi Development, when using this Code!
  * @INFO
*/
