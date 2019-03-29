const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const blogs = require("./routes/api/blogs");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("connected to database..."))
  .catch(err => console.log(err));

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
