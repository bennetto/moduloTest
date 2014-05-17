/**
 * Created by benjamin on 11/05/2014.
 */
var express = require('express');
var router = express.Router();
var wine = require('../wines');

//Ressources rest
router.get('/wines', wine.findAll);
router.get('/wines/:id', wine.findById);
router.post('/wines', wine.addWine);
router.put('/wines/:id', wine.updateWine);
router.delete('/wines/:id', wine.deleteWine);



module.exports = router;
