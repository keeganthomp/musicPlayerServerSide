const express = require("express");
const entryRoutes = express.Router();
const bodyParser = require("body-parser");



entryRoutes.get("/", function(req, res){
  res.render("index");
});

entryRoutes.post("/", function(req, res){
  var userChoice = req.body.search;
  var newFavorite = models.userchoices.build( {artist: userChoice});
  newFavorite.save().then(function(saved){
    res.redirect("/");
  })
});

module.exports = entryRoutes;
