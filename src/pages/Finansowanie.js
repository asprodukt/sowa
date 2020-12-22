import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FinansowanieItem from "../components/FinansowanieItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

export default class Finansowanie extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Finansowanie</title>
          <meta
            name="description"
            content="Finansowanie Systemu Odzysku Wód Popłucznych"
          />
          <meta
            name="keywords"
            content="finansowanie, system odzysku, uzdatnienie wody"
          />
          <meta name="author" content="AS Produkt" />
        </Helmet>
        <Navbar />
        <div className="Finansowanie">
          <FinansowanieItem
            title="Cash"
            description="Jest to klasyczna forma finansowania systemu SOWA. Mogą Państwo
          wpłacić całą kwotę lub tylko zaliczkę w wysokości 50 % wartości umowy.
          Kolejne 30% w dniu rozpoczęcia montażu, a pozostałe 20% ceny w dniu
          odbioru. Wybierając opcję finansowania CASH gwarantujemy darmowy
          serwis systemu przez okres 2 lat."
          />
          <FinansowanieItem
            title="AS Abonament"
            description="Jest to opcja finansowania systemu S-O-W-A w sposób abonamentu
          miesięcznego równego wysokości generowanych oszczędności. Do ceny
          systemu doliczane są koszty uruchomienia finansowania, dostarczenia i
          montażu technologii, natomiast nie jest wymagana wpłata początkowa.
          Okres abonamentu dopasowywany jest indywidualnie do obiektu. System po
          okresie spłaty jest własnością zamawiającego. AS ABONAMENT dostępny
          jest również jako usługa."
          />
          <FinansowanieItem
            title="Leasing"
            description="Istnieje możliwość finansowania systemu SOWA pożyczką leasingową.
          Warunki dobierane są indywidualnie w zależności od Państwa historii
          kredytowej. Kwota jest rozłożona na wygodne i przystępne raty przy
          niewysokiej wpłacie początkowej."
          />
          <FinansowanieItem
            title="AS Kredyt"
            description="Jest to forma finansowania technologii SOWA w której nasza firma
          wstawia system do obiektu po opłaceniu kosztów operacyjnych a
          pozostałą część płacicie Państwo w równych ratach. Wysokość raty jest
          równa oszczędnościom jakie powstają przy zastosowaniu systemu."
          />
        </div>
        <Contact />
        <Footer />
      </HelmetProvider>
    );
  }
}
