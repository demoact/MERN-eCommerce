import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import data from './data.js';
import seedRouter from './router/seedRoutes.js';
import productRouter from './router/productRoutes.js';
import userRouter from './router/userRoutes.js';
import sliderRouter from './router/sliderRoutes.js';

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);

// send products into listing
app.use('/api/products', productRouter);

app.use('/api/users', userRouter);
app.use('/api/sliders', sliderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at the port http://localhost:${port}`);
});
