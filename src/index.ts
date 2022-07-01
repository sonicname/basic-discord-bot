import { Intents } from 'discord.js';
import { config } from 'dotenv';
import { Bot } from './structures/Bot';
import { Event } from './structures/Event';
import { ReadyEvent } from './events/ReadyEvent';
import { MessageCreateEvent } from './events/MessageCreateEvent';
import { Command } from './structures/Command';
import { HelloCommand } from './commands/HelloCommand';

config();

(async () => {
  try {
    const bot = new Bot(new Intents(32767), process.env['PREFIX']);
    // Event register
    bot.register<Event>(new ReadyEvent());
    bot.register<Event>(new MessageCreateEvent());
    // Command Register
    bot.register<Command>(new HelloCommand());

    await bot.active(<string>process.env['TOKEN']);
  } catch (e) {
    console.log(e);
  }
})();
