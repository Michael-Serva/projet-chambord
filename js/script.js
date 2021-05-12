$(function(){

//Gestion de la sidenav
$(".fondLogo").on("mouseover", function () {
	$("span",this).stop(true).animate({right: 50, opacity: 1},1000);
	$(this).stop(true).animate({opacity: 0.4 },1000).animate({opacity:1},1000).delay(2000);
});
$(".fondLogo").on("mouseout", function () {

	$("span",this).animate({right: 0 , opacity :0},500);
	$(this).animate({right: 0 },100).animate({opacity : 1},500);
});

//gestion de la langue
let imgFR = 
$('.drapeauFR').on('click', function () {
	$('span.drapeau img').attr('src','img/logo-fr-2.png' );
	console.log(this);
})

$('.drapeauEN').on('click', function () {
	$('span.drapeau img').attr('src','img/logo-en.jpg' );
	alert(`La traduction sera très bientôt disponible`,'Version anglaise')
});

// Validation pour inscription à la newsletter
document.getElementById('inputEmailValid').addEventListener('click', validNewsLetter);

function validNewsLetter(){
    let inputEmail = document.getElementById('inputEmail'); 
    if(validationEmail(inputEmail)){
        alert(`Votre inscription à notre newsletter a bien été prise en compte.  <Br> Vous recevrez dès demain toutes nos communications !`, 'Inscription à la Newsletter');
    }
}

// Action sur le bouton imprimer
var bouton = document.getElementById('button-imprimer');
bouton.onclick = function(e) {
  e.preventDefault();
  print();
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
        email.value = '';
        return true; 
}


// Au click sur le bouton reserver de la navBar Verticale, on ouvre la page reservation mais sans préselectionner la gamme de chambre (-> remise à zero si 1 btn radio est déjà coché)
document.querySelector('.fondChambre').addEventListener('click', ()=>{
    for(let btnRadio of document.querySelectorAll('.radioResa')){
        btnRadio.checked = false;
    }
});

// Au click sur le bouton reserver de la navBar Verticale, on ouvre la page reservation mais sans préselectionner le soin (-> remise à zero si 1 btn radio est déjà coché)
document.querySelector('.fondSpa').addEventListener('click', ()=>{
    for(let btnRadio of document.querySelectorAll('.radioResaSpa')){
        btnRadio.checked = false;
    }
});

alert = function(text, aname)
{
	// Creation de la boite
	var div = document.createElement("div");
	var box = document.body.appendChild(div);
	box.setAttribute("class", "alertBox");
	box.style.display = "none";	
	
	// Creation titre
	var span = document.createElement("span");
	var title = box.appendChild(span);
	title.setAttribute("class", "alertTitle");
	
	// Bouton fermant
	var img = document.createElement("img");
	var close = box.appendChild(img);
	close.src = "img/logo-fermer.png";
	close.width = 26;
	close.onclick = function()
	{
		document.body.removeChild(box);
	}
	
	// Creation du contenu
	span = document.createElement("span");
	var content = box.appendChild(span);
	content.setAttribute("class", "alertContent");
	
	// Insertion contenus
	if(typeof(aname) == "undefined")
	aname = "Alerte..."
	title.innerHTML = aname;
	content.innerHTML = text;

	// Definition des styles

	var width = [250, 350]; // largeur
	var height = [100, 280]; // hauteur [min, max]

	box.style.position = "fixed";
	box.style.zIndex = 9998;
	box.style.overflox = "hidden";
	box.style.left = "50%";
	box.style.top = "50%";
	// box.style.width = width + "px";
    box.style.minWidth = width[0] + "px";
	box.style.maxWidth = width[1] + "px";
	box.style.minHeight = height[0] + "px";
	box.style.maxHeight = height[1] + "px";
	// box.style.marginLeft = -(width / 2) + "px";
	// box.style.marginTop = -(box.offsetHeight / 2) + "px";
    box.style.marginLeft = -(width[0] / 2) + "px";
	box.style.marginTop = -(height[0] / 2) + "px";
	box.style.border = "1px #4c3e2c solid";
	box.style.backgroundColor = "#fffdfa";
	box.style.fontFamily = "sans-serif";
	// CSS3
	box.style.borderTopRadius = "15px";
	box.style.borderBottomRadius = "5px";
	box.style.MozBorderRadius = "10px";
	box.style.boxShadow = "2px 2px 5px #4c3e2c";
	box.style.MozBoxShadow = "2px 2px 12px #4c3e2c";
	
	close.style.position = "absolute";
	close.style.cursor = "pointer";
	close.style.zIndex = 9999;
	close.style.right = "2px";
	close.style.top = "2px";

	title.style.display = "block";
	title.style.width = "100%";
	title.style.height = "32px";
	title.style.lineHeight = "32px";
	title.style.textAlign = "center";
	title.style.backgroundColor = "#ce9c4c";
	title.style.color = "#FFFFFF";
	// title.style.fontWeight = "bold";
	// CSS3
	// box.style.borderRadius = "5px";
	// box.style.MozBorderRadius = "5px";
	
	content.style.display = "block";
	content.style.width = (width - 8) + "px";
	content.style.minHeight = (height[0] - 40) + "px";
	content.style.margin = "4px";
    content.style.padding = "15px";
	content.style.fontSize = "14px";
	content.style.overflow = "auto";
    content.style.textAlign = "center";
    content.style.color = "#ce9c4c";
    

	// Affichage
	box.style.display = "block";
	
	// Cette fonction recursive permet de replacer la boite au centre meme si la fenetre est redimensionée
	replacement(box);	
}

function replacement(boite)
{
	boite.style.marginTop = -(boite.offsetHeight / 2) + "px";
	setTimeout(function(){replacement(boite)}, 200);
}
});/////////////////////////////////////// 