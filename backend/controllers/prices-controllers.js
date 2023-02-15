const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Price = require('../models/price');

const getPrices = async (req, res, next) => {
  let prices;
  try {
    prices = await Price.find();
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ prices: prices.map(price => price.toObject({ getters: false })) });
};

const postPrices = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const { name, price, count } = req.body;


  const createdPrice = new Price({
    name,
    price,
    count,
  });

  try {
    await createdPrice.save();
  } catch (err) {
    const error = new HttpError(
      'OK',
      500
    );
    return next(error);
  }

  res.status(201).json({ prices: createdPrice.toObject({ getters: true }) });
};


exports.getPrices = getPrices;
