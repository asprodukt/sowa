import React, { Component } from "react";

import Cost from "../images/Benefits/cost.svg";
import CalculatorMoney from "../images/Benefits/calculator-money.svg";
import RecycleSignArrow from "../images/Benefits/recycle-sign-arrow.svg";
import TemperatureHeat from "../images/Benefits/temperature-heat.svg";

import PiggySaving from "../images/Benefits/piggy-saving.svg";
import Certificate from "../images/Benefits/certificate.svg";
import ProjectManagementTimeline from "../images/Benefits/project-management-timeline.svg";
import CalendarCheckmarkLine from "../images/Benefits/calendar-checkmark-line.svg";
import { Link } from "react-router-dom";

export default class Benefits extends Component {
  render() {
    return (
      <div className="container-fluid bg-light py-5 borders">
        <div className="Benefits container bg-light">
          <h1>
            Zalety Systemu <span className="text-primary">SOWA</span>
          </h1>
          <div className="row mt-5 BenefitsIcons">
            <div className="col-md-3 col-6 BenefitsItem">
              <img src={Cost} alt=""></img>
              <p>Zwrot inwestycji od 10 do 36 miesięcy</p>
            </div>
            <div className="col-md-3 col-6 BenefitsItem">
              <img src={RecycleSignArrow} alt=""></img>
              <p>96% odzysku wody po płukaniu filtrów</p>
            </div>
            <div className="col-md-3 col-6 BenefitsItem">
              <img src={CalculatorMoney} alt=""></img>
              <p>Znaczne obniżenie kosztów eksploatacji obiektu</p>
            </div>
            <div className="col-md-3 col-6 BenefitsItem">
              <img src={TemperatureHeat} alt=""></img>
              <p>96% zachowanej temperatury wody basenowej</p>
            </div>
          </div>

          <div className="row mt-5 BenefitsIcons">
            <div className="col-md-3 col-6 BenefitsItem">
              <img src={CalendarCheckmarkLine} alt=""></img>
              <p>Realizacja 2 miesiące od momentu podpisania umowy</p>
            </div>
            <div className="col-md-3 col-6 BenefitsItem">
              <img src={ProjectManagementTimeline} alt=""></img>
              <p>Wieloletnia ciągła i skuteczna praca systemu</p>
            </div>
            <div className="col-md-3 col-6 BenefitsItem">
              <img src={PiggySaving} alt=""></img>
              <p>Niska cena systemu</p>
            </div>
            <div className="col-md-3 col-6 BenefitsItem">
              <img src={Certificate} alt=""></img>
              <p>Zatwierdzona i przebadana technologia</p>
            </div>
          </div>
          <Link to="/atesty-i-certyfikaty">
            <button
              type="button"
              className="btn btn-primary shadow my-md-5 animated fadeInUp"
            >
              Atesty i certyfikaty {">"}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
