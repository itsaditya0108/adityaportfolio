<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Here we can perform further processing, such as sending an email
    // For example:
    $to = "adityaverma9005@gmail.com";
    $subject = "New message from website contact form";
    $email_body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    // Send email
    mail($to, $subject, $email_body);
    
    // Redirect to a thank you page
    header("Location: thank_you.html");
    exit();
}
?>
