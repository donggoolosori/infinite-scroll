import express from 'express';
import morgan from 'morgan';
import userRouter from './api';

const app = express();

app.use(morgan('dev'));

app.use('/api/user', userRouter);

app.listen(3000, () => console.log('Server starts on 3000'));
