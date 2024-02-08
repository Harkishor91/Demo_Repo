const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const dbUrl = process.env.DbUrl;

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("THis is code is working on localhost");
});

const startServer = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to MongoDB");
        app.listen(port, () => {
          console.log(`Server running on port ${port}`);
        });
      } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
      }
};

startServer();
