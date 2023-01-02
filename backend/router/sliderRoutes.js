import express from 'express';
import Slider from '../models/sliderModel.js';

const sliderRouter = express.Router();

sliderRouter.get('/', async (req, res) => {
  const sliders = await Slider.find();
  res.send(sliders);
});

export default sliderRouter;
