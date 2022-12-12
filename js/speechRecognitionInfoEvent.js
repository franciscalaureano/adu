// Speech Object

function setup() {
    noCanvas();
    // Create a Speech Recognition object with callback
    speechRec = new p5.SpeechRec('en-US', gotSpeech);
    // "Continuous recognition" (as opposed to one time only)
    let continuous = true;
    // If you want to try partial recognition (faster, less accurate)
    let interimResults = false;
    // This must come after setting the properties
    speechRec.start(continuous, interimResults);

    function gotSpeech() {
        console.log(speechRec);
        if (speechRec.resultValue) {
            let said = speechRec.resultString;

            if (said === "back") {
                console.log("said " + said);
                window.location.href = 'events.html';
            }

            var isInViewport = function (elem) {
                var distance = elem.getBoundingClientRect();
                return (
                    distance.top >= 0 &&
                    distance.left >= 0 &&
                    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            };

            var imagemInfo = document.getElementById('event_imagem');
            var descricaoInfo = document.getElementById('descricao');
            var maisInfo = document.getElementById('mais_informacao_h3');

            if (said === "down") {
                if (isInViewport(imagemInfo)) {
                    console.log("imagemInfo");
                    var i = document.getElementById("descricao");
                    i.scrollIntoView();

                    document.getElementById("seta_subir").style.display = "block";
                    document.getElementById("seta_descer2").style.display = "block";
                    document.getElementById("seta_subir2").style.display = "none";
                    document.getElementById("seta_descer").style.display = "none";
                } else if (isInViewport(descricaoInfo)) {
                    console.log("descricaoInfo");
                    var j = document.getElementById("mapa");
                    j.scrollIntoView();

                    document.getElementById("seta_descer").style.display = "none";
                    document.getElementById("seta_subir").style.display = "none";
                    document.getElementById("seta_descer2").style.display = "none";
                    document.getElementById("seta_subir2").style.display = "block";
                }
            }
            if(said === "go up"){
                if (isInViewport(descricaoInfo)) {
                    console.log("descricaoInfo");
                    var k = document.getElementById("event_imagem");
                    k.scrollIntoView();

                    document.getElementById("seta_subir").style.display = "none";
                    document.getElementById("seta_descer2").style.display = "none";
                    document.getElementById("seta_subir2").style.display = "none";
                    document.getElementById("seta_descer").style.display = "block";
                }
                if (isInViewport(maisInfo)) {
                    console.log("maisInfo");
                    var z = document.getElementById("descricao");
                    z.scrollIntoView();

                    document.getElementById("seta_descer").style.display = "none";
                    document.getElementById("seta_subir2").style.display = "none";
                    document.getElementById("seta_descer2").style.display = "block";
                    document.getElementById("seta_subir").style.display = "block";
                }
            }

        }
    }
}
