const express = require("express");
const app = express();
const mongoose = require("mongoose");
const add_product = require("./add_product");
const list_product = require("./list_product");
app.use(express.json());


//----------------------routes----------------------
app.use(express.json());
app.use("/", list_product);
app.use("/add_product", add_product);



//----------------------routes----------------------

mongoose
  .connect("mongodb://127.0.0.1:27017/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failedddd to connect to MongoDB", err);
  });

const port = 3333;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
