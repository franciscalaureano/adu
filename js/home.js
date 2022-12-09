var events_button = document.getElementById("events_button_container");
events_button.addEventListener("click", function (){
    window.location.replace("index.html"); //MUDAR ESTA PÁGINA!
}, true);

//Barra de Navegação
var home_button = document.getElementById("nav_home_container");
home_button.addEventListener("click", function (){
    window.location.replace("home.html");
}, true);

var friends_button = document.getElementById("nav_friends_container");
friends_button.addEventListener("click", function (){
    window.location.replace("home.html"); //MUDAR ESTA PÁGINA!
}, true);

var settings_button = document.getElementById("nav_settings_container");
settings_button.addEventListener("click", function (){
    window.location.replace("home.html"); //MUDAR ESTA PÁGINA!
}, true);