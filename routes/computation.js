var express = require("express");
var router = express.Router();
var rno;
var atan;
var expm1;
var exp;

/* GET users listing. */

router.get("/", function (req, res, next) {
  rno = Math.random() * (100 - 1) + 1;

  atan = Math.atan(rno,);

  expm1 = Math.expm1(rno);

  exp = Math.exp(rno);

  res.send(`(atan) of (${rno}) is ${atan} <br>

            (expm1) of (${rno}) is ${expm1} <br>

            (exp) of (${rno}) is ${exp}`);
});

module.exports = router;