const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../../db')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // }
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    // Making `.p