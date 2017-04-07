var request = require("request");
var express = require('express');
var router 	= express.Router();

var config = require('../config.js');
var DB = require('../javascripts/db');

router.get('/', function(req, res, next) {

	var kid = {
		"name": "Maggie",
		"score": 8
	}
	res.json(testObject);
});

router.post('/', function(req, res, next) {

	var kid = {
		"name": "Maggie",
		"score": 8
	}
	res.json(testObject);
});