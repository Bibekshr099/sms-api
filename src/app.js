import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import notFoundHandler from './errors/not-found-handler.js';
import errorHandler from './errors/error-handler.js';
import api from './api.js';

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json({ limit: '1MB' }));
app.use('/api/v1', api);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
