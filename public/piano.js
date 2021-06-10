$(".key").on("click", function(evt) {
    const id = evt.target.id;
    press(id);
});

const idKeys = {'a': 'C',
                's': 'D',
                'd': 'E',
                'f': 'F',
                'g': 'G',
                'h': 'A1',
                'j': 'B1',
                'k': 'C1',
                'l': 'D1',
                ';': 'E1',
                'w': 'C-s',
                'e': 'D-s',
                't': 'F-s',
                'y': 'G-s',
                'u': 'A1-s',
                'o': 'C1-s',
                'p': 'D1-s'
                };

$(document).on("keypress", function(evt) {
    const pressedKey = evt.key.toLowerCase();
    if (pressedKey in idKeys) press(idKeys[pressedKey]);
});

function press(id) {
    var audio = new Audio("audios/piano/"+id+".wav");
    audio.play();
    
    if (id[id.length-1]=='s') {
        $('#'+id).addClass("black-pressed");
        setTimeout(function() {
            $('#'+id).removeClass("black-pressed");
        }, 200);
    }
    else {
        $('#'+id).addClass("white-pressed");
        setTimeout(function() {
            $('#'+id).removeClass("white-pressed");
        }, 200);
    }
}