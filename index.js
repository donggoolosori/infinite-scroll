const express = require('express');
const morgan = require('morgan');
const userRouter = require('./router/userRouter');

const app = express();

app.use(morgan('dev'));

app.use('/api/user', userRouter);

app.listen(3000, () => console.log('Server starts on 3000'));
