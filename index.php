<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="css/geral/font.css"/>
    <link rel="stylesheet" href="css/geral.css"/>
    <link rel="stylesheet" href="css/index.css"/>
    <title>Login</title>
</head>
<body>
<!--Title-->
<div id="account_title_container">
    <h1>Welcome to</h1>
</div>
<div id="logo_container">
    <img id="logo" src="assets/img/logo.png" height="330" width="341" alt="logotipo da aplicação que diz go out com gradiente amarelo de fundo">
</div>
<form method="post" action="index.php" id="login_form">
    <div class="input-field">
        <label>E-mail address</label>
        <input
            type="email"
            id="login-email"
            name="login-email"
            placeholder="ex: example@email.com"
            required
        />
    </div>
    <!--E-mail Error-->
    <div class="emailError">
        <p>Your email is incorrect!</p>
    </div>

    <!--Password-->
    <div class="input-field">
        <label>Password</label>
        <input
            type="password"
            id="login-password"
            name="login-password"
            placeholder="********"
            required
        />
    </div>
    <!--E-mail Error-->
    <div class="passwordError">
        <p>Your password is incorrect!</p>
    </div>
</form>

<div id="login_submit_container">
    <button id="login_submit_button" type="submit" form="login_form" name="submit" value="login">Login</button>
    <p>Don’t have an account? <a href="signup.php">Create one</a>!</p>
</div>
</body>
</html>

<?php
session_start();

if (isset($_POST['submit'])) {

    $emailLogin = $_POST['login-email'];
    $passwordLogin = $_POST['login-password'];

    if ($emailLogin != "" && $passwordLogin != "") {
        if (($emailLogin == $_SESSION['email']) && ($passwordLogin == $_SESSION['password'])) {
            header('Location: home.php');
        } else if (($emailLogin == $_SESSION['email']) && ($passwordLogin != $_SESSION['password'])) {
            //password errada
            echo '<script>document.getElementsByClassName("passwordError")[0].style.display = "block"</script>';
        } else if (($emailLogin != $_SESSION['email']) && ($passwordLogin == $_SESSION['password'])) {
            //email errado
            echo '<script>document.getElementsByClassName("emailError")[0].style.display = "block"</script>';
        } else if(($emailLogin != $_SESSION['email'])&& ($passwordLogin != $_SESSION['password'])){
            echo '<script>document.getElementsByClassName("passwordError")[0].style.display = "block"</script>';
            echo '<script>document.getElementsByClassName("emailError")[0].style.display = "block"</script>';
        }
    } else {
        echo "Something is wrong. Try again!";
    }
}
?>