import { INekoImage } from '@interface/INsfwImage';
import axios from 'axios';

export default class NetworkModule {
  static async getNekoImage(nekoType: string): Promise<INekoImage> {
    try {
      const res = await axios.get(`https://nekobot.xyz/api/image?type=${nekoType}`);
      return res.data;
    } catch (e) {
      throw new Error('Error when get neko image from API');
    }
  }
}
