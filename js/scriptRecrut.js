$(function(){

 
// Validation du formulaire de candidature

document.getElementById('btnRecrut').addEventListener('click', validationRecrut);

function validationRecrut(){
    let testValid = 0;
    let prenom = document.getElementById('inputPrenomContact').value; 
    let nom = document.getElementById('inputNomContact').value;
    let email = document.getElementById('inputEmailContact'); 
    let message = document.getElementById('messageContact').value;
    let cv = document.querySelector('#upfileCV').value;
    let lm = document.querySelector('#upfileLettre').value;
    console.log(cv);
    console.log(lm);
    while (testValid < 1 ){
        if(prenom == ""){
            testValid = 1;
            alert(`Vous n'avez pas indiqué votre prénom`, `Votre candidature`);
            break;
        }
        if(nom == ""){
            testValid = 1;
            alert(`Vous n'avez pas indiqué votre nom`, `Votre candidature`);
            break;
        }
        if(!validationEmail(email)){
            testValid = 1;
            break;
        }
        if(message == ""){
            testValid = 1;
            alert(`Merci de rédiger quelques lignes à notre attention`, `Votre candidature`);
            break;
        }
        if(cv == ""){
            testValid = 1;
            alert(`Vous n'avez pas joint votre CV`, `Votre candidature`);
            break;
        }
        if(lm == ""){
            testValid = 1;
            alert(`Vous n'avez pas téléchargé votre lettre de motivation`, `Votre candidature`);
            break;
        }
        testValid = 2;
    }
    if (testValid == 2){
        alert(`Votre candidature a bien été transmise au service concerné avec les pièces jointes. <br> Nous vous contacterons par email très rapidement`,'Votre candidature')
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