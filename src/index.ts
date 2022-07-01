import { Client, Intents } from 'discord.js';
import { config } from 'dotenv';

config();

(async () => {
  try {
    const client = new Client({
      intents: new Intents(32767)
    });

    client.on('ready', () => {
      console.log('Bot is ready');
    });

    await client.login(process.env['TOKEN']);
  } catch (e) {
    console.log(e);
  }
})();
