import React, { Component } from "react";
import Header from "./components/Header";
import Routes from "./components/Routes";
//import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="PageLayout" />
        <Header />

        <Routes />
      </div>
    );
  }
}

export default App;
