<?php

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if($_POST) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $obiegi = $_POST["obiegi"];

    $wiadomosc = "\n";

    for($i=0; $i<count($obiegi); $i++) {
        $wiadomosc .= $obiegi[$i]["nazwa"]."\n\n";
        $wiadomosc .= "Średnica filtra: ".$obiegi[$i]["srednicaFiltra"]."\n";
        $wiadomosc .= "Ilość filtrów: ".$obiegi[$i]["iloscFiltrow"]."\n";
        $wiadomosc .= "Temp. wody basenowej: ".$obiegi[$i]["tempWodyBasenowej"]."\n";
        $wiadomosc .= "Temp. wody wodociągowej: ".$obiegi[$i]["tempWodyWodociagowej"]."\n";
        $wiadomosc .= "Częstotliwość płukania filtrów: ".$obiegi[$i]["czestotliwoscPlukaniaFiltrow"]."\n";
        $wiadomosc .= "Prędkość płukania: ".$obiegi[$i]["predkoscPlukania"]."\n";
        $wiadomosc .= "Prędkość filtracji: ".$obiegi[$i]["predkoscFiltracji"]."\n";
        $wiadomosc .= "Czas płukania: ".$obiegi[$i]["czasPlukania"]."\n";
        $wiadomosc .= "Czas stabilizacji: ".$obiegi[$i]["czasStabilizacji"]."\n";
        $wiadomosc .= "Jednokrotne zużycie wody: ".$obiegi[$i]["jednokrotneZuzycieWody"]."\n";
        $wiadomosc .= "Miesięczne zużycie wody: ".$obiegi[$i]["miesieczneZuzycieWody"]."\n";
        $wiadomosc .= "Roczne zużycie Wody: ".$obiegi[$i]["roczneZuzycieWody"]."\n";
        $wiadomosc .= "Jednokrotne zużycie energii cieplnej: ".$obiegi[$i]["jednokrotneZuzycieEnergiiCieplnej"]."\n";
        $wiadomosc .= "Miesięczne zużycie energii cieplnej: ".$obiegi[$i]["miesieczneZuzycieEnergiiCieplnej"]."\n";
        $wiadomosc .= "Roczne zużycie energii cieplnej: ".$obiegi[$i]["roczneZuzycieEnergiiCieplnej"]."\n";
        $wiadomosc .= "Koszt wody netto: ".$obiegi[$i]["kosztWodyNetto"]."\n";
        $wiadomosc .= "Koszt zrzutów ścieków netto: ".$obiegi[$i]["kosztZrzutowSciekowNetto"]."\n";
        $wiadomosc .= "Koszt ogrzewania netto: ".$obiegi[$i]["kosztOgrzewaniaNetto"]."\n";
        $wiadomosc .= "Kwota roczna z odzysku wody: ".$obiegi[$i]["kwotaRocznaZOdzyskuWody"]."\n";
        $wiadomosc .= "Kwota roczna z odzysku energii cieplnej: ".$obiegi[$i]["kwotaRocznaZOdzyskuEnergiiCieplnej"]."\n";
        $wiadomosc .= "Suma rocznych oszczędności: ".$obiegi[$i]["sumaRocznychOszczednosci"]."\n";
        $wiadomosc .= "\n\n";

        
    }
    
    if(strlen($wiadomosc) < 2 || strlen($name) < 2) {
        die();
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die();
    }

    $to = "kontakt@sowa.expert";
    
    $headers = 
        'Content-Type: text/plain; charset=utf-8' . "\r\n" .
        'MIME-Version: 1.0' . "\r\n" .
        "From: $name <$email>" . "\r\n" .
        "Reply-To: $name <$email>" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    $emailBody = 
        "Email: $email\n".
        "Nadawca: $name\n".
        "$wiadomosc";
    
    
    mail($to, "Brief SOWA", $emailBody, $headers);
}