import { Intents } from 'discord.js';
import { config } from 'dotenv';
import { Bot } from '@structures/Bot';
import { Event } from '@structures/Event';
import { ReadyEvent } from '@events/ReadyEvent';
import { MessageCreateEvent } from '@events/MessageCreateEvent';
import { Command } from '@structures/Command';
import { HelloCommand } from '@commands/HelloCommand';
import { NSFWCommand } from '@commands/nsfw/NSFWCommand';

config();

(async () => {
  try {
    const bot = new Bot(new Intents(32767), process.env['PREFIX']);
    // Event register
    bot.handlerSystem.register<Event>(new ReadyEvent());
    bot.handlerSystem.register<Event>(new MessageCreateEvent());
    // Command Register
    bot.handlerSystem.register<Command>(new HelloCommand());
    bot.handlerSystem.register<Command>(new NSFWCommand());

    await bot.active(<string>process.env['TOKEN']);
  } catch (e) {
    console.log(e);
  }
})();
