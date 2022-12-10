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

    // Speech recognized event
    function gotSpeech() {
        // Something is there
        // Get it as a string, you can also get JSON with more info
        console.log(speechRec);
        if (speechRec.resultValue) {
            let said = speechRec.resultString;

            if (said === "login") {
                console.log("said " + said);
                window.location.href='home.html';
            }

            if (said === "events") {
                console.log("said " + said);
                window.location.href='before_starting.html';
            }
            if (said === "filter") {
                console.log("said " + said);
                //open filter
            }
            if (said === "music") {
                console.log("said " + said);
                //selecionar musica
            }
            if (said === "close") {
                console.log("said " + said);
                //fecha filter
            }
            if (said === "second") { //como fazemos isto?
                console.log("said " + said);
                //fecha filter
            }
            if (said === "go") {
                console.log("said " + said);
                //botao go selecionado
            }

        }
    }
}
