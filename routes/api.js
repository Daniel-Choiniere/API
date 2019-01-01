const express = require("express");
const router = express.Router();

// get a list of nnjas from the database
router.get('/ninjas', function (req,res){
    res.send({type: 'GET'});
});

// add a new ninjs to the database
router.post('/ninjas', function (req,res){
    res.send({type: 'POST'});
});

// update a ninja in the datbase
router.put('/ninjas/:id', function (req,res){
    res.send({type: 'PUT'});
});

// delete a ninja from the datatbase
router.delete('/ninjas/:id', function (req,res){
    res.send({type: 'DELETE'});
});

module.exports = router;