
/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Navbar } from './navbar'
export { default as UserHome } from './UserHome'
export { Login, Signup } from './auth-form'
export { default as Splash } from './Splash'
export { default as AllProducts } from './AllProducts'
export { default as SingleProduct } from './SingleProduct'
export { default as Cart } from './Cart'
export { default as Checkout } from './Checkout'
export { default as Page404 } from './Page404'
export { default as AccessDenied } from './AccessDenied'