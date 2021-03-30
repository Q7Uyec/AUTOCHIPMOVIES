
import React, {Component} from 'react'
// import { Link } from 'react-router-dom'

class Splash extends Component {
  render() {
    return (
      <div id="container">
        <h1>Welcome to Cloud 9 </h1>
        <div className="carousel-wrapper">
          <span id="item-1" />
          <span id="item-2" />
          <span id="item-3" />
          <span id="item-4" />
          <span id="item-5" />
          <span id="item-6" />
          <span id="item-7" />
          <span id="item-8" />
          <span id="item-9" />
          <div className="carousel-item item-1">
            <h2>Cloud 1</h2>
            <h4>City Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
              Maecenas lacus nunc, imperdiet sed mi et, finibus suscipit mi.
            </p>
            <a className="arrow arrow-prev" href="#item-9" />
            <a className="arrow arrow-next" href="#item-2" />
          </div>

          <div className="carousel-item item-2">
            <h2>Cloud 2</h2>