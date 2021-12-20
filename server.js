const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { port, db_url } = require("./config");
const server_port = port || 8000;
mongoose
  .connect(db_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err, "Database is not connected");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", require("./src/routers/index"));
app.listen(server_port, () => {
  console.log(`Server running on ${server_port}`);
});
