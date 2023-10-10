import UserDomain, { User } from "../domains/user";
import { DatabaseInterfaceType } from "../interfaces/database";

export default class UserUseCase {
  databaseInterface: DatabaseInterfaceType;
  constructor(databaseInterface: DatabaseInterfaceType) {
    this.databaseInterface = databaseInterface;
  }

  createNewUser({ username, password }: User) {
    if (!username || !password) {
      throw new Error("You must provide a username and password");
    }

    const user: User = new UserDomain({ username, password });

    return this.databaseInterface.saveUser(user);
  }
}
