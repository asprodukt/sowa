import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import AtestItem from "../components/AtestItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Atest from "../images/Achievements/atest.png";
import Unia from "../images/Achievements/european_union.svg";
import Lipik from "../images/Achievements/LIPIK.svg";
import Upp from "../images/Achievements/upp.png";
import AtestHigieniczny from "../images/Atesty/atest-higieniczny.png";

export default class Atesty extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Atesty i Certyfikaty</title>
          <meta
            name="description"
            content="Innowacyjny układ uzdatniania wód popłucznych do wykorzystania w instalacjach obiektów basenowych. Jest to ekonomiczny i ekologiczny system wykorzystujący tuby filtracyjne."
          />
          <meta
            name="keywords"
            content="uzdatnianie wody, tuby filtracyjne, nanofiltracja, ekologia"
          />
          <meta name="author" content="AS Produkt" />
        </Helmet>

        <Navbar />

        <div className="Atesty">
          <AtestItem
            image={Unia}
            alt="fundusze-europejskie"
            right={
              <div>
                <h1>Fundusze Europejskie</h1>
                <p>
                  System SOWA został zrealizowany w ramach projektu: Utworzenie
                  Centrum Badawczo-Rozwojowego w zakresie technologii
                  oczyszczania wód popłucznych.
                </p>
                <Link to="/fundusze-europejskie">
                  <button
                    type="button"
                    className="btn btn-primary shadow animated fadeInUp"
                  >
                    Zobacz Fundusze {">"}
                  </button>
                </Link>
              </div>
            }
          />

          <AtestItem
            image={Lipik}
            alt="Liderzy Innowacji Pomorza i Kujaw 2020"
            right={
              <div>
                <h1>Liderzy Innowacji</h1>
                <p>
                  Uroczysta Gala Finałowa konkursu Liderzy Innowacji Pomorza i
                  Kujaw 2020 została zorganizowana 21 października 2020 r.
                  podczas wydarzenia „Gospodarka 4.0 w obliczu kryzysu.
                  Regionalne Forum Innowacji. Nasza firma AS Produkt Sebastian
                  Pasturek uzyskała tytuł Lidera Innowacji Pomorza i Kujaw 2020,
                  w kategorii średnie przedsiębiorstwo, za rozwiązanie pod
                  nazwą: „Innowacyjna technologia do oczyszczania i odzysku wód
                  popłucznych po płukaniu filtrów basenowych z wykorzystaniem
                  tub filtracyjnych”.
                </p>
              </div>
            }
          />

          <AtestItem
            image={Atest}
            alt="Produkt z Atestem"
            right={
              <div>
                <h1>Produkt z Atestem</h1>
                <p>
                  Tuby filtracyjne przeznaczone do ultrafiltracji,
                  mikrofiltracji i nanofiltracji
                </p>
                <a href={AtestHigieniczny}>
                  <button
                    type="button"
                    className="btn btn-primary shadow animated fadeInUp"
                  >
                    Zobacz Certyfikat {">"}
                  </button>
                </a>
              </div>
            }
          />

          <AtestItem
            image={Upp}
            alt="Urząd Patentowy RP"
            right={
              <div>
                <h1>Urząd Patentowy RP</h1>
                <p>
                  Technologia SOWA – System Odzysku Wód AS PRODUKT została
                  zgłoszona do urzędu patentowego i został jej nadany numer
                  P.435356.
                </p>
              </div>
            }
          />
        </div>
        <Footer />
      </HelmetProvider>
    );
  }
}
