var express = require('express');
var router 	= express.Router();

var controller = require('../models/kid');

router.get('/', function(req, res, next) {
	controller.findAll()
        .then(function(results) {
            res.json(results);
        });
});

router.get('/:name', function(req, res, next) {
	controller.findOne({name: req.params.name})
        .then(function(result) {
            res.json(result);
        });
});

router.post('/', function(req, res, next) {
    controller.save(req.body)
        .then(function(saved) {
            res.json(saved);
        })
});

module.exports = router;