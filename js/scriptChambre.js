// Au chargement de la page on masque les détails et la modal

// Selection de la section Chambres
const detailsChambres = document.querySelector('.Chambres');
detailsChambres.classList.add('hidden');

// Selection de la modal
const modalDescriptif = document.querySelector('#modal');
modalDescriptif.classList.add('hidden');


// Affichage des détails des chambres au click
// Fonction showDetail -> doit afficher le descriptif des chambres
function showDetails(){
    let index = this.getAttribute('data-index');

    // On cache la liste des chambres
    document.querySelector('main').classList.add('hidden');

    // On affiche les détails
    detailsChambres.classList.remove('hidden');
    $('html,body').animate({scrollTop: $("#modal").offset().top}, 'fast');
     

    // On affiche les images
    for(let i = 0 ; i < chambres[index].image.length; i++){
        document.querySelector('.diapoImg'+i).src = chambres[index].image[i];
        document.querySelector('.diapoImg'+i).alt = chambres[index].gamme;
    }

    // et les descriptifs
    document.querySelector('.gamme').textContent = chambres[index].gamme;
    document.querySelector('.pitch').textContent = chambres[index].pitch;
    document.querySelector('.prix').textContent = chambres[index].prix;
    document.querySelector('.descriptif').innerHTML = chambres[index].descriptif;
 
    // On récupere une variable de session pour selectionner la gamme ds la page reservation
    document.querySelector('.resa').addEventListener('click', ()=>{
        sessionStorage.setItem("resaToRecup",chambres[index].resa);
        window.location.replace(`reservations.html#resa_chambre`);
    });
}

// Ecouteur d'evt sur les boutons "en savoir plus..."
const cardChambres = document.querySelectorAll('.openModal');
for( let cardSingle of cardChambres){
    cardSingle.addEventListener('click', showDetails);
}

// Ecouteur d'evt pour revenir sur la liste des chambres
const btnBack = document.querySelector('.back button');
btnBack.addEventListener('click',()=>{
    // On cache les détails
    document.querySelector('main').classList.remove('hidden');
    modalDescriptif.classList.add('hidden');
    detailsChambres.classList.add('hidden');
});

// Ecouteur d'evt pour afficher la modal
const btnModal = document.querySelector('.btn');
btnModal.addEventListener('click',()=>{
    modalDescriptif.classList.remove('hidden');
});

// Ecouteur d'evt pour cacher la modal
modalDescriptif.addEventListener('click', function(e){
    // on cache la modal
    modalDescriptif.classList.add('hidden');
});

// Au click sur le bouton reserver, on ouvre la page reservation et on préselectionne la gamme de chambre
document.querySelector('.resaClassique').addEventListener('click', ()=>{
    sessionStorage.setItem("resaToRecup","classique");
    window.location.replace(`reservations.html#resa_chambre`);
});
document.querySelector('.resaConfort').addEventListener('click', ()=>{
    sessionStorage.setItem("resaToRecup","confort");
    window.location.replace(`reservations.html#resa_chambre`);
});
document.querySelector('.resaDeluxe').addEventListener('click', ()=>{
    sessionStorage.setItem("resaToRecup","deluxe");
    window.location.replace(`reservations.html#resa_chambre`);
});
document.querySelector('.resaSuite').addEventListener('click', ()=>{
    sessionStorage.setItem("resaToRecup","suite");
    window.location.replace(`reservations.html#resa_chambre`);
});



