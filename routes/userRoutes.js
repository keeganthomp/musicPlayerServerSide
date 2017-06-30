const express = require("express");
const userRoutes = express.Router();
const bodyParser = require("body-parser");


userRoutes.get("/signup", function(req, res){
  res.render("signup");
})

module.exports = userRoutes;