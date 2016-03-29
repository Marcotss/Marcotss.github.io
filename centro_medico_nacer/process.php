<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	// if any of these variables don't exist, add an error to our $errors array

	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';

	if (empty($_POST['email']))
		$errors['email'] = 'Email is required.';

	if (empty($_POST['message']))
		$errors['message'] = 'Message is required.';

// return a response ===========================================================

	// if there are any errors in our errors array, return a success boolean of false
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		$to = "info@centromediconacercr.com";
		$subject = "Centro Medico Nacer";
		$body = "Name: ".$_POST["name"]."\n";
		$body .= "E-Mail: ".$_POST["email"]."\n";
		$body .= "Message: ".$_POST["message"]."\n";
		$body .= "\n-----------------END OF MAIL ------------------\n";
		mail($to,$subject,$body);

		// show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] = 'Su mensaje se ha enviado, Nos pondremos en contacto con usted muy pronto !';
	}

	// return all our data to an AJAX call
	echo json_encode($data);
