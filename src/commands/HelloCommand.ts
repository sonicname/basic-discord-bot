import { Command } from '../structures/Command';
import { Bot } from '../structures/Bot';
import { Message } from 'discord.js';

export class HelloCommand extends Command {
  constructor() {
    super('hello', 'just hello command');
  }

  async execute(bot: Bot, message: Message, args: string[]): Promise<void> {
    await message.channel.send(message.content);
  }
}
