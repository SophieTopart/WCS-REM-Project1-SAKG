const boutonCta = document.querySelector("#bouton-cta");
const popup = document.querySelector("#formulaire-popup");

boutonCta.addEventListener("click", () => {
    popup.classList.toggle("affichage-popup");
})



