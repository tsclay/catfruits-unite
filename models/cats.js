const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  message: { type: String, required: true },
});

const Cats = mongoose.model("Cat", catSchema);

module.exports = Cats;
