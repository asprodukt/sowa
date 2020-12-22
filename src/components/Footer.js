import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <footer className="container-fluid py-5 font-roboto">
        <div className="container">
          <span className="mr-3">© 2020 AS Produkt</span>
          <span>
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          </span>
        </div>
      </footer>
    );
  }
}
