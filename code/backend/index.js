const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const server = express();
const dbConnStr =
  "mongodb+srv://dbUser:Passw0rd123@cluster0.uxrjs.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(dbConnStr, { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected");
});
db.on("error", (err) => {
  console.error("Connection error: ", err);
});

function saveUser(user) {
  let u = new User(user);
  return u.save();
}

// GET ALL
server.get("/", (req, res) => {
    res.send(await User.find());
});

// GET USER WITH SPECIFIED USERNAME
server.get("/", (req, res) => {
    let username = req.body.username;
    res.send(await User.find(username))
})
