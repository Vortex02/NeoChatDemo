//file:///Users/homework/Desktop/UniChat-dev-unstable-master/profile/index.html?k=inf&u=iPhoenix&r=Admin

//Thanks, guys. It means a lot. - The Development Team
var closedBetaTesters = ["SM84CE","TheLastMillennial","TLM","Battlesqud","xMarminq_"];

function getMessage(tag) {
    var href = window.location.href;
    var reg = new RegExp( '[?&]'+tag+'=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

window.onload = function() {
	var user = decodeURI(getMessage("u"));
	var karma = getMessage("k");
	console.log(karma);
	if (user !== "undefined" && karma !== "undefined" && rank !== "undefined" && user && rank && karma && user !== "null" && karma !== "null" && rank !== "null") {
	document.getElementById("username").innerText = user;
	document.getElementById("karma").innerText = "Karma: +" + karma;
	document.getElementById("rank").innerHTML = getTitle(user, karma);
}
else
{
	document.getElementById("username").innerText = "That user does not appear in our database, or the request was badly formatted.";
	document.getElementById("rank").innerHTML = "Sorry!";
}
var uri = window.location.toString();
	if (uri.indexOf("?") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?"));
    window.history.replaceState({}, document.title, clean_uri);
	}
}

function getTitle(username, karma) {
	if (username == "Drewster30" || username == "iPhoenix" || username == "_iPhoenix_") {
		if (username == "Drewster30") {
			document.getElementById("username").style.color = "#0f0";
			document.getElementById("username").style.fontWeight = "bold";
			return "Moderator";
		}
		else
		{
			document.getElementById("username").style.color = "#d50";
			document.getElementById("username").style.fontWeight = "bolder";
			if (username == "iPhoenix" || username == "_iPhoenix_") {
				document.getElementById("username").style = "background: -webkit-linear-gradient(#f83000, #f90); linear-gradient(#f83000, #f90); -webkit-background-clip: text; -webkit-text-fill-color: transparent;";
			}
			return "Admin";
		}
	}
	else {
		if (closedBetaTesters.indexOf(username) != -1) {
			document.getElementById("username").style.textShadow = "#999 0px 0px 100px";
			return  "Closed Beta Tester";
		}
		if (karma < 10) {
			return "New User";
		}
		if (karma >= 10 && karma < 25) {
			return "User";
		}
		if (karma >= 25 && karma < 50) {
			return "Member";
		}
		if (karma >= 50 && karma < 100) {
			return "Well-Respected Member";
		}
		if (karma >= 100) {
			return "^^ has no life";
		}
	}
}