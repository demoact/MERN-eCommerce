import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get(
  'https://mern-ecommerce-app-07lm.onrender.com:10000/',
  async (req, res) => {
    const products = await Product.find();
    res.send(products);
  }
);

// send single product

productRouter.get(
  'https://mern-ecommerce-app-07lm.onrender.com:10000/slug/:slug',
  async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  }
);

productRouter.get(
  'https://mern-ecommerce-app-07lm.onrender.com:10000/:id',
  async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  }
);

export default productRouter;
