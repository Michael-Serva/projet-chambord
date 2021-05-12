$(function(){


// Initialisation des datepickers
    $.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );
    $( function() {
    
    var dateFormat = "dd/mm/yy",
      from = $( "#from" )
        .datepicker({
          minDate: 0,
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      }),
      dateRestau = $( "#dateRestau" ).datepicker({
        minDate: 0,
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      }),
      dateSpa = $( "#dateSpa" ).datepicker({
        minDate: 0,
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      ;
 
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
 
// Recup de la gamme de chambre ou de Spa à selectionner pour bouton radio activé
if(sessionStorage.resaToRecup){
 if(sessionStorage.getItem("resaToRecup") !== ""){
  document.getElementById(sessionStorage.getItem("resaToRecup")).checked = true ;
 }
}

// Validation du formulaire de resa d'1 chambre

document.getElementById('resaChambreValid').addEventListener('click', validationResaChambre);

function validationResaChambre(){
    let testValid = 0;
    let dateArrivee = document.getElementById('from').value; 
    let dateDepart = document.getElementById('to').value;
    while (testValid < 1 ){
        if(!isDate(dateArrivee)){
            testValid = 1;
            alert(`La date d'arrivée n'est pas valide`,'Erreur de saisie');
            break;
        }
        if (!isDate(dateDepart)){
            testValid = 1;
            alert(`La date de départ n'est pas valide`,'Erreur de saisie');
            break;
        }
        if (dateArrivee === dateDepart){
            testValid = 1;
            alert(`Vous ne passez pas de nuit sur place en choisissant le même jour d'arrivée et de départ...`,'Pas de réservation possible :');
            break;
        }
        let ok = false;
        for(let btnRadio of document.querySelectorAll('.radioResa')){  
            if (btnRadio.checked == true){
                ok = true;
                testValid = 2;
            }  
        }                                   
        if(ok==false){
            testValid = 1;
            alert(`Il faut selectionner une gamme de chambre.`,'Pas de réservation possible :');
            break;
        }
    }
    if (testValid == 2){
            // let message=`Votre réservation a bien été sauvegardée. \nCliquez sur 'Valider' pour voir votre panier \nCliquer sur 'Annuler' si vous souhaitez réserver un restaurant ou un spa`;
            // let confirmation=confirm(message);
            // if (confirmation){
                sessionStorage.setItem("panierToRecup", true);
                window.location.replace(`panier.html`);
            // }else{
            //     window.location.replace(`#resa_spa`);
            // }
        }
    }
 
// Validation du formulaire de resa du spa

document.getElementById('resaSpaValid').addEventListener('click', validationResaSpa);

function validationResaSpa(){
     let dateSpa = document.getElementById('dateSpa').value;
     let testValid = 0; 
     while (testValid < 1 ){
        if(!isDate(dateSpa)){
          testValid = 1;
            alert(`La date choisie n'est pas valide`,'Erreur de saisie');
            break;
        }
        let ok = false;
        for(let btnRadio of document.querySelectorAll('.radioResaSpa')){  
            if (btnRadio.checked == true){
                ok = true;
                testValid = 2;
            }  
        }                                   
        if(ok==false){
            testValid = 1;
            alert(`Il faut selectionner un soin.`,'Pas de réservation possible :');
            break;
        }
        else {
            // let message=`Votre réservation a bien été sauvegardée. \nCliquez sur 'Valider' pour voir votre panier \nCliquer sur 'Annuler' si vous souhaitez réserver un restaurant ou une chambre`;
            // let confirmation=confirm(message);
            // if (confirmation){
                sessionStorage.setItem("panierToRecup", true);
                window.location.replace(`panier.html`);
            // }else{
            //     window.location.replace(`#resa_restaurant`);
            // }
        }
      }
      if (testValid == 2){
        // let message=`Votre réservation a bien été sauvegardée. \nCliquez sur 'Valider' pour voir votre panier \nCliquer sur 'Annuler' si vous souhaitez réserver un restaurant ou un spa`;
        // let confirmation=confirm(message);
        // if (confirmation){
            sessionStorage.setItem("panierToRecup", true);
            window.location.replace(`panier.html`);
        // }else{
        //     window.location.replace(`#resa_spa`);
        // }
    }
    }

    // Validation du formulaire de resa du restaurant

document.getElementById('resaRestauValid').addEventListener('click', validationResaRestau);

function validationResaRestau(){
     let dateRestau = document.getElementById('dateRestau').value; 

        if(!isDate(dateRestau)){
            alert(`La date Restau choisie n'est pas valide`,'Erreur de saisie');
        }
        else {
            // let message=`Votre réservation a bien été sauvegardée. \nCliquez sur 'Valider' pour voir votre panier \nCliquer sur 'Annuler' si vous souhaitez réserver un spa ou une chambre`;
            // let confirmation=confirm(message);
            // if (confirmation){
                sessionStorage.setItem("panierToRecup", true);
                window.location.replace(`panier.html`);
            // }else{
            //     window.location.replace(`#resa_chambre`);
            // }
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