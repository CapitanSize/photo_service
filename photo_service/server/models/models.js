const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Imagine = sequelize.define('imagine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    createdDate: {type: DataTypes.DATE, allowNull: false}
})

module.exports = {
    Imagine
}