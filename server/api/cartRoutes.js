const router = require('express').Router()
const {Cart, Product} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) =>