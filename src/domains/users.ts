export default class UserDomain {
  username: string;
  password: string;

  constructor({ username, password }: User) {
    this.username = username;
    this.password = password;
  }

  getUsername(): User['username'] {
    return this.username;
  }

  setUsername(username: string): void {
    this.username = username;
  }

  getPassword(): User['password'] {
    return this.password;
  }

  setPassword(password: string): void {
    this.password = password;
  }
}

export type User = {
  username: string;
  password: string;
};
