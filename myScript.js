function lightMode() {
    var all = document.querySelectorAll(".light-mode");
    for(var i = 0; i < all.length; i++) {
        all[i].classList.toggle("light-dark");  
    }
}

function btnHom() {
    document.getElementsByClassName("pghome")[0].setAttribute('style', 'display:block');
    document.getElementsByClassName("pgskills")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgexpedu")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgprojects")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgcontact")[0].setAttribute('style', 'display:none');
}


function btnSki() {
    document.getElementsByClassName("pgskills")[0].setAttribute('style', 'display:block');
    document.getElementsByClassName("pghome")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgexpedu")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgprojects")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgcontact")[0].setAttribute('style', 'display:none');
}

function btnExp() {
    document.getElementsByClassName("pgexpedu")[0].setAttribute('style', 'display:block');
    document.getElementsByClassName("pghome")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgskills")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgprojects")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgcontact")[0].setAttribute('style', 'display:none');
}

function btnPro() {
    document.getElementsByClassName("pgprojects")[0].setAttribute('style', 'display:block');
    document.getElementsByClassName("pghome")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgskills")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgexpedu")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgcontact")[0].setAttribute('style', 'display:none');
}

function btnCon() {
    document.getElementsByClassName("pgcontact")[0].setAttribute('style', 'display:block');
    document.getElementsByClassName("pghome")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgskills")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgexpedu")[0].setAttribute('style', 'display:none');
    document.getElementsByClassName("pgprojects")[0].setAttribute('style', 'display:none');
}