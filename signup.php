<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/geral/font.css" />
    <link rel="stylesheet" href="css/geral.css" />
    <link rel="stylesheet" href="css/signup.css" />
    <title>Create Account</title>
</head>
<body>
<section id="sign up">
    <!--Title-->
    <div id="account_title_container">
        <h1>Create an Account</h1>
        <p>To become part of the family</p>
    </div>

    <form method="post" action="signup.php" id="signup-form" class="modal">
        <!--First Name-->
        <div class="input-field" id="line1">
            <div id="first_name">
                <label>First Name*</label>
                <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="ex: Olivia"
                    required
                >
            </div>
            <div id="last_name">
                <!--Last Name-->
                <label>Last Name*</label>
                <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="ex: Smith"
                    required
                >
            </div>
        </div>

        <!--E-mail-->
        <div class="input-field">
            <label>E-mail address*</label>
            <input
                type="email"
                id="signup-email"
                name="signup-email"
                placeholder="ex: example@email.com"
                required
            >
        </div>

        <!--E-mail Error-->
        <div class="emailError"></div>

        <!--Password-->
        <div class="input-field">
            <label>Password*</label>
            <input
                type="password"
                id="signup-password"
                name="signup-password"
                placeholder="********"
                required
            >
        </div>

        <!--Confirm Password-->
        <div class="input-field">
            <label>Confirm Password*</label>
            <input
                type="password"
                id="signup-confirm-password"
                name="signup-confirm-password"
                placeholder="********"
                required
            >
        </div>
        <!--Confirm Password Error-->
        <div class="passwordConfirmError">
            <p>Password does not match!</p>
        </div>

        <!--Mobile Phone Number-->
        <div class="input-field">
            <label>Phone Number</label>
            <input
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="ex: 911 111 111"
            >
        </div>

        <!--Date of Birth-->
        <div class="input-field">
            <label>Date of Birth</label>
            <input type="date" id="birth-date" name="birth-date" value="2022-12-06"/>
        </div>
   </form>

    <div id="signup_submit_container">
        <button id="signup_submit_button" type="submit" form="signup-form" name="submit" value="signup">Create Account</button>
        <p>Already have an account? <a href="index.php">Login </a>instead!</p>
    </div>
</section>
</body>
</html>

<?php

session_start();

if (isset($_POST['submit'])) {

    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];

    $email = $_POST['signup-email'];
    $password = $_POST['signup-password'];
    $confirmPassword = $_POST['signup-confirm-password'];

    $phoneNumber = $_POST['phone-number'];
    $birthDate = $_POST['birth-date'];

    if ($firstName != "" && $lastName != "" && $email != "" && $password != "" && $confirmPassword != "" && $birthDate != "") {
        if ($password == $confirmPassword) {
            $_SESSION['email'] = $_POST['signup-email'];
            $_SESSION['password'] = $_POST['signup-password'];

            $_SESSION['name'] = $_POST['first-name'];

            echo '<script>console.log('.$_SESSION["email"].')</script>';
            header('Location: before_starting.html');
        } else {
            echo '<script>document.getElementsByClassName("passwordConfirmError")[0].style.display = "block"</script>';
        }
    }
}
