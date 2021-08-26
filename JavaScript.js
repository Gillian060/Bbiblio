var compte_a_rebours = document.getElementById("car");
var date_actuelle = new Date();
var date_evenement = new Date ("Jan 1 00:00:00 2022");
var total_secondes = (date_evenement - date_actuelle) / 1000;
var jours = Math.floor(total_secondes / (60 * 60 * 24));

if (total_secondes < 0)
{
	car.innerHTML = "0J";
	
}
else
{
	car.innerHTML = "Résultats dans : "+jours+"J";
}

// Condition mot de passe //

function verification(event) 
{ 
	let msg = document.getElementById("msg");
	let str = document.getElementById("mdp").value; 
	let str2 = document.getElementById("mdp2").value;
	if (str.match( /[0-9]/g) && 
			str.match( /[A-Z]/g) && 
			str.match(/[a-z]/g) &&
			str.length >= 10)
			msg.style.visibility = "hidden"
	else
		event.preventDefault();
		msg.style.visibility = "visible"; 
}

// Verification correspondance mot de passe //
document.getElementById("mdp2").addEventListener("keyup", verification2);

function verification2(event)
{
	let msg2 = document.getElementById("msg2");
	let str = document.getElementById("mdp").value; 
	let str2 = document.getElementById("mdp2").value;

	if (str != str2)
	{
	document.getElementById("submit").disabled = true;
	document.getElementById("mdp2").style.border = "solid";
	document.getElementById("mdp2").style.borderColor = "red";
	}
	else
	{
	document.getElementById("submit").disabled = false;
	document.getElementById("mdp2").style.border = "none";
	}
}

// Verification correspondance E-Mail //

document.getElementById("email2").addEventListener("keyup", verification3);

function verification3(event)
{
	let msg = document.getElementById("msg2");
	let str = document.getElementById("email").value; 
	let str2 = document.getElementById("email2").value;

	if (str != str2)
	{
	document.getElementById("submit").disabled = true;
	document.getElementById("email2").style.border = "solid";
	document.getElementById("email2").style.borderColor = "red";
	}
	else
	{
	document.getElementById("submit").disabled = false;
	document.getElementById("email2").style.border = "none";
	}
}