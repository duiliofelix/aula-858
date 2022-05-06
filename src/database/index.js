import mongoose from 'mongoose';
import { MONGO_URL } from '../constants';

mongoose.connect(MONGO_URL)
  .then(() => console.log('Conectado'));
