<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');
    
    // Set the recipient email address where you want to receive the messages
    $to = "medmission23@gmail.com"; // Replace with your email address
    
    // Set the subject of the email
    $subject = "Message from MedMission Contact Form";
    
    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Build the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Attempt to send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect to a thank you page upon successful submission
        header("Location: thank-you.html");
        exit;
    } else {
        // Log errors or display an error message to the user
        // For example:
        // echo "Email sending failed. Please try again.";
        header("Location: error.html");
        exit;
    }
}
?>
