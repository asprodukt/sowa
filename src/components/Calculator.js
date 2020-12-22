import React, { Component } from "react";
import { nufCalculate, loadDefaultValues } from "../scripts/nufCalculate";

export default class Calculator extends Component {
  componentDidMount() {
    loadDefaultValues();
    nufCalculate();
  }
  render() {
    return (
      <div className="container-fluid py-5 bg-light Calculator">
        <div className="container">
          <h1 className="mb-5">Kalkulator oszczędności</h1>
          <form
            method="GET"
            onChange={() => nufCalculate()}
            name="kalkulator-oszczednosci"
          >
            <div className="form-row">
              <div className="col-lg-3">
                <label htmlFor="srednica-filtra">Średnica filtra</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Średnica Filtra"
                    aria-describedby="srednica-filtra"
                    id="srednica-filtra"
                    name="srednica-filtra"
                    min="1"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">mm</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <label htmlFor="ilosc-filtrow">Ilość filtrów</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Ilość filtrów"
                    aria-describedby="ilosc-filtrow"
                    id="ilosc-filtrow"
                    name="ilosc-filtrow"
                    min="1"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">szt</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <label htmlFor="temp-wody-basenowej">
                  Temp. wody basenowej
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Temp. wody basenowej"
                    aria-describedby="temp-wody-basenowej"
                    id="temp-wody-basenowej"
                    name="temp-wody-basenowej"
                    min="0"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <label htmlFor="temp-wody-wodociagowej">
                  Temp. wody wodociągowej
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Temp. wody wodociągowej"
                    aria-describedby="temp-wody-wodociagowej"
                    id="temp-wody-wodociagowej"
                    name="temp-wody-wodociagowej"
                    min="0"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">°C</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-3">
                <label htmlFor="czestotliwosc-plukania-filtrow">
                  Częstotliwość płukania filtrów
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Częstotliwość płukania filtrów"
                    aria-describedby="czestotliwosc-plukania-filtrow"
                    id="czestotliwosc-plukania-filtrow"
                    name="czestotliwosc-plukania-filtrow"
                    min="1"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">dni</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <label htmlFor="predkosc-plukania">Prędkość płukania</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Prędkość płukania"
                    aria-describedby="predkosc-plukania"
                    id="predkosc-plukania"
                    name="predkosc-plukania"
                    min="0"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">m/h</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <label htmlFor="predkosc-filtracji">Prędkość filtracji</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Prędkość płukania"
                    aria-describedby="predkosc-filtracji"
                    id="predkosc-filtracji"
                    name="predkosc-filtracji"
                    min="0"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">m/h</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <label htmlFor="czas-plukania">Czas płukania</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Czas płukania"
                    aria-describedby="czas-plukania"
                    id="czas-plukania"
                    name="czas-plukania"
                    min="0"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-3">
                <label htmlFor="czas-stabilizacji">Czas stabilizacji</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Czas stabilizacji"
                    aria-describedby="czas-stabilizacji"
                    id="czas-stabilizacji"
                    name="czas-stabilizacji"
                    min="0"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <h2 className="my-5">Zużycie</h2>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <label htmlFor="jednokrotne-zuzycie-wody">
                  Jednokrotne zużycie wody
                </label>
                <div className="input-group mb-3">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    aria-label="Jednokrotne zużycie wody"
                    aria-describedby="jednokrotne-zuzycie-wody"
                    id="jednokrotne-zuzycie-wody"
                    name="jednokrotne-zuzycie-wody"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      m<sup>3</sup>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="jednokrotne-zuzycie-energii-cieplnej">
                  Jednokrotne zużycie energii cieplnej
                </label>
                <div className="input-group mb-3">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    aria-label="Jednokrotne zużycie energii cieplnej"
                    aria-describedby="jednokrotne-zuzycie-energii-cieplnej"
                    id="jednokrotne-zuzycie-energii-cieplnej"
                    name="jednokrotne-zuzycie-energii-cieplnej"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">GJ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <label htmlFor="miesieczne-zuzycie-wody">
                  Miesięczne zużycie wody
                </label>
                <div className="input-group mb-3">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    aria-label="Miesięczne zużycie wody"
                    aria-describedby="miesieczne-zuzycie-wody"
                    id="miesieczne-zuzycie-wody"
                    name="miesieczne-zuzycie-wody"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      m<sup>3</sup>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="miesieczne-zuzycie-energii-cieplnej">
                  Miesięczne zużycie energii cieplnej
                </label>
                <div className="input-group mb-3">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    aria-label="Miesięczne zużycie energii cieplnej"
                    aria-describedby="miesieczne-zuzycie-energii-cieplnej"
                    id="miesieczne-zuzycie-energii-cieplnej"
                    name="miesieczne-zuzycie-energii-cieplnej"
                  />
                  <div className="input-group-append" />
                  <span className="input-group-text">GJ</span>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <label htmlFor="roczne-zuzycie-wody">Roczne zużycie wody</label>
                <div className="input-group mb-3">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    aria-label="Roczne zużycie wody"
                    aria-describedby="roczne-zuzycie-wody"
                    id="roczne-zuzycie-wody"
                    name="roczne-zuzycie-wody"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      m<sup>3</sup>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="roczne-zuzycie-energii-cieplnej">
                  Roczne zużycie energii cieplnej
                </label>
                <div className="input-group mb-3">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    aria-label="Roczne zużycie energii cieplnej"
                    aria-describedby="roczne-zuzycie-energii-cieplnej"
                    id="roczne-zuzycie-energii-cieplnej"
                    name="roczne-zuzycie-energii-cieplnej"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">GJ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <h2 className="my-5">Koszty</h2>
            </div>
            <div className="form-row">
              <div className="col-md-4">
                <label htmlFor="koszt-wody-netto">Koszt wody netto</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    aria-label="Koszt wody netto"
                    aria-describedby="koszt-wody-netto"
                    id="koszt-wody-netto"
                    name="koszt-wody-netto"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      PLN/m<sup>3</sup>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="koszt-zrzutow-sciekow-netto">
                  Koszt zrzutów scieków netto
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    aria-label="Koszt zrzutów scieków netto"
                    aria-describedby="koszt-zrzutow-sciekow-netto"
                    id="koszt-zrzutow-sciekow-netto"
                    name="koszt-zrzutow-sciekow-netto"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      PLN/m<sup>3</sup>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="koszt-ogrzewania-netto">
                  Koszt ogrzewania netto
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    aria-label="Koszt ogrzewania netto"
                    aria-describedby="koszt-ogrzewania-netto"
                    id="koszt-ogrzewania-netto"
                    name="koszt-ogrzewania-netto"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">PLN/GJ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <h3 className="my-5">Suma rocznych oszczędności</h3>
            </div>

            <div className="form-row">
              <div className="col-md-6">
                <label htmlFor="kwota-roczna-z-odzysku-wody">
                  Kwota roczna z odzysku wody
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    aria-label="Koszt wody netto"
                    aria-describedby="kwota-roczna-z-odzysku-wody"
                    id="kwota-roczna-z-odzysku-wody"
                    name="kwota-roczna-z-odzysku-wody"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">PLN</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="kwota-roczna-z-odzysku-energii-cieplnej">
                  Kwota roczna z odzysku energii cieplnej
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    aria-label="Kwota roczna z odzysku energii cieplnej"
                    aria-describedby="kwota-roczna-z-odzysku-energii-cieplnej"
                    id="kwota-roczna-z-odzysku-energii-cieplnej"
                    name="kwota-roczna-z-odzysku-energii-cieplnej"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">PLN</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-12">
                <label htmlFor="suma-rocznych-oszczednosci">
                  Suma rocznych oszczędności
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    aria-label="Suma rocznych oszczędności"
                    aria-describedby="suma-rocznych-oszczednosci"
                    id="suma-rocznych-oszczednosci"
                    name="suma-rocznych-oszczednosci"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">PLN</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
