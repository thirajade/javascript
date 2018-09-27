import React, { Component } from "react";
import "./App.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      childText: ""
    };
  }

  onChildTextChange = e => {
    this.setState({ childText: e.target.value });
    this.props.childCallback(e.target.value);
  };

  render() {
    var { childText } = this.state;
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <div className="navbar-item">
              <input
                className="input"
                type="text"
                placeholder="Type Navbar Text"
                value={childText}
                onChange={this.onChildTextChange}
              />
            </div>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
