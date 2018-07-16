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
      welcome: "Get the f*** out!"
    };
  }

  render() {
    let { welcome } = this.state;
    return (
      <div>
        <Nav />
        <Link class="button is-light" to="/">
          Home
        </Link>
        <Link class="button is-warning" to="/product">
          Product
        </Link>
        <Route exact={true} path="/" render={() => <Home text={welcome} />} />
        <Route exact={true} path="/product" render={() => <Product />} />
      </div>
    );
  }
}

export default App;
