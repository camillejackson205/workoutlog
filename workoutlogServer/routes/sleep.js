var router = require('express').Router();
var sequelize = require('../db');
var Sleep = sequelize.import('../models/sleep');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req, res){
    var  timeSlept = req.body.sleep.timeSlept;

Sleep 
.create({
    timeSlept:timeSlept,
    owner: user.id
})
.then(
    function createSleepSuccess(sleep) {
        res.json({sleep
    })},

    function createError(err) {
        res.send(500, err.message);
    }
);

});
