import { User } from "../domains/user";
import { DatabaseAdapterType } from "../infrastructures/database";

export default class DatabaseInterface {
  databaseAdapter: DatabaseAdapterType;
  constructor(databaseAdapter: DatabaseAdapterType) {
    this.databaseAdapter = databaseAdapter;
  }

  saveUser(user: User) {
    this.databaseAdapter.saveUser(user);
  }
}

export type DatabaseInterfaceType = {
  saveUser: (user: User) => void;
};
