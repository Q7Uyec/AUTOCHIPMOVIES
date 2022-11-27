
const Sequelize = require('sequelize')
const db = require('../../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'OPEN'
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
      max: 20
    }
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isNumeric: true
    },
    email: {
      type: Sequelize.STRING,