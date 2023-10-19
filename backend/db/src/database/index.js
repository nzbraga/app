const Sequelize = require('sequelize')
const configDB = require('../config/database')

const User = require('../models/User')
const List = require('../models/List')

const connection = new Sequelize(configDB)

User.init(connection)
List.init(connection)

List.associate({ User });

module.exports = connection