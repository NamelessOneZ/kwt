var xmlData;
var xmlData1;
var vrsta = new Array();
var naziv = new Array();
var cena = new Array();
var slika = new Array();
var opis = new Array();

var proiz=0;
var totCena=0;

function loadDoc(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		xmlData = xhttp.responseXML;
    		loadTable();
   	 	}
	};
	xhttp.open("GET", "shop.xml", true);
	xhttp.send();
}

function loadTable(){

    var x = xmlData.getElementsByTagName("proizvod");
    for(var i = 0; i < x.length ; i++)
    {
		
		
		//var t = document.createTextNode("Dodaj u korpu");    
    	vrsta[i] = x[i].getElementsByTagName("vrsta")[0].childNodes[0].nodeValue;
    	naziv[i] = x[i].getElementsByTagName("naziv")[0].childNodes[0].nodeValue;
    	cena[i] = x[i].getElementsByTagName("cena")[0].childNodes[0].nodeValue;
    	slika[i] = x[i].getElementsByTagName("slika")[0].childNodes[0].nodeValue;
		opis[i] = x[i].getElementsByTagName("opis")[0].childNodes[0].nodeValue;
		
		
    }
	
	for(var i=0; i<46; i=i+4)
	{
	var div = document.createElement("div");
		var divButton = document.createElement("div");
		div.setAttribute("class","proizvod");
		div.setAttribute("id","buttons");
		var image = document.createElement("IMG");
		var nazivBlock = document.createElement("P");
		var cenaSpan =document.createElement("SPAN");
		
	
	nazivBlock.innerHTML=naziv[i];
		image.src ="img/"+slika[i];
		cenaSpan.innerHTML="Cena: <br>"+cena[i]+" Din.";
		divButton.innerHTML = "<button value = 'Poruci' onClick = 'poruci("+i+")'>Dodaj u korpu</button>";
		//poruci.appendChild(t);
		div.appendChild(nazivBlock);
		div.appendChild(image);
		div.appendChild(cenaSpan);
		div.appendChild(divButton);
		document.getElementById("sviProizvodi").appendChild(div);
    }
}

function loadDocSvi(){
	var xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() {
    	if (xhttp1.readyState == 4 && xhttp1.status == 200) {
    		xmlData1 = xhttp.responseXML;
    		sviProzivodi();
   	 	}
	};
	xhttp1.open("GET", "shop.xml", true);
	xhttp1.send();
}

function sviProizvodi()
{
	var x = xmlData1.getElementsByTagName("proizvod");
    for(var i = 0; i < x.length ; i++)
    {
		
		
		//var t = document.createTextNode("Dodaj u korpu");    
    	vrsta[i] = x[i].getElementsByTagName("vrsta")[0].childNodes[0].nodeValue;
    	naziv[i] = x[i].getElementsByTagName("naziv")[0].childNodes[0].nodeValue;
    	cena[i] = x[i].getElementsByTagName("cena")[0].childNodes[0].nodeValue;
    	slika[i] = x[i].getElementsByTagName("slika")[0].childNodes[0].nodeValue;
		opis[i] = x[i].getElementsByTagName("opis")[0].childNodes[0].nodeValue;
		
		
    }
	for(var i=0; i<50; i++)
	{
	var div = document.createElement("div");
		var divButton = document.createElement("div");
		div.setAttribute("class","proizvod");
		div.setAttribute("id","buttons");
		var image = document.createElement("IMG");
		var nazivBlock = document.createElement("P");
		var cenaSpan =document.createElement("SPAN");
		
	
	nazivBlock.innerHTML=naziv[i];
		image.src ="img/"+slika[i];
		cenaSpan.innerHTML="Cena: <br>"+cena[i]+" Din.";
		divButton.innerHTML = "<button value = 'Poruci' onClick = 'poruci("+i+")'>Dodaj u korpu</button>";
		//poruci.appendChild(t);
		div.appendChild(nazivBlock);
		div.appendChild(image);
		div.appendChild(cenaSpan);
		div.appendChild(divButton);
		document.getElementById("sviProizvodi").appendChild(div);
    }
}

function poruci(br)
{
	var uKorpu = "<a>";
	var result = naziv[br].slice(0, 15) + (naziv[br].length > 10 ? "..." : "");
	uKorpu+=result + " - " + cena[br]+" Din.";
	var korpa = "<span>";
	proiz++;
	var cenaPr = parseInt(cena[br]);
	totCena+=cenaPr;
	korpa+= proiz + " Proizvod(a) - " + totCena + " Din.";
	document.getElementById("dropdown-content").innerHTML += uKorpu;
	document.getElementById("korpicaSpan").innerHTML = korpa;
}

function zavrsiPorudzbinu()
{
	var stvari = document.getElementById("dropdown-content").innerHTML;
	var stvariOdvojene = stvari.split("<a>");
	var korpica = document.getElementById("korpicaSpan").innerHTML;
	var korpOdv = korpica.split("-");
	var novi=window.open('','','width=400, height=400');
	novi.document.write("<p><b>VASA PORUDZBINA:</b></p>");
	for(var i=1; i<proiz+1; i++)
	{
    	novi.document.write(stvariOdvojene[i]+"<br>");
	}
	novi.document.write("Ukupno : "+korpOdv[0]+"<br>");
	novi.document.write("Ukupna cena : "+korpOdv[1]+"<br>");
	
}
