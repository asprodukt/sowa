import React, { Component } from "react";
import { Obieg } from "../scripts/obieg";
import axios from "axios";

const API_PATH = "https://sowa.expert/api/briefHandle.php";

export default class BriefSowa extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selectedObieg: 0,
      obiegi: [Obieg.default("Główny obieg basenowy")],
    };
  }

  removeObieg(index, cb) {
    this.selectObieg(0);
    let obiegi = [...this.state.obiegi];
    obiegi.splice(index, 1);
    this.setState({ obiegi: obiegi }, cb);
  }

  renameObieg(index, nowaNazwa, cb) {
    let obiegi = [...this.state.obiegi];
    let obieg = obiegi[index];
    obieg.nazwa = nowaNazwa;
    obiegi[index] = obieg;
    this.setState({ obiegi: obiegi }, cb);
  }

  addObieg(nazwaObiegu, cb) {
    this.setState(
      (state, props) => ({
        obiegi: [...state.obiegi, Obieg.default(nazwaObiegu)],
      }),
      cb
    );
  }

  selectObieg(index, cb) {
    document.getElementById("obiegi").selectedIndex = index;

    this.setState(
      {
        selectedObieg: index,
      },
      cb
    );
  }

  handleChange(e, property) {
    let obiegi = [...this.state.obiegi];
    let obieg = obiegi[this.state.selectedObieg];
    obieg[property] = +e.target.value;
    obiegi[this.state.selectedObieg] = obieg;
    this.setState({ obiegi: obiegi });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    var obiegi = [...this.state.obiegi];
    var noweObiegi = [];

    for (var i = 0; i < obiegi.length; i++) {
      var obieg = { ...obiegi[i] };
      obieg["jednokrotneZuzycieWody"] = obiegi[
        i
      ].jednokrotneZuzycieWody.toLocaleString("pl-PL", {
        maximumFractionDigits: 3,
      });
      obieg["miesieczneZuzycieWody"] = obiegi[
        i
      ].miesieczneZuzycieWody.toLocaleString("pl-PL", {
        maximumFractionDigits: 3,
      });
      obieg["roczneZuzycieWody"] = obiegi[
        i
      ].roczneZuzycieWody.toLocaleString("pl-PL", { maximumFractionDigits: 3 });
      obieg["jednokrotneZuzycieEnergiiCieplnej"] = obiegi[
        i
      ].jednokrotneZuzycieEnergiiCieplnej.toLocaleString("pl-PL", {
        maximumFractionDigits: 3,
      });
      obieg["miesieczneZuzycieEnergiiCieplnej"] = obiegi[
        i
      ].miesieczneZuzycieEnergiiCieplnej.toLocaleString("pl-PL", {
        maximumFractionDigits: 3,
      });
      obieg["roczneZuzycieEnergiiCieplnej"] = obiegi[
        i
      ].roczneZuzycieEnergiiCieplnej.toLocaleString("pl-PL", {
        maximumFractionDigits: 3,
      });
      obieg["kwotaRocznaZOdzyskuWody"] = obiegi[
        i
      ].kwotaRocznaZOdzyskuWody.toLocaleString("pl-PL", {
        maximumFractionDigits: 3,
      });
      obieg["kwotaRocznaZOdzyskuEnergiiCieplnej"] = obiegi[
        i
      ].kwotaRocznaZOdzyskuEnergiiCieplnej.toLocaleString("pl-PL", {
        maximumFractionDigits: 3,
      });
      obieg["sumaRocznychOszczednosci"] = obiegi[
        i
      ].sumaRocznychOszczednosci.toLocaleString("pl-PL", {
        maximumFractionDigits: 3,
      });

      noweObiegi.push(obieg);
    }

    var briefSendForm = document.getElementById("briefSendForm");

    var payload = {
      email: document.getElementById("briefSendFormEmail").value,
      name: document.getElementById("briefSendFormName").value,
      obiegi: noweObiegi,
    };

    axios({
      method: "POST",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: payload,
    })
      .then(function (response) {
        if (response.status === 200) {
          briefSendForm.classList.add("was-validated");
          window.$("#briefWyslanyModal").modal("show");
        }
      })
      .catch(function (error) {});
  }

  suma(arr, param) {
    var suma = 0;
    for(var i=0; i<arr.length; i++) {
      suma += arr[i][param];
    }
    return suma;
  }

  render() {
    return (
      <div className="container-fluid py-5 bg-light Calculator">
        <div className="container">
          <h1 className="mb-5">Brief</h1>
          <form method="GET" name="kalkulator-oszczednosci">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">
                <span style={{ marginRight: 10 + "px" }}>Obieg</span>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-toggle="modal"
                  data-target="#dodajObiegModal"
                  style={{ marginRight: 10 + "px" }}
                >
                  Dodaj
                </button>
                <button
                  type="button"
                  className="btn btn-warning btn-sm"
                  data-toggle="modal"
                  onClick={() => {
                    document.getElementById(
                      "nowaNazwaObiegu"
                    ).value = document.getElementById("obiegi").value;
                  }}
                  data-target="#edytujObiegModal"
                  style={{ marginRight: 10 + "px", color: "white" }}
                >
                  Zmień nazwę
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  style={{ marginRight: 10 + "px" }}
                  onClick={() => {
                    var ob = document.getElementById("obiegi");
                    if (ob.options.length === 1) return;
                    const index = ob.selectedIndex;
                    this.removeObieg(index);
                  }}
                >
                  Usuń
                </button>
              </label>
              <select
                className="form-control"
                id="obiegi"
                onChange={(e) => {
                  var selectedIndex = document.getElementById("obiegi")
                    .selectedIndex;
                  this.selectObieg(selectedIndex);
                }}
              >
                {this.state.obiegi.map((obieg, index) => (
                  <option key={index}>{obieg.nazwa}</option>
                ))}
              </select>
            </div>
            <div
              className="modal fade"
              id="dodajObiegModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="dodajObiegModalTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="dodajObiegModalLongTitle">
                      Dodaj obieg
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <input
                      className="form-control"
                      type="text"
                      id="obiegDoDodania"
                      placeholder="Nazwa obiegu"
                    ></input>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Zamknij
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onKeyUp={k => {
                        console.log(k);
                      }}
                      onClick={() => {
                        var nazwaObiegu = document.getElementById(
                          "obiegDoDodania"
                        ).value;

                        this.addObieg(nazwaObiegu, () => {
                          this.selectObieg(this.state.obiegi.length - 1);
                        });

                        document.getElementById("obiegDoDodania").value = "";
                      }}
                    >
                      Dodaj
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="edytujObiegModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="edytujObiegModalTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="edytujObiegModalLongTitle">
                      Zmień nazwę obiegu
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <input
                      className="form-control"
                      type="text"
                      id="nowaNazwaObiegu"
                      placeholder="Nazwa obiegu"
                    ></input>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Zamknij
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={() => {
                        var nazwaObiegu = document.getElementById(
                          "nowaNazwaObiegu"
                        ).value;

                        var selectedIndex = this.state.selectedObieg;
                        this.renameObieg(selectedIndex, nazwaObiegu);

                        document.getElementById("nowaNazwaObiegu").value = "";
                      }}
                    >
                      Zmień nazwę
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
                    value={
                      this.state.obiegi[this.state.selectedObieg].srednicaFiltra
                    }
                    onChange={(e) => this.handleChange(e, "srednicaFiltra")}
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
                    value={
                      this.state.obiegi[this.state.selectedObieg].iloscFiltrow
                    }
                    onChange={(e) => this.handleChange(e, "iloscFiltrow")}
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
                    value={
                      this.state.obiegi[this.state.selectedObieg]
                        .tempWodyBasenowej
                    }
                    onChange={(e) => this.handleChange(e, "tempWodyBasenowej")}
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
                    value={
                      this.state.obiegi[this.state.selectedObieg]
                        .tempWodyWodociagowej
                    }
                    onChange={(e) =>
                      this.handleChange(e, "tempWodyWodociagowej")
                    }
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
                    value={
                      this.state.obiegi[this.state.selectedObieg]
                        .czestotliwoscPlukaniaFiltrow
                    }
                    onChange={(e) =>
                      this.handleChange(e, "czestotliwoscPlukaniaFiltrow")
                    }
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
                    value={
                      this.state.obiegi[this.state.selectedObieg]
                        .predkoscPlukania
                    }
                    onChange={(e) => this.handleChange(e, "predkoscPlukania")}
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
                    value={
                      this.state.obiegi[this.state.selectedObieg]
                        .predkoscFiltracji
                    }
                    onChange={(e) => this.handleChange(e, "predkoscFiltracji")}
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
                    value={
                      this.state.obiegi[this.state.selectedObieg].czasPlukania
                    }
                    onChange={(e) => this.handleChange(e, "czasPlukania")}
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
                    value={
                      this.state.obiegi[this.state.selectedObieg]
                        .czasStabilizacji
                    }
                    onChange={(e) => this.handleChange(e, "czasStabilizacji")}
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
                    value={this.state.obiegi[
                      this.state.selectedObieg
                    ].jednokrotneZuzycieWody.toLocaleString("pl-PL", {
                      maximumFractionDigits: 3,
                    })}
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
                    value={this.state.obiegi[
                      this.state.selectedObieg
                    ].jednokrotneZuzycieEnergiiCieplnej.toLocaleString(
                      "pl-PL",
                      { maximumFractionDigits: 3 }
                    )}
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
                    value={this.state.obiegi[
                      this.state.selectedObieg
                    ].miesieczneZuzycieWody.toLocaleString("pl-PL", {
                      maximumFractionDigits: 3,
                    })}
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
                    value={this.state.obiegi[
                      this.state.selectedObieg
                    ].miesieczneZuzycieEnergiiCieplnej.toLocaleString("pl-PL", {
                      maximumFractionDigits: 3,
                    })}
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
                    value={this.state.obiegi[
                      this.state.selectedObieg
                    ].roczneZuzycieWody.toLocaleString("pl-PL", {
                      maximumFractionDigits: 3,
                    })}
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
                    value={this.state.obiegi[
                      this.state.selectedObieg
                    ].roczneZuzycieEnergiiCieplnej.toLocaleString("pl-PL", {
                      maximumFractionDigits: 3,
                    })}
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
                    value={
                      this.state.obiegi[this.state.selectedObieg].kosztWodyNetto
                    }
                    onChange={(e) => this.handleChange(e, "kosztWodyNetto")}
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
                    value={
                      this.state.obiegi[this.state.selectedObieg]
                        .kosztZrzutowSciekowNetto
                    }
                    onChange={(e) =>
                      this.handleChange(e, "kosztZrzutowSciekowNetto")
                    }
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
                    value={
                      this.state.obiegi[this.state.selectedObieg]
                        .kosztOgrzewaniaNetto
                    }
                    onChange={(e) =>
                      this.handleChange(e, "kosztOgrzewaniaNetto")
                    }
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
                    aria-label="Kwota roczna z odzysku wody"
                    aria-describedby="kwota-roczna-z-odzysku-wody"
                    id="kwota-roczna-z-odzysku-wody"
                    name="kwota-roczna-z-odzysku-wody"
                    value={this.state.obiegi[
                      this.state.selectedObieg
                    ].kwotaRocznaZOdzyskuWody.toLocaleString("pl-PL", {
                      maximumFractionDigits: 2,
                    })}
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
                    value={this.state.obiegi[
                      this.state.selectedObieg
                    ].kwotaRocznaZOdzyskuEnergiiCieplnej.toLocaleString(
                      "pl-PL",
                      { maximumFractionDigits: 2 }
                    )}
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
                    value={this.state.obiegi[
                      this.state.selectedObieg
                    ].sumaRocznychOszczednosci.toLocaleString("pl-PL", {
                      maximumFractionDigits: 2,
                    })}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">PLN</span>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <h1 className="my-5">Podsumowanie obiegów</h1>
          <div className="form-row">
            <div className="col-md-6">
              <label htmlFor="laczna-kwota-roczna-z-odzysku-wody">
                Łączna kwota roczna z odzysku wody
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  disabled
                  className="form-control"
                  aria-label="Łączna kwota roczna z odzysku wody"
                  aria-describedby="laczna-kwota-roczna-z-odzysku-wody"
                  id="laczna-kwota-roczna-z-odzysku-wody"
                  name="laczna-kwota-roczna-z-odzysku-wody"
                  value={this.suma(this.state.obiegi, "kwotaRocznaZOdzyskuWody").toLocaleString("pl-PL", {maximumFractionDigits: 2})}
                />
                <div className="input-group-append">
                  <span className="input-group-text">PLN</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="laczna-kwota-roczna-z-odzysku-energii-cieplnej">
                Łączna kwota roczna z odzysku energii cieplnej
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  disabled
                  className="form-control"
                  aria-label="Łączna kwota roczna z odzysku energii cieplnej"
                  aria-describedby="laczna-kwota-roczna-z-odzysku-energii-cieplnej"
                  id="laczna-kwota-roczna-z-odzysku-energii-cieplnej"
                  name="laczna-kwota-roczna-z-odzysku-energii-cieplnej"
                  value={this.suma(this.state.obiegi, "kwotaRocznaZOdzyskuEnergiiCieplnej").toLocaleString("pl-PL", {maximumFractionDigits: 2})}
                />
                <div className="input-group-append">
                  <span className="input-group-text">PLN</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12">
              <label htmlFor="laczna-suma-rocznych-oszczednosci">
                Łączna suma rocznych oszczędności
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  disabled
                  className="form-control"
                  aria-label="Łączna suma rocznych oszczędności"
                  aria-describedby="laczna-suma-rocznych-oszczednosci"
                  id="laczna-suma-rocznych-oszczednosci"
                  name="laczna-suma-rocznych-oszczednosci"
                  value={this.suma(this.state.obiegi, "sumaRocznychOszczednosci").toLocaleString("pl-PL", {maximumFractionDigits: 2})}
                />
                <div className="input-group-append">
                  <span className="input-group-text">PLN</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form action="#" id="briefSendForm" name="briefSendForm">
              <h1 className="my-5">Wyślij formularz</h1>
              <div className="form-group">
                <label htmlFor="name">Imię i Nazwisko</label>
                <input
                  required
                  type="name"
                  className="form-control"
                  id="briefSendFormName"
                  aria-describedby="name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Adres email</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="briefSendFormEmail"
                  aria-describedby="email"
                  name="email"
                />
              </div>
              <button
                type="submit"
                name="submit"
                className="btn btn-primary w-100"
                onClick={(e) => this.handleFormSubmit(e)}
              >
                Wyślij
              </button>
            </form>

            <div
              className="modal fade"
              id="briefWyslanyModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="briefWyslanyModalTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="briefWyslanyModalTitle">
                      Wiadomość wysłana!
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Dziękujemy za wiadomość.</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Zamknij
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
