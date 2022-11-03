const {expect} = require('chai')
const db = require('../../index')
const Cart = db.model('cart')

describe('Cart model', () => {
  beforeEach(() => {
    