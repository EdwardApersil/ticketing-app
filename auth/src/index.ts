// filepath: /Users/edwardapersil/Desktop/ticketing-app/auth/src/index.ts
import express from 'express';
import 'express-async-errors'
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';
import { NotFundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all('*', async (req, res) => {
    throw new NotFundError();
});

// app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});