$(function(){

 
// Validation du formulaire de contact

document.getElementById('contactValid').addEventListener('click', validationContact);

function validationContact(){
    let testValid = 0;
    let prenom = document.getElementById('inputPrenomContact').value; 
    let nom = document.getElementById('inputNomContact').value;
    let email = document.getElementById('inputEmailContact'); 
    let objet = document.getElementById('inputSujetContact').value;
    let categorie = document.getElementById('inputCategorie').value;
    let message = document.getElementById('messageContact').value;
    while (testValid < 1 ){
        if(prenom == ""){
            testValid = 1;
            alert(`Vous n'avez pas indiqué votre prénom`, `Contactez l'hôtel Chambord*****`);
            break;
        }
        if(nom == ""){
            testValid = 1;
            alert(`Vous n'avez pas indiqué votre nom`, `Contactez l'hôtel Chambord*****`);
            break;
        }
        if(!validationEmail(email)){
            testValid = 1;
            break;
        }
        if(objet == ""){
            testValid = 1;
            alert(`Vous n'avez pas indiqué d'objet`, `Contactez l'hôtel Chambord*****`);
            break;
        }
        if(categorie == ""){
            testValid = 1;
            alert(`Merci de choisir le service destinataire de votre message`, `Contactez l'hôtel Chambord*****`);
            break;
        }
        if(message == ""){
            testValid = 1;
            alert(`Merci de rédiger quelques lignes à notre attention`, `Contactez l'hôtel Chambord*****`);
            break;
        }
        testValid = 2;
    }
    if (testValid == 2){
        alert(`Votre message a bien été transmis au service concerné. <br> Nous vous contacterons par email très rapidement`,`Contactez l'hôtel Chambord*****`)
        window.location.replace(`#`);
    }
}

// Fonction de test de validation sur une adresse email
function validationEmail(email){   
    if (email.value == ""){ 
        alert("Vous n'avez pas saisi d'adresse email.", 'Erreur de saisie'); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0){                 
        alert("Votre adresse email n'est pas valide.", 'Erreur de saisie'); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0){                 
        alert("Votre adresse email n'est pas valide.", 'Erreur de saisie'); 
        email.focus(); 
        return false; 
    }    
        return true; 
}

});/////////////////////////////////////// 