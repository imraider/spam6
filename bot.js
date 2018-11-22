const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "513291439095152643"; // ايدي السررفر
var channel = "513291621018632192";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**%random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , %random% , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(NTE1MTcwNDk4NjMyNDgyODQ2.DthNyQ.2pHyQrIKbkxZykGQWaRG8AbnNV8);
