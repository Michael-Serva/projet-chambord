 $(function(){


    $(document).ready(function() {
       
       $('.responsiveNavbar').css('backgroundColor', '#d3c37b');

        if ($(window).width() <= 973){   
            $('.initialNavbar').hide();
            $('.responsiveNavbar').show();
           
        }else{
            $('.responsiveNavbar').hide();
            $('.initialNavbar').show();
        }
    
 });
 
 $( window ).resize(function() {
       
    $('.responsiveNavbar').css('backgroundColor', '#d3c37b');

     if ($(window).width() <= 973){   
         $('.initialNavbar').hide();
         $('.responsiveNavbar').show();
        
     }else{
         $('.responsiveNavbar').hide();
         $('.initialNavbar').show();
     }
 
});



    $('.sousMenu').css('display', 'none');

    console.log($(window).width());
/*sous menu hotel */
if ($(window).width() >= 973) {

$('a.nav-link.hotel').on('mouseover', function () {

    $('a.nav-link.hotel').css('textDecoration','underline').css('fontWeight','bold');
    $('.sousMenu').css('backgroundColor', '#d3c37b').fadeIn(1500);
    $('.lien1').html(`<a class="nav-link" href="hotel.html">Présentation</a>`);
    $('.lien2').html(`<a class="nav-link" aria-current="page" href="hotel.html#galerie">Galerie</a>`);
    $('.lien3').html(`<a class="nav-link" href="contact.html">Plan d'accès</a>`);
    $('.lien4').html(`<a class="nav-link" href="contact.html#contact">Contact</a>`);
    $('.lien5').html(`<a class="nav-link" href="recrutement.html">Nous rejoindre</a>`);
    
    
})
}else{
    
};

/* */
/*sous menu restaurant */
if ($(window).width() >= 973) {
$('a.nav-link.restaurant').on('mouseover', function () {
    
    $('a.nav-link.restaurant').css('textDecoration','underline').css('fontWeight','bold');
    $('.sousMenu').css('backgroundColor', 'rgba(112, 137, 91, 0.6)').fadeIn(1500);
    $('.lien1').html(``);
    $('.lien2').html(` <a class="nav-link restaurant" aria-current="page" href="restaurant.html#carte">La carte</a>`);
    $('.lien3').html(` <a class="nav-link restaurant" aria-current="page" href="restaurant.html#signature">Nos plats signatures</a>`);
    $('.lien4').html(`<a class="nav-link restaurant" aria-current="page" href="restaurant.html#carteVins">Notre carte des vins</a>`);
    $('.lien5').html(``);
});
}else{
    
};


/*sous menu chambre*/
if ($(window).width() >= 973) {
$('a.nav-link.chambre').on('mouseover', function () {
    $('a.nav-link.chambre').css('textDecoration','underline').css('fontWeight','bold');
    $('.sousMenu').css('backgroundColor', 'rgba(137, 114, 91, 0.6)').fadeIn(1500);
    $('.lien1').html(` <a class="nav-link chambre" aria-current="page" href="chambre.html#classique">Classique</a>`);
    $('.lien2').html(` <a class="nav-link chambre" aria-current="page" href="chambre.html#confort">Confort</a>`);
    $('.lien3').html(`<a class="nav-link chambre" aria-current="page" href="chambre.html#deluxe">Deluxe</a>`);
    $('.lien4').html(`<a class="nav-link chambre" aria-current="page" href="chambre.html#suite">Suite</a>`);
    $('.lien5').html(``);
});
}else{
    
};

/*sous menu spa*/
if ($(window).width() >= 973) {
    $('a.nav-link.spa').on('mouseover', function () {
        $('a.nav-link.spa').css('textDecoration','underline').css('fontWeight','bold');
        $('.sousMenu').css('backgroundColor', 'rgba(91, 137, 125, 0.6)').fadeIn(1500);
        $('.lien1').html(` <a class="nav-link spa" aria-current="page" href="spa.html#decouverte">Soin découverte</a>`);
        $('.lien2').html(` <a class="nav-link spa" aria-current="page" href="spa.html#detente">Soin détente</a>`);
        $('.lien3').html(`<a class="nav-link spa" aria-current="page" href="spa.html#relaxant">Soin relaxant</a>`);
        $('.lien4').html(`<a class="nav-link spa" aria-current="page" href="spa.html#plaisir">Soin plaisir</a>`);
        $('.lien5').html(`<a class="nav-link spa" aria-current="page" href="spa.html#evasion">Soin Evasion</a>`);
    });
}else{

    };

  $('a.nav-link').on('mouseout', function (){
        $(this).css('textDecoration' , 'none').css('fontWeight','normal');
    })

$('.sousMenu').on('mouseleave', function () {
    $('.sousMenu').hide();
    console.log('ok');
});

});
