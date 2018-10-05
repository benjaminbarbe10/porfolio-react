import React, { Component } from "react";
import Title from "./Title";

export default class Home extends Component {
  render() {
    return (
      <div className="HomePage-title">
        <Title title="Benjamin Barbé" />
        <h2 className="HomePage-subTitle">Full stack Dev</h2>
      </div>
    );
  }
}
