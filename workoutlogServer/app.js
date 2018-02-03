var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User = sequelize.import('./models/user');
app.use('/api/user', require('./routes'));

User.sync();
app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});

//Data Model



//  User.sync({force:true})

app.use(bodyParser.json());





