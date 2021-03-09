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
router.get("/categories/create", function(req, res){
    categoryController.create(req, res);
})
router.post("/categories/", function(req, res){
    categoryController.store(req, res);
})

  

module.exports = router;