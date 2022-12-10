//-----------FILTER-------------------------------------
var music_button = document.getElementById("music_button");
music_button.addEventListener("click", function (){
    console.log("funcionou");
    music_button.classList.toggle("filterButtonSelected");
}, true);