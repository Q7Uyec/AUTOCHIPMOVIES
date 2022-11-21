const User = require('./users/user')
const Product = require('./products/product')
const Cart = require('./carts/cart')
const Order = require('./order/order')

Cart.belongsTo(Product)
Product.hasMany(Cart)

Order.belongsTo(User)
User.hasMany(Orde