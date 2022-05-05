import express from 'express';
import cors from 'cors';
import './database/index.js';
import { productRouter } from './routes/index.js';
import { PORT } from './constants.js';

const server = express();

server.use(cors());

server.use(express.json());
server.use('/products/', productRouter);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
