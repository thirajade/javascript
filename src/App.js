import React, { Component } from "react";
import "./App.css";
import AppHeader from "./AppHeader";
import AppBody from "./AppBody";
import AppHome from "./AppHome";
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      childText: ""
    };
  }

  childCallback = (textFromChild) => {
    this.setState({childText: textFromChild});
  }

  onTextChange = e => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    const { inputText } = this.state;
    const { childText } = this.state;

    return (
      <div className="App">
        <AppHeader childCallback={this.childCallback}/>
        <input
          className="input"
          type="text"
          placeholder="Type App Text"
          value={inputText}
          onChange={this.onTextChange}
        />
        <Link class="button is-light" to="/">Home</Link>
        <Link class="button is-warning" to="/app">App</Link>
        <Route exact path="/" render={() => <AppHome />} />
        <Route exact path="/app" render={() => <AppBody inputText={inputText} childText={childText}/>} />
      </div>
    );
  }
}

export default App;
