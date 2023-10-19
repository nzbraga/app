const {Model, DataTypes} = require('sequelize')

class List extends Model {
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            user_id: DataTypes.STRING,
        },{
            sequelize
        })
    }
    static associate(models) {
       
        List.belongsTo(models.User, {
            foreignKey: 'user_id'
        });
    }
}

module.exports = List