//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
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
