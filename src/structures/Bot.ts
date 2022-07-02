import { Client, Collection, Intents } from 'discord.js';
import { Event } from './Event';
import { Command } from './Command';
import { IExecute } from '@interface/IExecute';

export class Bot extends Client {
  private _commands: Collection<string, Command> = new Collection();

  constructor(intents: Intents, private _prefix: string | undefined) {
    super({
      intents: intents
    });
  }

  private validate(token: string): void {
    if (token === undefined || token === '') {
      throw new Error('Token is empty!');
    }

    if (this._prefix === undefined || this._prefix === '') {
      throw new Error('Prefix is empty!');
    }
  }

  public register<T extends IExecute>(item: T): void {
    if (item instanceof Event) this.on(item.eventName, (...args) => item.execute(this, ...args));
    if (item instanceof Command) this._commands.set(item.commandName, item);
  }

  public async active(token: string): Promise<void> {
    this.validate(token);
    await this.login(token);
  }

  get prefix(): string | undefined {
    return this._prefix;
  }

  get commands(): Collection<string, IExecute> {
    return this._commands;
  }
}
