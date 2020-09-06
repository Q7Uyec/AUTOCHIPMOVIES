import {expect} from 'chai'
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import  AllProducts from './AllProducts'
import Product from './Product'

const adapter = new Adapter()
Enzyme.configure({ adapter })

const productList = [
  {
    id: 1,
    name: 'NYC Air',
    description:
      'When you miss the secondhand smoke, sidewalk pee, and perpetual garbage day',
    scent: 'Subway Chic',
    elevation: 0,
    quality: 'Could be better',
    price: 100,
    purpose: 'Productivity and Loss of