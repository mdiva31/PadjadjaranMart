const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")


// menggunakan configurasi enkripsi dotenv
dotenv.config();

// melakukan koneksi ke mongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Berhasil melakukan koneksi ke MongoDB"))
  .catch((err) => {
    console.log(err);
  });

// API end point
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

// PORT Backend
app.listen(process.env.PORT || 5000, () => {
  console.log("Server Backend Berjalan!!");
});
