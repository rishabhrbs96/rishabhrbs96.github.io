function openNav() {
	var a = document.getElementById('symb');
	var tc_a = a ? a.textContent || a.innerText : NaN;
	if(encodeURI(tc_a)=== "%E2%98%B0") {
		document.getElementById("mySidenav").style.width = "15%";
		document.getElementById("main").style.marginLeft = "15%";
		document.getElementById("symb").innerHTML = "&#10005;";
		document.getElementById("defaultOpen").innerHTML = "Home";
		document.getElementById("defaultOpen").style.paddingLeft = "32px";
		document.getElementById("about").innerHTML = "About";
		document.getElementById("about").style.paddingLeft = "32px";
		document.getElementById("education").innerHTML = "Education";
		document.getElementById("education").style.paddingLeft = "32px";
		document.getElementById("resume").innerHTML = "Resume";
		document.getElementById("resume").style.paddingLeft = "32px";
		document.getElementById("career").innerHTML = "Career";
		document.getElementById("career").style.paddingLeft = "32px";
		document.getElementById("interests").innerHTML = "Interests";
		document.getElementById("interests").style.paddingLeft = "32px";
		document.getElementById("projects").innerHTML = "Projects";
		document.getElementById("projects").style.paddingLeft = "32px";
		document.getElementById("contact").innerHTML = "Contact";
		document.getElementById("contact").style.paddingLeft = "32px";
    }
    else {
		document.getElementById("mySidenav").style.width = "2.5%";
		document.getElementById("main").style.marginLeft= "3%";
		document.getElementById("symb").innerHTML = "&#9776;";
		document.getElementById("defaultOpen").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/home.png">';
		document.getElementById("defaultOpen").style.paddingLeft = "5px";
		document.getElementById("about").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/administrator-male.png">';
		document.getElementById("about").style.paddingLeft = "5px";
		document.getElementById("education").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/diploma.png">';
		document.getElementById("education").style.paddingLeft = "5px";
		document.getElementById("resume").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/overview-pages-2.png">';
		document.getElementById("resume").style.paddingLeft = "5px";
		document.getElementById("career").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/businessman.png">';
		document.getElementById("career").style.paddingLeft = "5px";
		document.getElementById("interests").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/medal2.png">';
		document.getElementById("interests").style.paddingLeft = "5px";
		document.getElementById("projects").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/support.png">';
		document.getElementById("projects").style.paddingLeft = "5px";
		document.getElementById("contact").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/contact-card.png">';
		document.getElementById("contact").style.paddingLeft = "5px";
    }    
}


function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/home.png">';
document.getElementById("defaultOpen").style.paddingLeft = "5px";
document.getElementById("about").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/administrator-male.png">';
document.getElementById("about").style.paddingLeft = "5px";
document.getElementById("education").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/diploma.png">';
document.getElementById("education").style.paddingLeft = "5px";
document.getElementById("resume").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/overview-pages-2.png">';
document.getElementById("resume").style.paddingLeft = "5px";
document.getElementById("career").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/businessman.png">';
document.getElementById("career").style.paddingLeft = "5px";
document.getElementById("interests").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/medal2.png">';
document.getElementById("interests").style.paddingLeft = "5px";
document.getElementById("projects").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/support.png">';
document.getElementById("projects").style.paddingLeft = "5px";
document.getElementById("contact").innerHTML = '<img src="https://png.icons8.com/metro/25/000000/contact-card-filled.png">';
document.getElementById("contact").style.paddingLeft = "5px";
