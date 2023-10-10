import { User } from "../domains/user";

export default class DatabaseAdapter {
  saveUser(user: User) {
    // db.collection('users').save(user);
    console.log(user);
    // throw new Error ("Error during user save")
  }
}

export type DatabaseAdapterType = {
  saveUser: (user: User) => void;
};
