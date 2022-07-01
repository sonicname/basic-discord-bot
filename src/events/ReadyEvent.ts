import { Event } from '../structures/Event';
import { Bot } from '../structures/Bot';

export class ReadyEvent extends Event {
  constructor() {
    super('ready', 'once');
  }

  async execute(bot: Bot): Promise<void> {
    await bot.user?.setActivity({
      name: process.env['ACTIVITY'] || 'Hello world',
      type: 'PLAYING'
    });
    return console.log(`${bot.user?.tag} is active!`);
  }
}
