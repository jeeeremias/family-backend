var express = require('express');
var router 	= express.Router();

var DB = require('../helpers/db');
var controller = require('../controllers/kid');

router.get('/', function(req, res, next) {

    var kid = new controller();
	kid.save();
	res.json('Success');
});

router.post('/', function(req, res, next) {

	var kid = {
		"name": "Maggie",
		"score": 8
	}
	res.json(kid);
});

module.exports = router;