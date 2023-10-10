import DatabaseAdapter from "./src/infrastructures/database";
import DatabaseInterface from "./src/interfaces/database";
import UserUseCase from "./src/usecases/user";

const databaseAdapter = new DatabaseAdapter();

const databaseInterface = new DatabaseInterface(databaseAdapter);

const userUseCase = new UserUseCase(databaseInterface);

const output = userUseCase.createNewUser({
  username: "fake-user",
  password: "fake-password",
});

console.log(output);
