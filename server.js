const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3005;

app.use(express.json());
app.use(express.static("public"));

const todosController = require("./controllers/cats.js");
app.use("/catfruits", todosController);

mongoose.connect("mongodb://localhost:27017/cats", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongod...");
});
app.listen(port, () => {
  console.log(`😸 😻 🙀 Cat Fruits is listening... on ${port} 🍇  🍒 🍉`);
});
