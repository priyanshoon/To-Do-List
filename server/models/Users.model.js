const { DataTypes } = require("sequelize")
const sequelize = require("../database/Postgres.database")
const bcrypt = require("bcryptjs");

const User = sequelize.define(
    'users',
    {
        id: {
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
        timestamps: false,
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            },
        },
    },
)


//console.log(User === sequelize.models.User);
module.exports = User
