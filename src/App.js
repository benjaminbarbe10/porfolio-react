import React, { Component } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
//import Routes from "./components/Routes";
//import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="PageLayout" />
        <Header />
        <div className="HomePage-title">
          <Title title="Benjamin Barbé" />
          <h2 className="HomePage-subTitle">Full stack Dev</h2>
        </div>
      </div>
    );
  }
}

export default App;
