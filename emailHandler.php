<?php
$params = json_decode($_POST['formTitle']); //turn string to JSON

if(isset($params->message) && isset($params->email)){
  $myEmail = 'lostintheuniverse0@gmail.com';
  $name = $params->name;
  $message = $params->message;
  $email = $params->email;
  $success = sendMail($myEmail, $name, $message, $email);
}

function spamcheck($field)
{
    //filter_var() sanitizes the e-mail
    //address using FILTER_SANITIZE_EMAIL
    $field=filter_var($field, FILTER_SANITIZE_EMAIL);

    //filter_var() validates the e-mail
    //address using FILTER_VALIDATE_EMAIL
    if(filter_var($field, FILTER_VALIDATE_EMAIL))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function sendMail($myEmail, $name, $message, $email)
{
  $validFromEmail = spamcheck($email);
  if($validFromEmail)
  {
    echo "$myEmail $message $name $email";
    mail($myEmail, $name, $message, "From: $email");
  }
}
?>
