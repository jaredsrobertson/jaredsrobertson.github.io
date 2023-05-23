function lightMode() {
    var all = document.querySelectorAll(".light-mode");
    for(var i = 0; i < all.length; i++) {
        all[i].classList.toggle("light-dark");  
    }
}

function h1Hover() {
    var image = document.getElementsByClassName("photo")[0];
    image.classList.toggle("hover");
}
