<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="css/geral/font.css"/>
    <link rel="stylesheet" href="css/geral.css"/>
    <link rel="stylesheet" href="css/profile_photo.css"/>
    <title>Add a profile photo</title>
</head>
<body>
<div class="bar_container">
    <img src="assets/img/barra8.png" height="24" width="2600" alt="Sequence Bar">
</div>
<section class="title">
    <h1>Add a profile photo</h1>
</section>
<div id="add_container">
    <img id="default_photo" src="assets/img/add_photo.png" height="1548" width="1548"
         alt="big button to add profile photo">
</div>
<section class="buttons">
    <div class="button_container">
        <button id="skip_button" type="submit" name="submit">Skip</button>
    </div>
    <div class="button_container">
        <button id="continue_button" type="submit" name="submit">Continue</button>
    </div>
</section>

<section id="photo_popUp">
    <div id="photo_popUp_container">
        <h3>Select a photo</h3>
        <div id="avatar_container">
            <img id="avatar1" src="assets/img/avatar1.png" height="400" width="400"
                 alt="avatar 1: ilustração de uma mulher loira com coroa de flores e olhos em forma de coração">
            <img id="avatar2" src="assets/img/avatar2.png" height="400" width="400"
                 alt="avatar 2: ilustração de uma mulher com carapuço preto">
            <img id="avatar3" src="assets/img/avatar3.png" height="400" width="400"
                 alt="avatar 3: ilustração de um homem ruivo com cabelo rapado">
            <img id="avatar4" src="assets/img/avatar4.png" height="400" width="400"
                 alt="avatar 4: ilustração de um homem com cabelo encaracolado castanho">
            <img id="avatar5" src="assets/img/avatar5.png" height="400" width="400"
                 alt="avatar 5: ilustração de um homem loiro com cabelo comprido">
            <img id="avatar6" src="assets/img/avatar6.png" height="400" width="400"
                 alt="avatar 6: ilustração de uma mulher com cabelo encaracolado castanho comprido; tem uma fita azul">
        </div>
        <section class="buttons_popUp">
            <div class="button_container_popUp">
                <button id="back_button_popUp" type="submit" name="submit">Back</button>
            </div>
            <div class="button_container_popUp">
                <button id="select_button_popUp" type="submit" name="submit">Select</button>
            </div>
        </section>
    </div>
</section>

<script>
    //ABRE POP UP
    document.getElementById("add_container").addEventListener("click", function () {
        document.getElementById("photo_popUp").style.display = "flex";
    })

    //AO SELECINAR AVATAR, APLICA CLASS E BOTÃO SELECT
    /*    function selected(e) {
            e.target.classList.toggle("imgSelected");
            console.log(this.id);

            document.getElementById("default_photo").src = "assets/img/" + this.id + ".png";

            document.getElementById("default_photo").style.border = "4px solid #843D3F"
            document.getElementById("default_photo").style.borderRadius = "500px"

            document.getElementById("select_button_popUp").style.display = "block";
            document.getElementById("continue_button").style.display = "block";
        }
        const buttons = document.querySelectorAll("#avatar_container > img");
        buttons.forEach((item) => {
            item.addEventListener("click", selected)
        });*/
var variavel1 = "";

    var button1 = document.querySelectorAll("#avatar_container > img");
    for (var i = 0; i < button1.length; i++) {
        button1[i].addEventListener("click", function () {

            var selectedEl1 = document.querySelector(".imgSelected");
            if (selectedEl1) {
                selectedEl1.classList.remove("imgSelected");
            }
            this.classList.add("imgSelected");
            variavel1 = this.id;

            console.log(this.id);
            document.getElementById("default_photo").src = "assets/img/" + this.id + ".png";

            document.getElementById("default_photo").style.border = "4px solid #843D3F"
            document.getElementById("default_photo").style.borderRadius = "500px"

            document.getElementById("select_button_popUp").style.display = "block";
            document.getElementById("continue_button").style.display = "block";
        }, false);
    }
    console.log("e"+variavel1);
    //BOTÃO SELECT
    document.getElementById("select_button_popUp").addEventListener("click", function () {
        document.getElementById("photo_popUp").style.display = "none";
    })

    //FECHA POP UP BACK
    document.getElementById("back_button_popUp").addEventListener("click", function () {
        document.getElementById("photo_popUp").style.display = "none";

        document.getElementById("default_photo").src = "assets/img/" + "add_photo" + ".png";
        document.getElementById("default_photo").style.border = "0"
        document.getElementById("default_photo").style.borderRadius = "0"

    })
    //PASSA PARA A PRÓXIMA PÁGINA SLIP
    document.getElementById("skip_button").addEventListener("click", function () {
        window.location.replace("add_friends.html");
    }, true);

    //PASSA PARA A PRÓXIMA PÁGINA CONTINUE
    document.getElementById("continue_button").addEventListener("click", function () {
        window.location.replace("add_friends.html");
        //e guarda informação
    }, true);


</script>


</body>
</html>