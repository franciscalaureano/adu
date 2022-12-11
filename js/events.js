//MUDAR A IMAGEM DO BUTTON GO!
let buttons_go = document.getElementsByClassName('button_go');
let clique1 = true;
buttons_go[0].addEventListener('click', function () {
    clique1 = !clique1;
    if (clique1) {
        buttons_go[0].src = "assets/img/button_go.png";
    } else {
        buttons_go[0].src = "assets/img/button_go_black.png";
    }
})
let clique2 = true;
buttons_go[1].addEventListener('click', function () {

    clique2 = !clique2;
    if (clique2) {
        buttons_go[1].src = "assets/img/button_go.png";
    } else {
        buttons_go[1].src = "assets/img/button_go_black.png";
    }
})


//MUDAR A IMAGEM DO BUTTON CORACAO
let buttons_heart = document.getElementsByClassName('button_heart');
let clique3 = true;
buttons_heart[0].addEventListener('click', function () {
    clique3 = !clique3;
    if (clique3) {
        buttons_heart[0].src = "assets/img/button_heart.png";
    } else {
        buttons_heart[0].src = "assets/img/button_heart_black.png";
    }
})
let clique4 = true;
buttons_heart[1].addEventListener('click', function () {
    clique4 = !clique4;
    if (clique4) {
        buttons_heart[1].src = "assets/img/button_heart.png";
    } else {
        buttons_heart[1].src = "assets/img/button_heart_black.png";
    }
})

//CLICAR NO BOTÃO DA SETA PARA ANDAR PARA TRÁS
let button_arrow_back = document.getElementById('button_arrow_back');
button_arrow_back.addEventListener('click', function () {
    window.location.replace("home.php");
})

//CLICAR NO BOTÃO FILTER
let button_filter = document.getElementById('button_filter');
button_filter.addEventListener('click', function () {
    console.log("ola");
    document.getElementById("filterPopUpContainer").style.display = "flex";
})

//-----------FILTER-------------------------------------
var music_button = document.getElementById("music_button");
music_button.addEventListener("click", function () {
    console.log("funcionou");
    music_button.classList.toggle("filterButtonSelected");

    let input = document.getElementById('input_search').value
    input = input.toLowerCase();
    let div_event_columbus_buttons_heart_go = document.getElementById('div_event_columbus_buttons_heart_go')
    let image_event_walk = document.getElementById('image_event_walk')
    let date_event_walk = document.getElementById('date_event_walk')
    let title_event_walk = document.getElementById('title_event_walk')
    let hours_event_walk = document.getElementById('hours_event_walk')
    let local_event_walk = document.getElementById('local_event_walk')
    let event_walk = document.getElementById('event_walk');

    div_event_columbus_buttons_heart_go.style.display = "none";
    image_event_walk.src = "assets/img/event_tauc.png";
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
}, true);

var orderButtons = document.getElementsByClassName("filterButton");
for (var k = 0; k < orderButtons.length; k++) {
    orderButtons[k].addEventListener("click", function () {
        if (this.value !== "music") {
            console.log("hihi");
            let div_event_columbus_buttons_heart_go = document.getElementById('div_event_columbus_buttons_heart_go')
            let image_event_walk = document.getElementById('image_event_walk')
            let date_event_walk = document.getElementById('date_event_walk')
            let title_event_walk = document.getElementById('title_event_walk')
            let hours_event_walk = document.getElementById('hours_event_walk')
            let local_event_walk = document.getElementById('local_event_walk')

            div_event_columbus_buttons_heart_go.style.display = "flex";
            image_event_walk.src = "assets/img/event_walk.png";
            image_event_walk.src = "assets/img/event_walk.png";
            date_event_walk.innerHTML = "04th of december";
            title_event_walk.innerHTML = "WALK TO DEFEAT ALS® - NORTHEASTERN";
            hours_event_walk.innerHTML = "08:30 am - 12:00 am";
            local_event_walk.innerHTML = "Neuroscience Group Field - Fox Cities Stadium (3 km)";

            let event_tauc = document.getElementById('event_tauc');
            if (event_tauc != null) {
                console.log("olall")
                document.getElementById("event_tauc").id = "event_walk";
                document.getElementById("event_walk").addEventListener("click", function (){
                    window.location.replace("events.html");
                })
            }
        }
    }, true);
}




//CRUZ FILTER
document.getElementById("closeFilterContainer").addEventListener("click", function () {
    document.getElementById("filterPopUpContainer").style.display = "none";
})

//SELECIONAR OPÇÕES FILTER
var order_button = document.getElementsByClassName('orderButton')
for (var i = 0; i < order_button.length; i++) {
    order_button[i].addEventListener("click", function () {

        var selectedEl1 = document.querySelector(".orderButtonSelected");
        if (selectedEl1) {
            selectedEl1.classList.remove("orderButtonSelected");
        }
        this.classList.add("orderButtonSelected");
    }, false);
}

var filter_button = document.getElementsByClassName('filterButton')
for (var j = 0; j < filter_button.length; j++) {
    filter_button[j].addEventListener("click", function () {

        var selectedEl2 = document.querySelector(".filterButtonSelected");
        if (selectedEl2) {
            selectedEl2.classList.remove("filterButtonSelected");
        }
        this.classList.add("filterButtonSelected");
    }, false);
}

//BARRA DE PESQUISA
document.addEventListener("keyup", function (event) {
    search();
});

function search() {
    let input = document.getElementById('input_search').value
    input = input.toLowerCase();
    let div_event_columbus_buttons_heart_go = document.getElementById('div_event_columbus_buttons_heart_go')
    let image_event_walk = document.getElementById('image_event_walk')
    let date_event_walk = document.getElementById('date_event_walk')
    let title_event_walk = document.getElementById('title_event_walk')
    let hours_event_walk = document.getElementById('hours_event_walk')
    let local_event_walk = document.getElementById('local_event_walk')
    let event_walk = document.getElementById('event_walk');

    if (input == "walk" || input == "w" || input == "wa" || input == "wal" || input == "sport" || input == "fitness") {
        div_event_columbus_buttons_heart_go.style.display = "none";
    } else if (input == "t" || input == "ta" || input == "tau" || input == "tauc" || input == "music") {
        div_event_columbus_buttons_heart_go.style.display = "none";
        image_event_walk.src = "assets/img/event_tauc.png";
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
    } else {
        div_event_columbus_buttons_heart_go.style.display = "flex";
        image_event_walk.src = "assets/img/event_walk.png";
        date_event_walk.innerHTML = "04th of december";
        title_event_walk.innerHTML = "WALK TO DEFEAT ALS® - NORTHEASTERN";
        hours_event_walk.innerHTML = "08:30 am - 12:00 am";
        local_event_walk.innerHTML = "Neuroscience Group Field - Fox Cities Stadium (3 km)";
        let event_tauc = document.getElementById('event_tauc');
        if (event_tauc != null) {
            document.getElementById("event_tauc").id = "event_walk";
        }
    }
}
