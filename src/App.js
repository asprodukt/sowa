import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import "./App.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Atesty from "./pages/Atesty";
import DaneTechniczne from "./pages/DaneTechniczne";
import Finansowanie from "./pages/Finansowanie";
import FunduszeEuropejskie from "./pages/FunduszeEuropejskie";
import KalkulatorOszczednosci from "./pages/KalkulatorOszczednosci";
import Galeria from "./pages/Galeria";
import ScrollToTop from "./utils/ScrollToTop";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/polityka-prywatnosci" component={PrivacyPolicy} />
          <Route exact path="/dane-techniczne" component={DaneTechniczne} />
          <Route exact path="/finansowanie" component={Finansowanie} />
          <Route exact path="/kontakt" component={Kontakt} />
          <Route
            exact
            path="/fundusze-europejskie"
            component={FunduszeEuropejskie}
          />
          <Route exact path="/atesty-i-certyfikaty" component={Atesty} />
          <Route
            exact
            path="/kalkulator-oszczednosci"
            component={KalkulatorOszczednosci}
          />
          <Route exact path="/galeria" component={Galeria} />
          <Route component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
