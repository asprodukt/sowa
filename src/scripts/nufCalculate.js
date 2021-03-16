export function loadDefaultValues() {
  document.getElementById("srednica-filtra").value = 1800;
  document.getElementById("ilosc-filtrow").value = 3;
  document.getElementById("temp-wody-basenowej").value = 26;
  document.getElementById("temp-wody-wodociagowej").value = 10;
  document.getElementById("czestotliwosc-plukania-filtrow").value = 3;
  document.getElementById("predkosc-plukania").value = 60;
  document.getElementById("predkosc-filtracji").value = 30;
  document.getElementById("czas-plukania").value = 5;
  document.getElementById("czas-stabilizacji").value = 3;
  document.getElementById("koszt-wody-netto").value = 5.07;
  document.getElementById("koszt-zrzutow-sciekow-netto").value = 8.02;
  document.getElementById("koszt-ogrzewania-netto").value = 62.26;
  document.getElementById("kwota-roczna-z-odzysku-wody").value = 62356.31;
  document.getElementById(
    "kwota-roczna-z-odzysku-energii-cieplnej"
  ).value = 19835.64;
  document.getElementById("suma-rocznych-oszczednosci").value = 79191.94;
}

export function nufCalculate() {
  var srednicaFiltra = document.getElementById("srednica-filtra");
  var iloscFiltrow = document.getElementById("ilosc-filtrow");
  var tempWodyBasenowej = document.getElementById("temp-wody-basenowej");
  var tempWodyWodociagowej = document.getElementById("temp-wody-wodociagowej");
  var czestotliwoscPlukaniaFiltrow = document.getElementById(
    "czestotliwosc-plukania-filtrow"
  );
  var predkoscPlukania = document.getElementById("predkosc-plukania");
  var predkoscFiltracji = document.getElementById("predkosc-filtracji");
  var czasPlukania = document.getElementById("czas-plukania");
  var czasStabilizacji = document.getElementById("czas-stabilizacji");
  var jednokrotneZuzycieWody = document.getElementById(
    "jednokrotne-zuzycie-wody"
  );
  var miesieczneZuzycieWody = document.getElementById(
    "miesieczne-zuzycie-wody"
  );
  var roczneZuzycieWody = document.getElementById("roczne-zuzycie-wody");
  var jednokrotneZuzycieEnergiiCieplnej = document.getElementById(
    "jednokrotne-zuzycie-energii-cieplnej"
  );
  var miesieczneZuzycieEnergiiCieplnej = document.getElementById(
    "miesieczne-zuzycie-energii-cieplnej"
  );
  var roczneZuzycieEnergiiCieplnej = document.getElementById(
    "roczne-zuzycie-energii-cieplnej"
  );
  var kosztWodyNetto = document.getElementById("koszt-wody-netto");
  var kosztZrzutowSciekowNetto = document.getElementById(
    "koszt-zrzutow-sciekow-netto"
  );
  var kosztOgrzewaniaNetto = document.getElementById("koszt-ogrzewania-netto");
  var kwotaRocznaZOdzyskuWody = document.getElementById(
    "kwota-roczna-z-odzysku-wody"
  );
  var kwotaRocznaZOdzyskuEnergiiCieplnej = document.getElementById(
    "kwota-roczna-z-odzysku-energii-cieplnej"
  );
  var sumaRocznychOszczednosci = document.getElementById(
    "suma-rocznych-oszczednosci"
  );

  var jednokrotneZuzycieWodyValue =
    ((Math.PI *
      Math.pow(+srednicaFiltra.value / 2000, 2) *
      +predkoscPlukania.value *
      +czasPlukania.value) /
      60 +
      (Math.PI *
        Math.pow(+srednicaFiltra.value / 2000, 2) *
        +predkoscFiltracji.value *
        +czasStabilizacji.value) /
        60) *
    +iloscFiltrow.value;
  jednokrotneZuzycieWody.value = jednokrotneZuzycieWodyValue.toLocaleString(
    "pl-PL",
    { maximumFractionDigits: 3 }
  );
  var miesieczneZuzycieWodyValue =
    (jednokrotneZuzycieWodyValue * 30) / +czestotliwoscPlukaniaFiltrow.value;
  miesieczneZuzycieWody.value = miesieczneZuzycieWodyValue.toLocaleString(
    "pl-PL",
    { maximumFractionDigits: 3 }
  );
  var roczneZuzycieWodyValue = miesieczneZuzycieWodyValue * 12;
  roczneZuzycieWody.value = roczneZuzycieWodyValue.toLocaleString("pl-PL", {
    maximumFractionDigits: 3,
  });
  var jednokrotneZuzycieEnergiiCieplnejValue =
    (jednokrotneZuzycieWodyValue *
      (+tempWodyBasenowej.value - +tempWodyWodociagowej.value) *
      4180) /
    1000000;
  jednokrotneZuzycieEnergiiCieplnej.value = jednokrotneZuzycieEnergiiCieplnejValue.toLocaleString(
    "pl-PL",
    { maximumFractionDigits: 3 }
  );
  var miesieczneZuzycieEnergiiCieplnejValue =
    (jednokrotneZuzycieEnergiiCieplnejValue * 30) /
    +czestotliwoscPlukaniaFiltrow.value;
  miesieczneZuzycieEnergiiCieplnej.value = miesieczneZuzycieEnergiiCieplnejValue.toLocaleString(
    "pl-PL",
    { maximumFractionDigits: 3 }
  );
  var roczneZuzycieEnergiiCieplnejValue =
    miesieczneZuzycieEnergiiCieplnejValue * 12;
  roczneZuzycieEnergiiCieplnej.value = roczneZuzycieEnergiiCieplnejValue.toLocaleString(
    "pl-PL",
    { maximumFractionDigits: 3 }
  );
  var kwotaRocznaZOdzyskuWodyValue =
    roczneZuzycieWodyValue *
    (+kosztWodyNetto.value + +kosztZrzutowSciekowNetto.value) *
    0.96;
  kwotaRocznaZOdzyskuWody.value = kwotaRocznaZOdzyskuWodyValue.toLocaleString(
    "pl-PL",
    { maximumFractionDigits: 2 }
  );
  var kwotaRocznaZOdzyskuEnergiiCieplnejValue =
    +kosztOgrzewaniaNetto.value * +roczneZuzycieEnergiiCieplnejValue * 0.96;
  kwotaRocznaZOdzyskuEnergiiCieplnej.value = kwotaRocznaZOdzyskuEnergiiCieplnejValue.toLocaleString(
    "pl-PL",
    { maximumFractionDigits: 2 }
  );
  sumaRocznychOszczednosci.value = (
    kwotaRocznaZOdzyskuWodyValue + +kwotaRocznaZOdzyskuEnergiiCieplnejValue
  ).toLocaleString("pl-PL", { maximumFractionDigits: 2 });
  // var roczneOplatyZaMedia :number = (+roczneZuzycieWody.value * (+kosztWodyNetto.value + +kosztZrzutowSciekowNetto.value) + (+roczneZuzycieEnergiiCieplnej.value * +kosztOgrzewaniaNetto.value))
  // miesieczneOplatyZaMedia.value = round(roczneOplatyZaMedia/12, 2).toLocaleString('pl-PL', {maximumFractionDigits: 2});
  // miesieczneOszczednosci.value = round(+sumaRocznychOszczednosci.value / 12, 2).toLocaleString('pl-PL', {maximumFractionDigits: 2});
  // roznicaNaPlusMiesiecznie.value = round(+miesieczneOszczednosci.value - +miesiecznaRataZaSystem.value, 2).toLocaleString('pl-PL', {maximumFractionDigits: 2})
}
