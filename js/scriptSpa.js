$(document).ready(function(){
$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

// Au click sur le bouton reserver, on ouvre la page reservation et on préselectionne le soin
document.querySelector('.resaSpaDecouverte').addEventListener('click', ()=>{
  sessionStorage.setItem("resaToRecup","decouverte");
  window.location.replace(`reservations.html#resa_spa`);
});
document.querySelector('.resaSpaDetente').addEventListener('click', ()=>{
  sessionStorage.setItem("resaToRecup","detente");
  window.location.replace(`reservations.html#resa_spa`);
});
document.querySelector('.resaSpaRelaxant').addEventListener('click', ()=>{
  sessionStorage.setItem("resaToRecup","relaxant");
  window.location.replace(`reservations.html#resa_spa`);
});
document.querySelector('.resaSpaPlaisir').addEventListener('click', ()=>{
  sessionStorage.setItem("resaToRecup","plaisir");
  window.location.replace(`reservations.html#resa_spa`);
});
document.querySelector('.resaSpaEvasion').addEventListener('click', ()=>{
  sessionStorage.setItem("resaToRecup","evasion");
  window.location.replace(`reservations.html#resa_spa`);
});

});