import { Event } from '../structures/Event';
import { Bot } from '../structures/Bot';
import { Message } from 'discord.js';

export class MessageCreateEvent extends Event {
  constructor() {
    super('messageCreate', 'on');
  }

  async execute(bot: Bot, message: Message): Promise<void> {
    if (message.author.bot || !message.content.startsWith(<string>bot.prefix)) return;
    const trimText = message.content.trim();
    const args = trimText.slice(bot.prefix?.length).split(' ');
    const commandName = args.shift();

    if (commandName) {
      const command = bot.commands.get(commandName);

      await command?.execute(bot, message, args);
    }
  }
}
