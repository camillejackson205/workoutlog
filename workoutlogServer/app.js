var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
    res.send("Hello World");
});
var Sequelize = require ('sequelize');
var sequelize = new Sequelize('awesomeworkoutlog', 'postgres', 'skip983825', {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize.authenticate().then(
    function() {
        console.log('connected to workoutlog postgres db');
    },
    function(err){
        console.log(err);
    }
);
var User = sequelize.define('user', {
    username: Sequelize.STRING,
    passwordhash: Sequelize.STRING
});
User.sync();
//User.sync({force:true});
app.use(bodyParser.json());

app.post('/api/user', function(req, res){
    var username = req.body.user.username;
    var pass = req.body.user.password;
    User.create({
        username: username,
        passwordhash: ""
    }).then(
        //sequelize is going to return the object it created from the db.

        function createSuccess(user){
            res.json({
                user:user,
                message: 'create'
            });
        },
        function createError(err){
            res.send(500, err.message);
        }
    );
    //need to create a user object and use sequelize to put that user into our db.
});




app.listen(3000, function(){
    console.log("app is listening on 3000");
});


