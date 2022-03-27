const path = require('path');
// require('dotenv').config()


const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

//const fileUpload = require('express-fileupload');


const users = require("./routes/api/users");
const messages = require("./routes/api/messages");
const locations = require("./routes/api/locations");
const comments = require("./routes/api/comments");
const friends = require("./routes/api/friends");
const posts = require("./routes/api/posts");
// const User = require('./models/User')
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Successfully Connected to DB"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));

app.use(passport.initialize());
require('./config/passport')(passport);

//app.use(fileUpload())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/messages", messages);
app.use("/api/locations", locations);
app.use("/api/comments", comments);
app.use("/api/friends", friends);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));




