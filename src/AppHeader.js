import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";

class AppHeader extends Component {
  render() {
    var { childCallback } = this.props;
    return (
      <div>
        <Nav childCallback={childCallback} />
      </div>
    );
  }
}

export default AppHeader;
