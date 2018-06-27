import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div className="TitleLayout">
        <span className="TitleLayout-title">{this.props.title}</span>
      </div>
    );
  }
}
