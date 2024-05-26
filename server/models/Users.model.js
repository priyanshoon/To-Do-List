const { DataTypes } = require("sequelize")
const sequelize = require("../database/Postgres.database")

const User = sequelize.define(
    'users',
    {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

//console.log(User === sequelize.models.User);
module.exports = User
