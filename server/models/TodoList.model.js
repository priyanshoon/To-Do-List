const sequelize = require("../database/Postgres.database")
const { DataTypes } = require("sequelize")
const User = require("./Users.model")

const TodoList = sequelize.define(
    'todo_lists',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: 'users',
                key: 'id'
            },
            allowNull: false
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        timestamps: false,
    },
)

//https://sequelize.org/docs/v6/core-concepts/assocs/

User.hasMany(TodoList, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = TodoList
