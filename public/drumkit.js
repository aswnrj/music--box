keyID = {
    'r': 'crash',
    'f': 'floor-tom',
    'g': 'mid-tom',
    'h': 'high-tom',
    'j': 'snare',
    'i': 'ride',
    'o': 'hi-hat',
    'v': 'kick'
}

$(".key").on("click", function(evt) {
    var clickedButtonID = evt.target.id;
    press(clickedButtonID);
});

$(document).on("keypress", function(evt) {
    var pressedButton = evt.key.toLowerCase();
    if (pressedButton in keyID) {
        var pressedButtonID = keyID[pressedButton]
        press(pressedButtonID);
    }
});

function press(id) {
    var currentClass = "bg-dark text-light";
    var newClass = "bg-light text-dark";

    var audio = new Audio("audios/drumkit/"+id+".wav");
    audio.play();

    $("#"+id).removeClass(currentClass).addClass(newClass);
    setTimeout(function () {
        $("#"+id).removeClass(newClass).addClass(currentClass);
    }, 100);

}