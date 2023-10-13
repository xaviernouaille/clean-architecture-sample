import { Db, MongoClient } from 'mongodb';
import { Logger } from 'pino';

const dbName = '';
const url = `mongodb://localhost:27017/${dbName}`;

class Database {
  logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }

  async getDatabase(): Promise<Db> {
    try {
      const client = new MongoClient(url, { replicaSet: 'rs0' });
      await client.connect();
      return client.db();
    } catch {
      const message = 'Error while connecting to database';
      this.logger.error(message);
      throw new Error(message);
    }
  }
}

export default Database;
