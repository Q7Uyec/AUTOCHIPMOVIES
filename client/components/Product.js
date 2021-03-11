
import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, OverlayTrigger } from 'react-bootstrap'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const product = this.props.product
    const popover = (
      <Popover id="popover-basic" title="Added To Cart">
        Keep breathing, Great Choice!