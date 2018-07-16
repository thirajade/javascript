import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Card from "./Card";
import { Route, Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: " ",
      cards: ["A", "B", "C", "D", "E", "F"]
    };
  }

  changeName = e => {
    this.setState({ cardName: e.target.value });
  };

  addCard = () => {
    this.setState({ cards: [...this.state.cards, this.state.cardName]})
  }

  render() {
    let {cards} = this.state;
    let {cardName} = this.state;
    return (
      <div>
        <input
          class="input"
          type="text"
          placeholder="Card name"
          value={cardName}
          onChange={e => this.changeName(e)}
        />
        <input className="button" type="submit" value="Add" onClick={e => this.addCard()}/>
        <div className="container">
          <div
            className="columns"
            style={{ display: "flex", flexFlow: "row wrap" }}
          >
            {cards.map(card => (
              <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                <Card name={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
