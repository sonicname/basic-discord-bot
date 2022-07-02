import { IExecute } from '@interface/IExecute';
import { ClientEvents } from 'discord.js';
import { Bot } from './Bot';

export class Event implements IExecute {
  constructor(private _eventName: keyof ClientEvents, private _eventType: 'on' | 'once') {}

  execute(bot: Bot, ...args: any[]): Promise<void> {
    return Promise.reject(new Error(`${this._eventName} doesn't implement execute method!`));
  }

  get eventName(): keyof ClientEvents {
    return this._eventName;
  }

  get eventType(): 'on' | 'once' {
    return this._eventType;
  }
}
