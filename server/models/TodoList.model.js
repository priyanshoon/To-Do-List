const sequelize = require("../database/Postgres.database")
const { DataTypes } = require("sequelize")
const User = require("./Users.model")

const TodoList = sequelize.define(
    'todo_list',
    {
        todo_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: 'users',
                key: 'user_id'
            },
            allowNull: false
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        timestamps: false,
    },
)

//https://sequelize.org/docs/v6/core-concepts/assocs/

module.exports = TodoList
