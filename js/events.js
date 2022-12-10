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



