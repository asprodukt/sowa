import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import SchematNanofiltracji from "../images/DaneTechniczne/schemat-nanofiltracji.jpg";
import SpektrumNanofiltracji from "../images/DaneTechniczne/spektrum-nanofiltracji.jpg";

export default class DaneTechniczne extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Dane Techniczne</title>
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
        <div className="DaneTechniczne">
          <div className="container-fluid bg-light py-5">
            <div className="container">
              <h1 className="text-primary">Dane techniczne</h1>
              <hr />
              <p>
                SOWA to innowacyjny układ uzdatniania wód popłucznych do
                wykorzystania w instalacjach obiektów basenowych. Jest to
                ekonomiczny i ekologiczny system wykorzystujący tuby filtracyjne
                oczyszczające w spektrum nano- i ultrafiltracji. Układ
                filtracyjny został zbudowany z recyklingowanych tub po
                hemodializie, zastępując stosowane do tej pory membrany
                filtracyjne. Po zastosowaniu medycznym filtry są czyszczone i
                sterylizowane oraz montowane, tak aby oczyszczać wodę pod
                ciśnieniem. Technologia ta jest innowacją inkrementalną na skalę
                światową.
              </p>

              <a href={SpektrumNanofiltracji} target="_blank" rel="noreferrer">
                Spektrum filtracji SOWA
              </a>
              <br />
              <a href={SchematNanofiltracji} target="_blank" rel="noreferrer">
                Schemat technologiczny SOWA
              </a>
            </div>
          </div>

          <div className="container-fluid bg-light py-5">
            <div className="container">
              <h1 className="text-primary">Instalacja</h1>
              <hr></hr>

              <p>
                <b>Instalacja może być zainstalowana w</b>
              </p>
              <ul>
                <li>Nowych lub istniejących instalacjach basenowych</li>
                <li>
                  Może być dopasowana do wszystkich systemów filtracyjnych
                </li>
              </ul>

              <p>
                <b>Usuwa</b>
              </p>
              <ul>
                <li>
                  Zawiesiny, mikrobiologiczne i organiczne substancje zawarte w
                  wodach popłucznych jaK wirusy i patogeny.
                </li>
              </ul>

              <p>
                <b>Redukuje</b>
              </p>
              <ul>
                <li>CHLORAMY, THMy, DBPy</li>
                <li>Użycie środków chemicznych</li>
              </ul>
            </div>
          </div>

          <div className="container-fluid bg-light py-5">
            <div className="container">
              <h1 className="text-primary">O Systemie</h1>
              <hr></hr>

              <p>
                <b>Parametry i Wyposażenie</b>
              </p>
              <ul>
                <li>
                  wydajność: 2,5m<sup>3</sup>/h - 15m<sup>3</sup>/h
                </li>
                <li>pompa obiegowa z prefiltrem</li>
                <li>pompa płucząca z prefiltrem</li>
                <li>filtr wstępny</li>
                <li>zbiornik wody popłucznej</li>
              </ul>

              <p>
                <b>Wytyczne do podłączenia</b>
              </p>
              <ul>
                <li>zasilanie elektryczne: 5,5 kW</li>
                <li>podejście kanalizacyjne: min d100</li>
              </ul>

              <p>
                <b>Wytyczne do projektowania</b>
              </p>

              <ul>
                <li>
                  Objętość zbiornika wód popłucznych należy dobrać do ilości
                  popłuczyn największego obiegu technologicznego powstających w
                  jednym dniu eksploatacji obiektu
                </li>
                <li>Filtr wstępny dobierany do wydajności systemu</li>
                <li>
                  Pompa obiegowa i płucząca dobierana do wydajności jednostki
                  filtracyjnej.
                </li>
              </ul>
            </div>
          </div>

          <div className="container-fluid bg-light py-5">
            <div className="container">
              <h1 className="text-primary">
                Wymagania dla uzdatnionej wody popłucznej
              </h1>
              <hr></hr>

              <p>
                <b>Wymagania fizyko-chemiczne</b>
              </p>
              <ul>
                <li>{"THM < 0,02 mg/l"}</li>
                <li>
                  {"AOX < 0,1 mg/l (zawartości związków halogenoorganicznych)"}
                </li>
                <li>{"chlorany < 5 mg/l"}</li>
                <li>{"bromiany < 0,2 mg/l"}</li>
                <li>
                  {
                    "utlenialność nadmanganianu potasu< 5 mg O2/l odpowiednio do KMnO4 < 20 mg/l"
                  }
                </li>
                <li>{"wolny chlor > 0,3 mg/l"}</li>
                <li>{"kwasowość > 0,7 mmol/l"}</li>
                <li>{"mętność < 0,2 FNU"}</li>
              </ul>

              <p>
                <b>Wymagania mikrobiologiczne</b>
              </p>
              <ul>
                <li>Jak dla wody pitnej</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </HelmetProvider>
    );
  }
}
