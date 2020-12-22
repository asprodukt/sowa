import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";

export default class Galeria extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Galeria</title>
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
        <Gallery />
        <Footer />
      </HelmetProvider>
    );
  }
}
