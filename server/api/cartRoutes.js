const router = require('express').Router()
const {Cart, Product} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: [{model: Product}],
      where: {
        userId: null,
        orderId: null
      }
    })

    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const {id, price, stock} = req.body

    let cartItem = await Cart.findOne({
      where: {
        productId: id,
        userId: null,
        orderId: null
      }
    })

    if (cartItem && stock > 1) {
      let quant = cartItem.quantity
      cartItem = await cartItem.update({
        quantity: quant + 1
      })
      res.json(cartItem)
    } else if (stock > 1) {
      res.json(
        await Cart.create({
          quantity: 1,
          pricePerItem: price,
          productId: id
        })
      )
    } else {
      res.send('Item out of Stock!')
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const cartItemId = req.params.id