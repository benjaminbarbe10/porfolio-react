import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import Routes from "./components/Routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Layout>
          <Header title="PORFOLIO BEN" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/skills">skills</Link>
            </Navigation>
          </Header>
          <Drawer title="PORFOLIO BEN">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/skills">skills</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Routes />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
