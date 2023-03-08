# ProgBlackBot
This is the area in which I'll be writing my development log for the 2nd term Programming Black project.
<h3>2023/03/01</h3>
<p>After hearing about this coursework piece and the fact that we could do anything for it I started thinking about the various projects that I've wanted to learn, I initially wanted to get into a web development area like Vue or React, then after hearing about openprocessing I thought about how I've always wanted to do more visual stuff with my programming, but after a brief search I wasn't able to find anything that I would want to contribute to.<br>
I felt a bit stuck at that point, unsure what to work on, before looking at my smart watch and thinking "wow, I'd really like to get some custom stuff on here", and luckily for me it did look like WearOS has a fair few open projects on github that I could contribute to.<br>
However, one of my good friends started working on a bot for our Discord Server, and I figure what would be a better way to collaborate than to activly talk to somebody and work on something together, rather than contributing to someone else's work.<br>
So I decided I would learn more about APIs and help work on my friend's discord bot (looks like I'll have to get back to those other projects a different time).<p>

First port of call:
<h4>Figuring out how discord bots work</h4>
<p>Like anybody learning to do something new, I typed into google "how to make a discord bot", and the <a href="https://www.ionos.co.uk/digitalguide/server/know-how/creating-discord-bot/">first link I found</a> looked like it would help.<br>
And so I started to follow the steps, I enabled developer mode on my account, and followed the link through to <a href="https://discord.com/developers/docs/intro">Discord's developer portal<a> logged into the applications page, and created an application, calling it simply "JamesBot", threw in a profile picture and my ~~child~~ bot was created.<br>
<img src="https://cdn.discordapp.com/attachments/1080452239300235314/1080452324536889384/Bot_Creation.png" alt="Bot Customization">
Or so I thought... apparently I needed to navigate to the bots page to make it into an actual bot, maybe I'll understand the purpose of this later? Anywho, I changed my bot to private, so random people won't be adding this incomplete bot to my server, and though I don't know what I'm properly doing yet, I thrw in some permissions I think the bot will need, like sending messages, embeding links, read messages, add reactions and use commands. but if I need to update this later it looks<br>
It seems like the guide is starting to get outdated at this point as the newest version of the discord developer portal looks different now, sayonara ionos.co.uk<br>
As is tradition, if text tutorials don't work, then its time to go to youtube tutorials to see things in action, I immediatly found <a href="https://www.youtube.com/watch?v=qRMVNtIF73c">this video<a> where already it looks more like a propper programming. Thankfully I already have npm, javascript and python installed, so I can get going immediatly. I follow the basic steps, npm init, create the files (index.js and .env), and copy in my bot's token into the .env file. This video has a better way of explaining how to invite a bot to your server, so now JamesBot is right at home<br>
<img src="https://cdn.discordapp.com/attachments/1080452239300235314/1080452324759179314/Bot_in_Server.png" alt="bot in server">
From there I followed the video pretty, with my javascript codes identical to what he wrote, which I understand most of after our first programming black coursework. The program in this video is a simple program in which if a user types "ping", the bot replies with "pong".<br>
After writing this code, I started the bot, and saw it move from offline to online in discord, and when I typed ping into chat, the bot replied.<br>
<img src="https://cdn.discordapp.com/attachments/1080452239300235314/1080457668688351322/bot_ping_pong.png" alt="bot is online, I type in 'ping' bot replies with 'pong'"></p>
<h4>Week 1 Conclusion</h4>
<p>I am very happy with my progress so far, having went from no bot at all, to a bot that can reply to messages is good progress. Next week I'd like to have the bot perform something a little more impressive, and potentially start looking at how the bot programming differs in python, as that is the language I'll be using for my collaborative bot.</p>


<h3>2023/03/08</h3>
<p>Looks like I made a little mistake after last week, as I uploaded my bot to github with the token still in the field, and recieved an email warning me about it. Oops</p>
<img src="https://cdn.discordapp.com/attachments/1080452239300235314/1082979580912082974/image.png">
<p>Regardless, it is a new week, and this more work to be done, but where to start this time? I looked at the youtube guide I was following last week, however despite it being titles Episode 1, there was no subsequent episodes to follow, but I did get a link to a <a href="https://discordjs.guide/#before-you-begin">DiscordJS Guide</a><br>
I scanned through the content that I had already completed, already proving useful by showing how I can use a .gitignore to ignore the .env file where I store my token.<br>
Continuing down the list, I've already created my main file, so onto slash commands, which from knowledge of having used discord bots, means instead of bots reading your every message, you can call upon them like a function using Discord's built in slash command feature. These work by when you type in a "/" into chat, you can follow it up with a command and any parameters you want. For example, my friend's Discord bot (who I will be helping work on it soon) has a slash command "/catpls" where you can input a keywork and it will return a cat with that keywork!</p>
<img src = "https://cdn.discordapp.com/attachments/1080452239300235314/1082983402828988416/image.png">
<img src = "https://cdn.discordapp.com/attachments/1080452239300235314/1082983524488986644/image.png">
<img src = "https://cdn.discordapp.com/attachments/1080452239300235314/1082983688171700344/image.png">
<p>Which means its time to update my ping pong function!<br>
following the guide, I make a folder called commands, I make pingpong.js, and throw in the code I need, except with a twist, instead of doing ping and pong, I replace it with "crossaint" and "quaso", in reference to a <a href="https://knowyourmeme.com/memes/quaso">meme<a> of dubious quality that was circulating late last year. I boot up my bot, expecting to revieve the glorious slash commands, before seeing nothing and reading on to find its not just as simple as adding in a require...<br>
Continuing on, it looks like it would be a great idea to have a "command manager" which I think makes it easier to implement multiple slash commands.<br>
So I go away and implement the command manager, but it still won't work! As it turns out, all I've actually done is load the commands and prepared the event listener to respond, now I need to register them to properly use them<br>
In order to publish the commands, I needed to write a deployment script, which performs a similar operation to index.js, where it reads in the commands, but instead of preparing a place to run the commands, it pushes the commands to the application through REST API, you can specify this to just work for a single server, but I'd rather them be general so I didn't include the guildId<br>
And finally it works: </p>
<img src="https://cdn.discordapp.com/attachments/1080452239300235314/1083014830107144252/image.png">
<p>In the end, implementing slash commands took alot more to do than I expected, with seperating the commands into files, creating a place for them to be run, and creating a script to update the bot on the server side. I was hoping to get more done this week, but them's the breaks...<br>
Either later this week or next week, I'd like to look at implementing more features before I go on to learn how to make bots in python too, since that's what my final project will be in</p>