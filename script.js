const Sophie = document.querySelector(".lienSophie")
const Aline = document.querySelector(".lienAline")
const Kevin = document.querySelector(".lienKevin")
const Gregory = document.querySelector(".lienGregory")

Sophie.onclick = function (){
    document.location.href="Sophie.html"
}

Aline.onclick = function (){
    document.location.href="Aline.html"
}

Kevin.onclick = function (){
    document.location.href="Kevin.html"
}

Gregory.onclick = function (){
    document.location.href="Gregory.html"
}

/* Dark mode */
function darkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
    const modalContent = document.getElementById("modalContent");
    modalContent.classList.toggle("dark-mode-modal");    
}


