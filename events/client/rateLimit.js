//here the event starts
const { events: { rateLimit } } = require("../../botconfig/settings.json");
module.exports = (client, rateLimitData) => {
    if(rateLimit) {
        console.log(JSON.stringify(rateLimitData).grey)
    }
}
/**
  * @INFO
  * Bot Coded by MESSI#2586 | https://discord.gg/tamilanmessi
  * @INFO
  * Work for tamilanmessi Development | https://tamilanmessi.tech
  * @INFO
  * Please mention him / tamilanmessi Development, when using this Code!
  * @INFO
*/
