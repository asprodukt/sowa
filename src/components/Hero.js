import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Hero extends Component {
  render() {
    return (
      <div className="container-fluid Hero borders">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 heroLeftSide">
            <h4 className="mt-md-5">Mądre podejście do oszczędności</h4>
            <h1>Innowacyjna technologia Uzdatniania Wód Popłucznych</h1>
            <p className="my-md-4">
              System <span>SOWA</span> redukuje koszty związane z podgrzewaniem
              wody wodociągowej, jej zapotrzebowania i odprowadzaniem ścieków
              poprzez powtórne wykorzystanie wody po płukaniu z filtrów
              basenowych
            </p>
            <Link to="/kontakt">
              <button
                type="button"
                className="btn btn-primary shadow mb-md-5 animated fadeInUp"
              >
                Oszczędzaj już teraz {">"}
              </button>
            </Link>
          </div>
          <div className="col-md-6 px-0 heroRightImage" title=""></div>
        </div>
      </div>
    );
  }
}
