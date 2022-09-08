import { Client, Intents } from 'discord.js';
import { HandlerSystem } from '@structures/HandlerSystem';

export class Bot extends Client {
  public handlerSystem: HandlerSystem = new HandlerSystem();

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

  public async active(token: string): Promise<void> {
    this.validate(token);
    this.handlerSystem.initEvent(this);
    await this.login(token);
  }

  get prefix(): string | undefined {
    return this._prefix;
  }
}
