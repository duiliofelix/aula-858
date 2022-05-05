import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/aula_db')
  .then(() => console.log('Conectado'));
