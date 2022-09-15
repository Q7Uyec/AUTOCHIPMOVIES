const router = require('express').Router()
const { Product } = require('../db/models')
const isAdmin = require('./isAdmin')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll(
      { order: [['id', 'ASC']] }
    )
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
}