import React, { Component } from "react";
import "./App.css";

class AppBody extends Component {
  constructor() {
    super();
  }

  render() {
    var { inputText, childText } = this.props;
    return (
      <div>
        <h2>{inputText}</h2>
        <h2>{childText}</h2>
        {/* <h2> Navbar Text Here </h2> */}
      </div>
    );
  }
}

export default AppBody;
