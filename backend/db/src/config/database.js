require('dotenv').config();

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'app',
    define: {
        timestamp: true,
        underscored: true,
    }
}
