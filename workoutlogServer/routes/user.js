var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');


router.post('/', function(req, res) {
    var user = req.body.user.username;
    var pass = req.body.user.password;
    //Need to create a user object and use sequelize to put that user into
    //

    User.create({
        username: user,
        passwordhash: pass
    }).then(
    //Sequelize is going to return the object it created from db.

        function createSuccess(user){
            res.json({
                    user: user,
                    message: 'you did it!!!'
            });
        },
        function createError(err){
            res.send(500, err.message);

        }
    );
});

module.exports = router;
