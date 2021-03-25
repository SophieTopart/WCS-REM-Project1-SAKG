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

//gestion du bouton envoyer
const boutonEnvoyer = document.querySelector("#formulaire-contact");
const messageNom = document.querySelector("#message-nom");
const messageEmail = document.querySelector("#message-email");
const messageContenu = document.querySelector("#message-contenu");

boutonEnvoyer.addEventListener("submit", (event) => {
    event.preventDefault();

    messageNom.value = "";
    messageEmail.value = "";
    messageContenu.value = "";

    alert("Votre message a bien été envoyé");

    popup.classList.toggle("affichage-popup");

})



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
    modalContent.classList.toggle("dark-mode-modal");
}


