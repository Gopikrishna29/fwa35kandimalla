var express = require("express");

var router = express.Router();



/* GET home page. */

router.get("/", function (req, res, next) {

  res.render("mydata", {

    title: "Kandimalla GopiKrishna",

    fact: "I love to smoke"

  });

});



module.exports = router;