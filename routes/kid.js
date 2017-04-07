var express = require('express');
var router 	= express.Router();

var DB = require('../helpers/db');
var controller = require('../controllers/kid');

router.get('/', function(req, res, next) {

    var kid = new controller();
	kid.findAll()
        .then(function(results) {
            res.json(results);
        });
});

router.get('/:name', function(req, res, next) {

    var kid = new controller();
	kid.findOne({name: req.params.name})
        .then(function(result) {
            res.json(result);
        });
});

router.post('/', function(req, res, next) {

	var kid = new controller();
    kid.save(req.body)
        .then(function(saved) {
            res.json(saved);
        })
});

module.exports = router;