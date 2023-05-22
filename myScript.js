function lightMode() {
    var element = document.body;
    element.classList.toggle("light");                  
}

function lightsOn() {
    var image =  document.getElementById("lb");
    image.classList.toggle("lightson");  
}

function hsLightsOn() {
    var image =  document.getElementById("headshot");
    image.classList.toggle("lights");  
}

function h1Hover() {
    var image = document.getElementById("headshot");
    image.classList.toggle("hover");
}
