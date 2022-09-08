import { Bot } from '@structures/Bot';

export interface IExecute {
  execute(bot: Bot, ...args: any[]): Promise<any>;
}
