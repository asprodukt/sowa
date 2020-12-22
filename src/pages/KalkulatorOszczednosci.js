import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Calculator from "../components/Calculator";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default class KalkulatorOszczednosci extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Kalkulator Oszczędności | SOWA</title>
          <meta
            name="description"
            content="Kalkulator Oszczędności Systemu Wód Odzysku Popłucznych"
          />
          <meta
            name="keywords"
            content="kalkulator oszczędności, kalkulator, wody popłuczne, uzdatnianie wody"
          />
          <meta name="author" content="AS Produkt" />
        </Helmet>
        <Navbar />
        <Calculator />
        <Footer />
      </HelmetProvider>
    );
  }
}
