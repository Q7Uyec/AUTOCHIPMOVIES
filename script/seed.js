
'use strict'

const db = require('../server/db')
const Product = require('../server/db/models/products/product.js')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')