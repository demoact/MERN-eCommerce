import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
import Slider from '../models/sliderModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);

  await User.remove({});
  const createdUsers = await User.insertMany(data.users);

  await Slider.remove({});
  const createdSliders = await Slider.insertMany(data.sliders);

  res.send({ createdProducts, createdUsers, createdSliders });
});

export default seedRouter;
