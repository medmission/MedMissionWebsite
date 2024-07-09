<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "medmission23@gmail.com";
$subject = "Mail From Website";

$headers = "From: ".$name ."\r\n".

$txt ="You have recived an email from".$name ."\r\nEmail: ".$email ."\r\n Message: ". $message;

if($email!=NULL){
    mail($to, $subject, $txt, $headers);
}

header('Location: thank-you.html');

?>