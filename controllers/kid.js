var express = require('express');

var connection = require('../helpers/db');

function kidController() {
    this.db = new connection();
}

kidController.prototype.save = function(kid) {
    return new Promise((resolve, reject) => {
        this.db.connect()
            .then(function (database) {
                var collection = database.collection('kids');
                collection.insert(kid, function(err, result) {
                    console.log(result);
                    resolve(result);
                })
            })
    })
};

kidController.prototype.findAll = function() {
    return new Promise((resolve, reject) => {
        this.db.connect()
            .then(function (database) {
                var collection = database.collection('kids');
                collection
                    .find()
                    .toArray(function(err, docs) {
                        console.log(docs);
                        resolve(docs);
                })
            })
    })
};

kidController.prototype.findOne = function(kid) {
    return new Promise((resolve, reject) => {
        this.db.connect()
            .then(function (database) {
                var collection = database.collection('kids');
                collection
                    .find(kid)
                    .toArray(function(err, docs) {
                        console.log(docs);
                        resolve(docs[0]);
                })
            })
    })
};

module.exports = kidController;