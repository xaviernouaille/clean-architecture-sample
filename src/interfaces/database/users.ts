import { User } from '../../domains/users';
import { UserDatabaseAdapterType } from '../../infrastructures/database/users';

export default class UserDatabaseInterface {
  databaseAdapter: UserDatabaseAdapterType;
  constructor(databaseAdapter: UserDatabaseAdapterType) {
    this.databaseAdapter = databaseAdapter;
  }

  async saveUser(user: User) {
    return this.databaseAdapter.saveUser(user);
  }

  getAllUsers() {
    return this.databaseAdapter.getAllUsers();
  }
}

export type DatabaseInterfaceType = {
  saveUser: (user: User) => Promise<User>;
  getAllUsers: () => Promise<User[]>;
};
