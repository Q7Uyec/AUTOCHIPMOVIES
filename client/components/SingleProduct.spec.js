import {expect} from 'chai'
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from './SingleProduct'


Enzyme.configure({ adapter: new Adapter() })

describe('Single Product', () => {
  describe('should render the product details', () => {
    let  SingleProductWrapper
    
    beforeEach('create <Singleproduct /> wrapper', () => {
      //  let product = { id: 1, name: 'NYC Air', description: 'When you miss the s