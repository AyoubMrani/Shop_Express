const express = require("express");
const router = express.Router();
const Product = require("./product");

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/add_product.html");
});

router.post("/add", async (req, res) => {
  try {
    const { designation, prix, stock } = req.body;
    const product = new Product({
      designation,
      prix,
      stock,
    });

    await product.save();

    res.status(201).json({
      message: "Produit acheté avec succès",
      product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
