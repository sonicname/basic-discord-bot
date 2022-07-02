import { Command } from '@structures/Command';
import { Bot } from '@structures/Bot';
import { Message } from 'discord.js';
import NetworkModule from '@utils/NetworkModule';

export class NSFWCommand extends Command {
  constructor() {
    super('nsfw', 'just things');
  }

  async execute(bot: Bot, message: Message, args: string[]): Promise<void> {
    try {
      const image = await NetworkModule.getNekoImage(args[0]);
      await message.channel.send(image.message);
    } catch (e) {
      message.channel.send('Error when get image from API!');
    }
  }
}
