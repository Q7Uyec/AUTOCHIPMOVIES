
const router = require('express').Router()
const {User, Order, Product, Cart} = require('../db/models')
const isAdmin = require('./isAdmin')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/orders', async (req, res, next) => {
  try {
    let order = await Order.findOne({
      include: [{model: User, where: {id: req.params.userId}}]
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/cart', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: [{model: Product}, {model: User}],
      where: {userId: req.params.userId, orderId: null}
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId/checkout', async (req, res, next) => {
  try {
    let cart = await Cart.findAll({
      include: [{model: Product}],
      where: {
        userId: req.params.userId,