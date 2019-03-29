const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const blogs = require("./routes/api/blogs");

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/blogs", blogs);

app.get("/", (req, res) => {
  console.log("request at homepage");
  res.send("hello");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
