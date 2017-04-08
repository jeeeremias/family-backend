var express = require('express');

var db = require('../helpers/db');

exports.save = function(kid) {
    return new Promise(function(resolve, reject) {
        db.get()
            .collection('kids')
            .insert(kid, function(err, result) {
                if (err) reject(err);
                resolve(result);
            })
    })
};

exports.findAll = function(res) {
    return new Promise(function(resolve, reject) {
        db.get()
            .collection('kids')
            .find()
            .toArray(function(err, docs) {
                if (err) reject(err);
                resolve(docs);
            })
    })
};

exports.findOne = function(kid) {
    return new Promise(function(resolve, reject) {
        db.get()
            .collection('kids')
            .find(kid)
            .toArray(function(err, docs) {
                if (err) reject(err);
                resolve(docs);
            })
    })
};