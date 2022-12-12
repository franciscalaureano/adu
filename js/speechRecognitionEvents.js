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
            console.log("said " + said);
            if (said === "filter") {
                document.getElementById("filterPopUpContainer").style.display = "flex";
            }
            if (said === "music") {
                music_button.classList.toggle("filterButtonSelected");

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
                document.getElementById("filterPopUpContainer").style.display = "none";
            }
            if(said === "one" || said === "1"){
                window.location.href='info_event.html';
            }
            if(said === "back"){
                window.location.href='home.php';

            }
        }
    }
}
