var jsonData;

function loadSifre(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            jsonData = JSON.parse(xhttp.responseText);
        }
    };
    xhttp.open("GET", "js/login.json", true);
    xhttp.send();
}

function checkUserPass() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
	var ime = username.split("@");
    var users = jsonData.users;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            alert('Dobrodosli '+ ime[0]+"!");
            window.location="index.html";
			alert('Dobrodosli '+ ime[0]+"!");
            
            return;
        }
    }
    alert('Korisnicko ime i lozinka nisu ispravni!');
    
}
