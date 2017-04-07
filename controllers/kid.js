var express = require('express');

var connection = require('../helpers/db');

function kidController() {
    this.db = new connection();
}

kidController.prototype.save = function() {
    this.db.connect()
        .then(function (database) {
            var collection = database.collection('kids');
            collection.insert({name: 'Maggie', score: 8}, function(err, result) {
                collection.find({name: 'Maggie'}).toArray(function(err, docs) {
                    console.log(docs[0]);
                    database.close;
                })
            })
        })
}

module.exports = kidController;