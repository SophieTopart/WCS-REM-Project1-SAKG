const Sophie = document.querySelector(".lienSophie")
const Aline = document.querySelector(".lienAline")
const Kevin = document.querySelector(".lienKevin")
const Gregory = document.querySelector(".lienGregory")

Sophie.onclick = function() {
    document.location.href="Sophie.html"
}

Aline.onclick = function() {
    document.location.href="Aline.html"
}

Kevin.onclick = function() {
    document.location.href="Kevin.html"
}

Gregory.onclick = function() {
    document.location.href="Gregory.html"
}

/* Animation CV */
const modal = document.getElementById("myModal");
const spanCV = document.getElementById("logoPlus");
const spanClose = document.getElementsByClassName("close")[0];

spanCV.onclick = function() {
    modal.style.display = "block";
}

spanClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}