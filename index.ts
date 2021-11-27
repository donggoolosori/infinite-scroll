import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
import userRouter from './api';
import { User } from './model/user';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/client`));

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: +process.env.PORT!,
  username: process.env.USER_NAME,
  password: process.env.PASS_WORD,
  database: process.env.DATABASE,
  entities: [User],
  synchronize: false,
  logging: false,
})
  .then(() => {
    console.log('db is connected.');
  })
  .catch((error) => console.log(error));

app.get(
  '/',
  (req: express.Request, res: express.Response) => {
    res.sendFile(`${__dirname}/client/index.html`);
  },
  (err) => console.log(err)
);
app.use('/api/user', userRouter);

app.listen(3000, () => console.log('Server starts on 3000'));
