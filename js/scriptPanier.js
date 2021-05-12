
$(function(){

// Recup true si accès depuis le menu reservation, sinon la variable n'existe pas
if(sessionStorage.panierToRecup){
    document.querySelector(".panierPlein").classList.remove('hidden');
    document.querySelector(".panierVide").classList.add('hidden');
    document.getElementById('confirmPanier').addEventListener('click', ()=>{
        alert(`Ce bouton n'est pas actif, rien ne vous sera débité...`, `Confirmation de votre réservation`)})
   }
else{
    document.querySelector(".panierPlein").classList.add('hidden');
    document.querySelector(".panierVide").classList.remove('hidden');
}



});/////////////////////////////////////// 