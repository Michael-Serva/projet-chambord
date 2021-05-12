$(function(){


// La toute première chose est de modifier la fonction alert. Ainsi, on appelera non plus la methode du navigateur mais une fonction personnalisée
window.alert = function(text, aname)
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
	aname = "Erreur de saisie"
	title.innerHTML = aname;
	content.innerHTML = text;

	// Definition des styles

	var width = 250; // largeur
	var height = [100, 280]; // hauteur [min, max]

	box.style.position = "absolute";
	box.style.zIndex = 9998;
	box.style.overflox = "hidden";
	box.style.left = "50%";
	box.style.top = "50%";
	box.style.width = width + "px";
	box.style.minHeight = height[0] + "px";
	box.style.maxHeight = height[1] + "px";
	box.style.marginLeft = -(width / 2) + "px";
	box.style.marginTop = -(100 / 2) + "px";
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