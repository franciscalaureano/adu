//MUDAR A IMAGEM DO BUTTON GO!
let buttons_go = document.getElementsByClassName('button_go');
let clique1 = true;
for( let i=0; i<buttons_go.length; i++){
    buttons_go[i].addEventListener('click', function(){
    clique1 = !clique1;
        if(clique1){
            buttons_go[i].src = "assets/img/button_go.png";
        } else {
            buttons_go[i].src = "assets/img/button_go_black.png";
        }
    })
}

//MUDAR A IMAGEM DO BUTTON CORACAO
let buttons_heart = document.getElementsByClassName('button_heart');
let clique2 = true;
for( let i=0; i<buttons_heart.length; i++){
    buttons_heart[i].addEventListener('click', function(){
        clique2 = !clique2;
        if(clique2){
            buttons_heart[i].src = "assets/img/button_heart.png";
        } else {
            buttons_heart[i].src = "assets/img/button_heart_black.png";
        }
    })
}

//CLICAR NO BOTÃO DA SETA PARA ANDAR PARA TRÁS
let button_arrow_back = document.getElementById('button_arrow_back');
button_arrow_back.addEventListener('click', function(){
    window.location.replace("home.html");
})

//CLICAR NO BOTÃO FILTER
let button_filter = document.getElementById('button_filter');
button_filter.addEventListener('click', function(){
    console.log("div filter");
})



//BARRA DE PESQUISA
document.addEventListener("keyup", function(event) {
    search();
});

function search() {
    let input = document.getElementById('input_search').value
    input=input.toLowerCase();
    let div_event_columbus_buttons_heart_go = document.getElementById('div_event_columbus_buttons_heart_go')
    let image_event_walk = document.getElementById('image_event_walk')
    let date_event_walk = document.getElementById('date_event_walk')
    let title_event_walk = document.getElementById('title_event_walk')
    let hours_event_walk = document.getElementById('hours_event_walk')
    let local_event_walk = document.getElementById('local_event_walk')
    let event_walk = document.getElementById('event_walk');

    if (input == "walk" || input == "w" || input == "wa" || input == "wal" || input=="sport" || input == "fitness"){
        div_event_columbus_buttons_heart_go.style.display="none";
    }

    else if (input == "t" || input == "ta" || input == "tau" || input == "tauc" || input=="music"){
        div_event_columbus_buttons_heart_go.style.display="none";
        image_event_walk.src="assets/img/event_tauc.png";
        date_event_walk.innerHTML = "04th of december";
        title_event_walk.innerHTML = "TAUC & Sofia Escobar Orchestra";
        hours_event_walk.innerHTML = "06:00 pm - 07:00 pm";
        local_event_walk.innerHTML = "Convento de São Francisco (1,5 km)";
        if (event_walk != null) {
            document.getElementById("event_walk").id = "event_tauc";
        }
        //CLICAR NO EVENTO TAUC
        let event_tauc = document.getElementById('event_tauc');
        event_tauc.addEventListener('click', function () {
            window.location.replace("info_event.html");
        })
    }
    else{
        div_event_columbus_buttons_heart_go.style.display="flex";
        image_event_walk.src="assets/img/event_walk.png";
        date_event_walk.innerHTML = "04th of december";
        title_event_walk.innerHTML = "WALK TO DEFEAT ALS® - NORTHEASTERN";
        hours_event_walk.innerHTML = "08:30 am - 12:00 am";
        local_event_walk.innerHTML = "Neuroscience Group Field - Fox Cities Stadium (3 km)";
        if (event_tauc != null) {
            document.getElementById("event_tauc").id = "event_walk";
        }
    }
}
