const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kajisaab:VWIQyr3WN1p8dTXZ@cluster0.gis4w.mongodb.net/test"
  )
  .then((result) => {
    app.listen(8080);
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
