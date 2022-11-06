const {expect} = require('chai')
const db = require('../../index')
const Cart = db.model('cart')

describe('Cart model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  let cart
  beforeEach(async () => {
    cart = await Cart.build({
      produ