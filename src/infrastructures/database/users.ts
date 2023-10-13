import { Db } from 'mongodb';
import { User } from '../../domains/users';

export default class UserDatabaseAdapter {
  db: Db;

  constructor(database: Db) {
    this.db = database;
  }

  async saveUser(user: User): Promise<User> {
    // db.collection('users').save(user);
    // throw new Error ("Error during user save")
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const result = this.db.collection<User>('users').find({});
      const users = await result.toArray();
      return users;
    } catch {
      throw new Error('Error while getting users');
    }
  }
}

export type UserDatabaseAdapterType = {
  saveUser: (user: User) => Promise<User>;
  getAllUsers: () => Promise<User[]>;
};
