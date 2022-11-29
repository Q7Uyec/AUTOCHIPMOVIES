const { expect } = require('chai');
const db = require('../../index');
const Product = db.model('product');

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  });
  let product
  beforeEach(async() => {
    product = await Product