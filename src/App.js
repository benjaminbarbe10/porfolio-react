import React, { Component } from "react";
import { Layout, Navigation, Drawer, Content } from "react-mdl";
import Header from "./components/Header";
import Routes from "./components/Routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout className="PageLayout" />
        <Header />
      </div>
    );
  }
}

export default App;
