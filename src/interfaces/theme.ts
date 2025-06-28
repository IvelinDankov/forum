import { IPost } from './post.js';
import { IUser } from './user.js';

export interface ITheme {
  _id: string;
  subscribers: string[];
  posts: IPost;
  themeName: string;
  userId: IUser;
  created_at: string;
  updatedAt: string;
  __v: number;
}
