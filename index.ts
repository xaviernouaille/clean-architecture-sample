import express, { Request, Response } from 'express';
import pino from 'pino';
import { z } from 'zod';
import UserDatabaseAdapter from './src/infrastructures/database/users';
import UserDatabaseInterface from './src/interfaces/database/users';
import UserUseCase from './src/usecases/users';
import { User } from './src/domains/users';
import Database from './src/infrastructures/database';

const app = express();
app.use(express.json());
const PORT = 8888;

const CreateUserBody = z.object({
  username: z.string(),
  password: z.string(),
});

const logger = pino({});

app.post('/api/users', async (req: Request, res: Response) => {
  try {
    CreateUserBody.parse(req.body);
  } catch {
    res.status(400).json({ error: 'Invalid input body' });
  }

  const { username, password } = req.body as User;

  try {
    const db = await new Database(logger).getDatabase();
    const dbAdapter = new UserDatabaseAdapter(db);
    const dbInterface = new UserDatabaseInterface(dbAdapter);
    const userUseCase = new UserUseCase(dbInterface);
    const output = userUseCase.createUser({ username, password });
    res.status(200).json({ result: output });
  } catch (e: unknown) {
    const { message } = e as Error;
    logger.error(message);
    res.status(400).json({ error: message });
  }
});

app.get('/api/users', async (_: Request, res: Response) => {
  try {
    const db = await new Database(logger).getDatabase();
    const dbAdapter = new UserDatabaseAdapter(db);
    const dbInterface = new UserDatabaseInterface(dbAdapter);
    const userUseCase = new UserUseCase(dbInterface);
    const output = await userUseCase.getAllUsers();
    res.status(200).json({ result: output });
  } catch (e: unknown) {
    const { message } = e as Error;
    logger.error(message);
    res.status(400).json({ error: message });
  }
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

export default app;
