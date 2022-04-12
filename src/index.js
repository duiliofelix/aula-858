import express from 'express';
import { productRouter } from './routes';
import { PORT } from './constants';

const server = express();

server.use(express.json());
server.use('/products/', productRouter);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
