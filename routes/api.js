const express = require("express");
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of nnjas from the database
router.get('/ninjas', function (req, res, next){
    res.send({type: 'GET'});
});

// add a new ninja to the database
router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// update a ninja in the datbase
router.put('/ninjas/:id', function (req, res, next){
    res.send({type: 'PUT'});
});

// delete a ninja from the datatbase
router.delete('/ninjas/:id', function (req, res, next){
    res.send({type: 'DELETE'});
});

module.exports = router;