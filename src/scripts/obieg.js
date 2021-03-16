export class Obieg {
    constructor(
      nazwa,
      srednicaFiltra,
      iloscFiltrow,
      tempWodyBasenowej,
      tempWodyWodociagowej,
      czestotliwoscPlukaniaFiltrow,
      predkoscPlukania,
      predkoscFiltracji,
      czasPlukania,
      czasStabilizacji,
      kosztWodyNetto,
      kosztZrzutowSciekowNetto,
      kosztOgrzewaniaNetto
      ) {
      this.nazwa = nazwa;
      this.srednicaFiltra = srednicaFiltra;
      this.iloscFiltrow = iloscFiltrow;
      this.tempWodyBasenowej = tempWodyBasenowej;
      this.tempWodyWodociagowej = tempWodyWodociagowej;
      this.czestotliwoscPlukaniaFiltrow = czestotliwoscPlukaniaFiltrow;
      this.predkoscPlukania = predkoscPlukania;
      this.predkoscFiltracji = predkoscFiltracji;
      this.czasPlukania = czasPlukania;
      this.czasStabilizacji = czasStabilizacji;
      this.kosztWodyNetto = kosztWodyNetto;
      this.kosztZrzutowSciekowNetto = kosztZrzutowSciekowNetto;
      this.kosztOgrzewaniaNetto = kosztOgrzewaniaNetto;
    }
  
    get jednokrotneZuzycieWody() {
      return (
        (Math.PI * Math.pow(this.srednicaFiltra / 2000, 2) * this.predkoscPlukania * this.czasPlukania) 
        / 60 
        + (Math.PI * Math.pow(this.srednicaFiltra / 2000, 2) 
        * this.predkoscFiltracji * this.czasStabilizacji) / 60)
        * this.iloscFiltrow;
    }
  
    get miesieczneZuzycieWody() {
      return this.jednokrotneZuzycieWody * 30 / this.czestotliwoscPlukaniaFiltrow
    }
  
    get roczneZuzycieWody() {
      return this.miesieczneZuzycieWody * 12
    }

    get jednokrotneZuzycieEnergiiCieplnej() {
        return (this.jednokrotneZuzycieWody * (this.tempWodyBasenowej - this.tempWodyWodociagowej) * 4180) / 1000000;
    }

    get miesieczneZuzycieEnergiiCieplnej() {
        return((this.jednokrotneZuzycieEnergiiCieplnej * 30) / this.czestotliwoscPlukaniaFiltrow);
    }

    get roczneZuzycieEnergiiCieplnej() {
        return this.miesieczneZuzycieEnergiiCieplnej * 12;
    }

    get kwotaRocznaZOdzyskuWody() {
        return(this.roczneZuzycieWody * (this.kosztWodyNetto + this.kosztZrzutowSciekowNetto) * 0.96);
    }

    get kwotaRocznaZOdzyskuEnergiiCieplnej() {
        return(this.kosztOgrzewaniaNetto * this.roczneZuzycieEnergiiCieplnej * 0.96);
    }
    
    get sumaRocznychOszczednosci() {
        return(this.kwotaRocznaZOdzyskuWody + this.kwotaRocznaZOdzyskuEnergiiCieplnej)
    }

    static default(name) {
      return new Obieg(
        name,//      nazwa,
        1800, //      srednicaFiltra,
        3, //      iloscFiltrow,
        30, //      tempWodyBasenowej,
        10, //      tempWodyWodociagowej,
        3, //      czestotliwoscPlukaniaFiltrow,
        50, //      predkoscPlukania,
        30, //      predkoscFiltracji,
        6, //      czasPlukania,
        1, //      czasStabilizacji,
        4.88, //      kosztWodyNetto,
        7.22, //      kosztZrzutowSciekowNetto,
        53.42//      kosztOgrzewaniaNetto
        );
    }
  }