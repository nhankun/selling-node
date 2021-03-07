var express = require('express');
var router = express.Router();
const categoryController = require("../controllers/admin/CategoryController");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('providers/dashboard');
});


  

module.exports = router;