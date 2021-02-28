var express = require('express');
var router = express.Router();
const categoryController = require("../controllers/admin/CategoryController");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admins/dashboard');
});

/* Category. */
router.get("/categories", function(req, res){
    categoryController.getAll(req, res);
})

  

module.exports = router;