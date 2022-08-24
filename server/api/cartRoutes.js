const router = require('express').Router()
const {Cart, Product} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: [{model: Product}],
      where: {
        userId: null,
        ord