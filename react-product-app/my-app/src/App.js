import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Product from "./Product";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jade"
    };
  }

  changeName = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    let { name } = this.state;
    return (
      <div>
        <Nav />
        <input
          class="input"
          type="text"
          placeholder="Text input"
          value={name}
          onChange={e => this.changeName(e)}
        />
        <Link class="button is-light" to="/">
          Home
        </Link>
        <Link class="button is-dark" to="/product">
          Product
        </Link>
        <Route exact={true} path="/" render={() => <Home text={name} />} />
        <Route exact={true} path="/product" render={() => <Product />} />
      </div>
    );
  }
}

export default App;
