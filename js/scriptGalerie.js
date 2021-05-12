$(function(){
// Au chargement de la page on affiche toutes les miniatures du fichier dataGalerie.js

// Selection de la section displayImages
const displayImage = document.querySelector('.displayImages');
const carousel = document.querySelector('.carousel-inner');

// On génére les miniatures dans la section displayImages
for(let i = 0 ; i < diaporama.length ; i++){
    displayImage.innerHTML += `
    <article class="miniature" data-index="${i}">
        <div class="card-img">
            <img src="${diaporama[i]}" class="img-thumbnail rounded float-start img-fluid miniatures" alt="photo hotel">
        </div>
    </article>`;
}

// Au survol sur la miniature, on l'affiche en grand
// Selection de la miniature
const miniatureClic = document.querySelector('.miniature');
// Detection de l'evenement survol
$('.miniature').on('mouseover', function(){
    if($(window).width()>640){
        $(this).css('transition', 'all 2s');
        $(this).css('transform', 'scale(2)');
        $(this).css('z-index', '2');
    }
    else{
        $(this).css('transition', 'all 2s');
        $(this).css('transform', 'scale(1.1)');
        $(this).css('z-index', '2');
        }
});
$('.miniature').on('mouseout', function(){
    $(this).css('z-index', '1');
    $(this).css('transition', 'all 2s');
    $(this).css('transform', 'scale(1)');
});
});/////////////////////////////////////// 