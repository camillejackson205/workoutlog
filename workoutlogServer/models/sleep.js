module.exports = function(sequelize, DataTypes){
    return sequelize.define('sleep', {
        timeSlept: DataTypes.INTEGER
    }, {
        
    });
    
};