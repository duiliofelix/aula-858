import { Router } from 'express';
import ProductModel from '../database/models/products.js';

const router = new Router();

router.get('/:tipo?', async (req, res) => {
  const products = await ProductModel
    .find({ type: req.params.tipo });

  res
    .status(200)
    .json(products);
});

router.post('/', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

router.patch('/:id', (req, res) => {
  // alteraMeuProduto(req.params.id, req.body);

  res
    .status(200)
    .json(req.body);
});

router.delete('/:id', (req, res) => {
  // deletaMeuProduto(req.params.id);

  res
    .status(200);
});

export default router;
