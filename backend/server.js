const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.use(express.json());

app.use("/auth", authRouter);

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
