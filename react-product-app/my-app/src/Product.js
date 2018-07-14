import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Card from "./Card";
import { Route, Link } from "react-router-dom";

const cards = ["A", "B", "C", "D", "E", "F"];

class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns" style={{ display: 'flex', flexFlow: 'row wrap' }}>
          {cards.map(card => (
            <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
              <Card name={card}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Product;
