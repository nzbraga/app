const {Model, DataTypes} = require('sequelize')

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            token: DataTypes.STRING,
            status: DataTypes.BOOLEAN,

        },{
            sequelize
        })
    }
}

module.exports = User