<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="css/geral/font.css"/>
    <link rel="stylesheet" href="css/geral.css"/>
    <link rel="stylesheet" href="css/home.css"/>
    <title>Home</title>
</head>
<body>
<section id="home">
    <section id="superior_container">
        <!--Logo-->
        <img id="logo" src="assets/img/logo.png" height="330" width="341"
             alt="application logo with yellow gradient background that says go out">
        <!--Account Button-->
        <img id="account_button" src="assets/img/profile_photo.png" height="116" width="116"
             alt="selected profile picture for personal account">

    </section>
    <!--Title-->
    <div id="account_title_container">
        <?php
        session_start();
        echo "<h1>Hi ".$_SESSION['name']."!</h1>"
        ?>
    </div>
    <!--Central Part-->
    <section id="central_part_container">
        <div id="daySuggestion_button" class="central_button_container">
            <p>Suggestions of the Day</p>
            <img src="assets/img/suggestions_day_icon.png" height="400" width="359"
                 alt="an icon in the form of a calendar with a circle marking a specific day">
        </div>
        <div id="futureSuggestion_button" class="central_button_container">
            <p>Future Suggestions</p>
            <img src="assets/img/future_suggestion_icon.png" height="400" width="365"
                 alt="a calendar icon with an arrow pointing to the right">
        </div>
        <div id="friendsSuggestion_button" class="central_button_container">
            <p>Friends Suggestions</p>
            <img src="assets/img/friends_suggestions_icon.png" height="400" width="360"
                 alt="an icon in the form of a calendar with two people and one more">
        </div>
        <div id="events_button" class="central_button_container">
            <p>Events</p>
            <img src="assets/img/events_icon.png" height="320" width="400" alt="an icon in the form of a movie ticket">
        </div>
        <div id="myPages_button" class="central_button_container">
            <p>My Pages</p>
            <img src="assets/img/my_pages_icon.png" height="400" width="328" alt="an icon in the form of a bookmark">
        </div>
    </section>
    <section id="section_nav_container">
        <nav id="nav_container">
            <div class="nav_option_container" id="nav_friends_container">
                <img src="assets/img/friends_icon.png" height="96" width="149"
                     alt="an icon with a two people and a plus sign">
                <p>Friends</p>
            </div>
            <div class="nav_option_container" id="nav_home_container">
                <img src="assets/img/home_icon.png" height="124" width="111"
                     alt="an icon with the simplified shape of a house">
                <p>Home</p>
            </div>
            <div class="nav_option_container" id="nav_settings_container">
                <img src="assets/img/settings_icon.png" height="124" width="124"
                     alt="an icon of a pulley">
                <p>Settings</p>
            </div>
        </nav>
    </section>
</section>
<script src="js/button.js"></script>
<script>
    //-----------HOME-------------------------------------

    //Suggestion of the Day Button--------------------
    /*
    var daySuggestion_button = document.getElementById("daySuggestion_button");
    daySuggestion_button.addEventListener("click", function (){
        window.location.replace("index.html"); //MUDAR ESTA PÁGINA!
    }, true);*/

    //Future Suggestion Button--------------------
    /*
    var futureSuggestion_button = document.getElementById("futureSuggestion_button");
    futureSuggestion_button.addEventListener("click", function (){
        window.location.replace("index.html"); //MUDAR ESTA PÁGINA!
    }, true);*/

    //Friends Suggestion Button--------------------
    /*
    var friendsSuggestion_button = document.getElementById("friendsSuggestion_button");
    friendsSuggestion_button.addEventListener("click", function (){
        window.location.replace("index.html"); //MUDAR ESTA PÁGINA!
    }, true);*/

    //Event Button--------------------
    var events_button = document.getElementById("events_button");
    events_button.addEventListener("click", function (){
        window.location.replace("events.html");
    }, true);

    //My Pages Button--------------------
    /*
    var myPages_button = document.getElementById("myPages_button");
    myPages_button.addEventListener("click", function (){
        window.location.replace("index.html"); //MUDAR ESTA PÁGINA!
    }, true);*/
</script>
</body>
</html>