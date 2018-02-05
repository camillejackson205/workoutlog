var jwt = require('jsonwebtoken');
sequelize = require ('../db');
var User = sequelize.import('../models/users');

module.exports = function(req, res, next) {
    var sessionToken = re.headers.authorization

    if(!req.body.user && sessionToken)[
        jwt.verify(sessionToken, process.env.JWT_SECRET, function(err, decoded){
            if(decoded){}
            User.findOne({where: {username: req.body.user.username} }).then(
                function(user){
                    if(user){
                        bcrypt.compare(req.body.user.password, user.passwordhash, function(err, ))
                    }
                }
            )
        })
    ]
}
