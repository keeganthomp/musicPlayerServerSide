const express = require("express");
const app = express();
const entryRoutes = require("./routes/entryRoutes");
const userRoutes = require("./routes/userRoutes");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const models = require("./models");
const port = 7500;

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use("/", express.static("./views"));
app.use("/", entryRoutes);
// app.use("/signup", userRoutes);

app.get("/signup", function(req, res) {
  res.render("signup");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.post("/signup", function(req, res) {
  var newUserInfo = req.body;
  var addUser = models.userchoices.build({
    username: newUserInfo.name,
    password: newUserInfo.password
  });
  addUser.save().then(function(saved) {
    res.redirect("/login");
  });
});

app.get("/favorites", function(req, res) {
  models.userchoices.findAll().then(function(favorites){
    console.log("FAVORITES:", favorites);
  res.render("favorites", {favorite: favorites});    
  })
});


var favoriteFile;
var favoriteArtist;
var favoriteSong;
var artistImg;
var favorite;


app.post("/favorites", function(req, res) {
  favorite = req.body;
  favoriteFile = req.body.audioFile;
  favoriteArtist = req.body.artist;
  favoriteSong = req.body.song;
  artistImg = req.body.image;
  console.log(req.body);
  var addFavorite = models.userchoices.build({
    audioFile: favoriteFile,
    artist: favoriteArtist,
    song: favoriteSong,
    image: artistImg
  });
  addFavorite.save().then(function(saved) {
    res.redirect("/");
    });
  });


app.post("/login", function(req, res) {
  var loginUsername = req.body.name;
  var dbUsername = models.userchoices.findAll().then(function(req, res) {
    console.log(dbUsername);
    res.redirect("/");
  });
});

app.listen(port, function(req, res) {
  console.log("You are up and runnning on", port);
});
