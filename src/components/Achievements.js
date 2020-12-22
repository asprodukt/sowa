import React, { Component } from "react";

import Atest from "../images/Achievements/atest.png";
import Unia from "../images/Achievements/european_union.svg";
import Lipik from "../images/Achievements/LIPIK.svg";
import Upp from "../images/Achievements/upp.png";

export default class Achievements extends Component {
  render() {
    return (
      <div className="container-fluid bg-light">
        <div className="container Achievements py-5">
          <div className="row">
            <img src={Atest} alt=""></img>
            <img src={Unia} alt=""></img>
            <img src={Lipik} alt=""></img>
            <img src={Upp} alt=""></img>
            {/* <div className="col-md-3 col-6">
              <img src={Atest} alt=""></img>
            </div>
            <div className="col-md-3 col-6">
              <img src={Unia} alt=""></img>
            </div>
            <div className="col-md-3 col-6">
              <img src={Lipik} alt=""></img>
            </div>
            <div className="col-md-3 col-6">
              <img src={Upp} alt=""></img>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
