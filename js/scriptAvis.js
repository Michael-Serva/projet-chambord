$(function(){

// Initialisation des datepickers
$.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );
$( function() {

var dateFormat = "dd/mm/yy",
  dateAvis = $( "#dateAvis" ).datepicker({
    maxDate: 0,
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1
  });

function getDate( element ) {
  var date;
  try {
    date = $.datepicker.parseDate( dateFormat, element.value );
  } catch( error ) {
    date = null;
  }

  return date;
}
} );


// Validation du formulaire de dépot des avis

document.getElementById('avisValid').addEventListener('click', validationContact);

function validationContact(){
    let testValid = 0; 
    let titre = document.getElementById('titreAvis').value;
    let date = document.getElementById('dateAvis').value;
    let message = document.getElementById('messageAvis').value;
    while (testValid < 1 ){
        if(message == ""){
            testValid = 1;
            alert(`Merci de rédiger quelques lignes sur votre experience`, `Hôtel Chambord *****`);
            break;
        }
        if (!isDate(date)){
            testValid = 1;
            alert(`La date d'arrivée n'est pas valide`,`Hôtel Chambord *****`);
            break;
        }
        if(titre == ""){
            testValid = 1;
            alert(`Donner un titre à votre commentaire`, `Hôtel Chambord *****`);
            break;
        }
        testValid = 2;
    }
    if (testValid == 2){
        alert(`Votre avis a bien été pris en compte.`,'Merci !')
        window.location.replace(`#`);
    }
}
// Fonction de test de validation de dates
function isDate(d) {
    // Cette fonction permet de vérifier la validité d'une date au format jj/mm/aa ou jj/mm/aaaa
    
    if (d == "") // si la variable est vide on retourne faux
        return false;
    
    e = new RegExp("^[0-9]{1,2}\/[0-9]{1,2}\/([0-9]{2}|[0-9]{4})$");
    
    if (!e.test(d)) // On teste l'expression régulière pour valider la forme de la date
        return false; // Si pas bon, retourne faux

    // On sépare la date en 3 variables pour vérification, parseInt() converti du texte en entier
    j = parseInt(d.split("/")[0], 10); // jour
    m = parseInt(d.split("/")[1], 10); // mois
    a = parseInt(d.split("/")[2], 10); // année

    // Si l'année n'est composée que de 2 chiffres on complète automatiquement
    if (a < 1000) {
        if (a < 89)	a+=2000; // Si a < 89 alors on ajoute 2000 sinon on ajoute 1900
        else a+=1900;
    }

    // Définition du dernier jour de février
    // Année bissextile si annnée divisible par 4 et que ce n'est pas un siècle, ou bien si divisible par 400
    if (a%4 == 0 && a%100 !=0 || a%400 == 0) fev = 29;
    else fev = 28;

    // Nombre de jours pour chaque mois
    nbJours = new Array(31,fev,31,30,31,30,31,31,30,31,30,31);

    // Enfin, retourne vrai si le jour est bien entre 1 et le bon nombre de jours, idem pour les mois, sinon retourn faux
    return ( m >= 1 && m <=12 && j >= 1 && j <= nbJours[m-1] );
}



});/////////////////////////////////////// 