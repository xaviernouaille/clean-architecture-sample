import UserDomain, { User } from '../domains/users';
import { DatabaseInterfaceType } from '../interfaces/database/users';

export default class UserUseCase {
  databaseInterface: DatabaseInterfaceType;
  constructor(databaseInterface: DatabaseInterfaceType) {
    this.databaseInterface = databaseInterface;
  }

  createUser({ username, password }: User) {
    if (!username || !password) {
      throw new Error('You must provide a username and password');
    }

    const user: User = new UserDomain({ username, password });

    return this.databaseInterface.saveUser(user);
  }

  getAllUsers() {
    return this.databaseInterface.getAllUsers();
  }
}
