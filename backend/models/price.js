const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
  name: { type: String, required: true },
  count: { type: String, required: true },
  price: { type: String, required: true }
});

module.exports = mongoose.model('Price', priceSchema);