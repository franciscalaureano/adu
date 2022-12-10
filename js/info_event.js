//MUDAR A IMAGEM DAS SETAS DESCER E SUBIR
/*const seta_descer = document.getElementById('seta_descer');
let toggle = true;
seta_descer.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle){
        seta_descer.src = "assets/img/seta_descer.png";
    } else {
        seta_descer.src = "assets/img/seta_subir.png";
    }
})*/

//MUDAR A IMAGEM DO ICON GO!
const icon_go = document.getElementById('icon_go');
let toggle2 = true;
icon_go.addEventListener('click', function(){
    toggle2 = !toggle2;
    if(toggle2){
        icon_go.src = "assets/img/go.png";
    } else {
        icon_go.src = "assets/img/go_2.png";
    }
})

//MUDAR A IMAGEM DO ICON CORACAO
const icon_coracao = document.getElementById('icon_coracao');
let toggle3 = true;
icon_coracao.addEventListener('click', function(){
    toggle3 = !toggle3;
    if(toggle3){
        icon_coracao.src = "assets/img/coracao.png";
    } else {
        icon_coracao.src = "assets/img/coracao_2.png";
    }
})