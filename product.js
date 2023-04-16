const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  designation: { type: String, required: true },
  prix: { type: Number, required: true },
  stock: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
