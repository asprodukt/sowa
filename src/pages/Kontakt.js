import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default class Kontakt extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Kontakt</title>
          <meta name="description" content="Formularz kontaktowy" />
          <meta name="keywords" content="formularz kontaktowy, asprodukt" />
          <meta name="author" content="AS Produkt" />
        </Helmet>
        <Navbar />
        <Contact />
        <Footer />
      </HelmetProvider>
    );
  }
}
