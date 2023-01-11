import express from 'express';
import Slider from '../models/sliderModel.js';

const sliderRouter = express.Router();

sliderRouter.get(
  'https://mern-ecommerce-app-07lm.onrender.com:10000',
  async (req, res) => {
    const sliders = await Slider.find();
    res.send(sliders);
  }
);

export default sliderRouter;
