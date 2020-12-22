import React, { Component } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Forwarder from "../components/Forwarder";

import ForwarderImage1 from "../images/Forwarder/forwarder1.jpg";
import ForwarderImage2 from "../images/Forwarder/forwarder2.jpg";

import Contact from "../components/Contact";
import SectionSeparator from "../components/SectionSeparator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>System Odzysku Wód Popłucznych</title>
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
        <div className="Home">
          <Hero />
          <Benefits />
          <Forwarder
            title="Dane techniczne"
            description="System SOWA projektowany jest indywidualne dla każdego obiektu. Elementy systemu dobierane są do danej technologii basenowej i dopasowane do cykli płukania filtrów basenowych."
            to="/dane-techniczne"
            src={ForwarderImage1}
            alt=""
          />
          <SectionSeparator />
          <Forwarder
            title="Finansowanie"
            description="Istnieje możliwość sfinansowania systemu SOWA. Stworzyliśmy cztery wygodne formy finansowania: CASH, LEASING, AS KREDYT,  AS ABONAMENT."
            to="/finansowanie"
            src={ForwarderImage2}
            switchColumns={true}
            alt=""
          />
        </div>
        <Contact />

        <Footer />
      </HelmetProvider>
    );
  }
}
