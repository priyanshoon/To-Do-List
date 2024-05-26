const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres'
})

async function db_conn() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
    } catch (error) {
        console.log("Unable to connect to database due to error: ", error);
    }
}

db_conn();

//sequelize.sync();

module.exports = sequelize;
