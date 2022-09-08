import { Command } from '@structures/Command';
import { Event } from '@structures/Event';
import { Bot } from '@structures/Bot';
import { ClientEvents } from 'discord.js';

export class HandlerSystem {
  private _commandsCollection: Map<string, Command>;
  private _eventsCollection: Map<keyof ClientEvents, Event>;

  constructor() {
    this._commandsCollection = new Map();
    this._eventsCollection = new Map();
  }

  register<T>(item: T): void {
    if (item instanceof Command) {
      const command = this._commandsCollection.get(item.commandName);
      if (!command) {
        this._commandsCollection.set(item.commandName, item);
      } else {
        throw new Error(`Command ${item.commandName} is already exists!`);
      }
    } else if (item instanceof Event) {
      const event = this._eventsCollection.get(item.eventName);
      if (!event) {
        this._eventsCollection.set(item.eventName, item);
      } else {
        throw new Error(`Event ${item.eventName} is already exists!`);
      }
    }
  }

  initEvent(bot: Bot): void {
    this._eventsCollection.forEach((event: Event, eventName: keyof ClientEvents) => {
      if (event.eventType === 'once') {
        bot.once(eventName, (...args) => event.execute(bot, ...args));
      } else {
        bot.on(eventName, (...args) => event.execute(bot, ...args));
      }
    });
  }

  getCommand(commandName: string): Command | undefined {
    return this._commandsCollection.get(commandName);
  }
}
