import React, { Component } from "react";
import axios from "axios";

const API_PATH = "https://sowa.expert/api/contactHandle.php";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      temat: "",
      wiadomosc: "",
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state,
    });

    this.setState({
      name: "",
      email: "",
      temat: "",
      wiadomosc: "",
    });
  }

  render() {
    return (
      <div className="Contact container-fluid borders" id="Kontakt">
        <div className="row">
          <div className="ContactLeft col-lg-6">
            <div className="container ml-md-5">
              <div className="row ml-md-5">
                <div className="col-12">
                  <h1>Adres Biura</h1>
                  <p>
                    Zajezierze 5C
                    <br />
                    88-140 Gniewkowo
                    <br />
                    <a href="mailto: kontakt@sowa.expert">
                      kontakt@sowa.expert
                    </a>
                  </p>
                </div>
                <div className="col-12">
                  <h1>Dane</h1>
                  <p>
                    NIP: 6681111323
                    <br />
                    REGON: 310343042
                  </p>
                </div>
                <div className="col-12">
                  <h1>Kontakt</h1>
                  <div className="mt-3" id="brandManager">
                    <h3>Wojciech Poćwiardowski</h3>
                    <a href="mailto: w.pocwiardowski@sowa.expert">
                      w.pocwiardowski@sowa.expert
                    </a>
                    <br />
                    <a href="tel: +48 690 009 235">+48 690 009 235</a>
                  </div>
                  <div className="mt-3" id="salesManager">
                    <h3>Przemysław Sikorski</h3>
                    <a href="mailto: p.sikorski@sowa.expert">
                      p.sikorski@sowa.expert
                    </a>
                    <br />
                    <a href="tel: +48 533 339 233">+48 533 339 233</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ContactRight col-lg-6">
            <form action="#">
              <h1 className="mb-5">Skontaktuj się z nami!</h1>
              <div className="form-group">
                <label htmlFor="name">Imię i Nazwisko</label>
                <input
                  required
                  type="name"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Adres email</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="email"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="temat">Temat</label>
                <input
                  required
                  type="temat"
                  className="form-control"
                  id="email"
                  aria-describedby="temat"
                  name="temat"
                  value={this.state.temat}
                  onChange={(e) => this.setState({ temat: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="wiadomosc">Wiadomość</label>
                <textarea
                  required
                  className="form-control"
                  id="wiadomosc"
                  rows="3"
                  name="wiadomosc"
                  value={this.state.wiadomosc}
                  onChange={(e) => this.setState({ wiadomosc: e.target.value })}
                ></textarea>
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
          </div>
        </div>
      </div>
    );
  }
}
