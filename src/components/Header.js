import { push as Menu } from "react-burger-menu";
import React, { Component } from "react";
import "../assets/stylesheets/hamburgers.css";
export default class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  componentDidMount() {
    var hamburgers = document.querySelectorAll(".hamburger");
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener(
        "click",
        function() {
          this.classList.toggle("is-active");
        },
        false
      );
    });
  }

  render() {
    return (
      <div id="HeaderLayout outer-container">
        <Menu
          burgerButtonClassName={"hamburger hamburger--slider-r"}
          customBurgerIcon={
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          }
          disableOverlayClick
          disableCloseOnEsc
          customCrossIcon={false}
          width={"100%"}
          pageWrapId={"page-wrap"}
        >
          <div className="HeaderLayout-menuContent">
            <a id="home" className="menu-item MenuContent" href="/">
              Home
            </a>
            <a id="about" className="menu-item MenuContent" href="/about">
              AboutMe
            </a>
            <a id="contact" className="menu-item MenuContent" href="/contact">
              Portfolio
            </a>
            <a id="contact" className="menu-item MenuContent" href="/contact">
              Contact
            </a>
          </div>
        </Menu>
        <main id="page-wrap" />
      </div>
    );
  }
}
var forEach = function(t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};
