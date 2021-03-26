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

/* Dark mode */
function darkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
    const modalContent = document.getElementById("modalContent");
    modalContent.classList.remove("modalContent");
    modalContent.classList.toggle("dark-mode-modal");
    const entetePopup = document.getElementById("entete-popup");
    entetePopup.classList.add("entete-popup-dark") 
    const popup = document.getElementById("popup-formulaire");
    popup.classList.remove("popup-formulaire");
    popup.classList.add("popup-formulaire-dark");
}

/* Formulaire */

const boutonCta = document.querySelector("#bouton-cta");
const popup = document.querySelector("#formulaire-popup");

boutonCta.addEventListener("click", () => {
    popup.classList.toggle("affichage-popup");
})


// bouton croix formulaire
const boutonFermetureFormulaire = document.querySelector("#bouton-fermeture-formulaire");

boutonFermetureFormulaire.addEventListener("click", () => {
    popup.classList.toggle("affichage-popup");
})

