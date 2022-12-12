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

            if (said === "events") {
                console.log("said " + said);
                window.location.href='events.html';
            }
        }
    }
}
