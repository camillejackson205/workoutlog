var router = require('express').Router();
var sequelize = require('../db');
var Sleep = sequelize.import('../models/sleep');
var User = sequelize.import('../models/user');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req, res){
    var timeSlept = req.body.sleep.result;
    var user = req.body.sleep.owner;

    Sleep 
        .create({
            timeSlept: timeSlept,
            owner: user
        })
        .then(
            function createSleepSuccess(sleep) {
                res.json(sleep)
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

router.get('/', function(req, res) {
    var user = req.body.owner;
    Sleep
	.findAll({
		where: { owner: user }
	})
	.then(
		function findAllSuccess(data) {
			// console.log(data);
			res.json(data);
		},
		function findAllError(err) {
			res.send(500, err.message);
		}
	);
});
router.put('/', function(req, res){
    
});

module.exports = router;
