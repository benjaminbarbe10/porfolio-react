import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import React from "react";
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
        <div className="HeaderLayout-logo">
          <span>BB</span>
        </div>
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
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/portfolio">Porfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
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
