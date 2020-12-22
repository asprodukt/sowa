import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import FunduszeImage from "../images/FunduszeEuropejskie/unia.webp";
export default class FunduszeEuropejskie extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Fundusze Europejskie</title>
          <meta
            name="description"
            content="Fundusze Europejskie Systemu Odzyskiwania Wód Popłucznych"
          />
          <meta
            name="keywords"
            content="fundusze, unia europejska, fundusze europejskie"
          />
          <meta name="author" content="AS Produkt" />
        </Helmet>

        <Navbar />
        <div className="container">
          <img
            src={FunduszeImage}
            alt="Fundusze Europejskie"
            className="my-5"
          />
          <div className="row">
            <div className="col-12">
              <b>Tytuł projektu:</b>
              <p>
                Utworzenie Centrum Badawczo-Rozwojowego w zakresie technologii
                oczyszczania wód popłucznych
              </p>
              <p>
                <b>Beneficjent:</b> AS PRODUKT Sebastian Pasturek
              </p>
              <p>
                <b>Cel projektu:</b> Utworzenie budynku CBR na potrzeby
                opracowania i wprowadzenia na rynek innowacyjnego produktu:
                układu uzdatniania wód popłucznych.
              </p>
              <p>
                <b>Wartość operacji:</b> 5 734 260,00 PLN
              </p>
              <p>
                <b>Wydatki kwalifikowane:</b> 4 662 000,00 PLN
              </p>
              <p>
                <b>Wartość wkładu funduszy europejskich:</b> 2 564 100,00 PLN
              </p>
              <p>
                <b>Planowane efekty:</b> Dzięki nabyciu środków trwałych i
                wdrożeniu wyników realizacji projektu do działalności
                gospodarczej Wnioskodawcy nastąpi dywersyfikacja - rozszerzenie
                oferty o produkt dotychczas niewytwarzany w zakładzie:
                innowacyjny układ uzdatniania wód popłucznych, do wykorzystania
                w szczególności w instalacjach obiektów basenowych.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <b>Tytuł projektu:</b>
              <p>
                Rozwój Centrum - Badawczo - Rozwojowego technologii oczyszczania
                wód popłucznych o bezchlorowy system uzdatniania wody basenowej.
              </p>
              <p>
                <b>Beneficjent:</b> AS PRODUKT Sebastian Pasturek
              </p>
              <p>
                <b>Cel projektu:</b> Cel projektu: Wprowadzenie na rynek
                innowacyjnej technologii bezchlorowego uzdatniania wody
                basenowej.
              </p>
              <p>
                <b>Planowane efekty:</b> Opracowanie układu uzdatniania wód
                basenowych będącego alternatywą dla powszechnie stosowanego
                chloranu (I)
              </p>
              <p>
                <b>Wartość ogółem:</b> 2 533 800,00 PLN
              </p>
              <p>
                <b>Wartość wydatków kwalifikowanych:</b> 2 060 000,00 PLN
              </p>
              <p>
                <b>Kwota dofinansowania:</b> 1 133 000,00 PLN
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </HelmetProvider>
    );
  }
}
