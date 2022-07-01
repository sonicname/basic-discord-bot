import { IExecute } from '../interface/IExecute';
import { Bot } from './Bot';
import { Message } from 'discord.js';

export class Command implements IExecute {
  constructor(private _commandName: string, private _commandDescription: string) {}
  execute(bot: Bot, message: Message, args: string[]): Promise<any> {
    return Promise.reject(`Command ${this._commandName} doesn't implement execute method!`);
  }

  get commandName(): string {
    return this._commandName;
  }

  get commandDescription(): string {
    return this._commandDescription;
  }
}
