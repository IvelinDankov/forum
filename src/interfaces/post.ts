import { ITheme } from './theme.js';
import { IUser } from './user.js';

export interface IPost {
  likes: string[];
  _id: string;
  text: string;
  userId: IUser;
  themeId: ITheme;
  created_at: string;
  updatedAt: string;
  __v: number;
}
