/**
 * Created by benjamin on 10/05/2014.
 */
var express = require('express');
var router = express.Router();
var indexPage = require('./../pages/home/indexPage');

/* GET home page. */
router.get('/', function(req, res) {
    indexPage.render(req, res) ;
});

var page1 = require('./../pages/page1/indexPage');
/* GET home page. */
router.get('/page1', function(req, res) {
    page1.render(req, res) ;
});


module.exports = router;
