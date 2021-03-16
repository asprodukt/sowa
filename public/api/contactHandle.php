<?php

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if($_POST) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $temat = $_POST["temat"];
    $wiadomosc = $_POST["wiadomosc"];
    
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
        "Wiadomość: $wiadomosc";
    
    
    mail($to, $temat, $emailBody, $headers);
}