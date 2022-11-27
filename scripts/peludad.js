// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBu3frHLBVvoT4Vr_0qinAwo5BXkPr_P6A",
	authDomain: "vozanimal-dadac.firebaseapp.com",
	projectId: "vozanimal-dadac",
	storageBucket: "vozanimal-dadac.appspot.com",
	messagingSenderId: "127182835008",
	appId: "1:127182835008:web:5a5d063bea7623f4597ea5",
	measurementId: "G-VXCM4LZXXQ"
  };

window.onload = init;

function init() {
    // recoletar datos
    console.log("entrro");
	document.getElementById("enviara").onclick = function(){

        console.log("entrro");
		var imagen = document.getElementById("form1")["imagen"].value;
		var nombre = document.getElementById("form2")["nombre"].value;
		var raza = document.getElementById("form3")["raza"].value;
        var sexo = document.getElementById("form4")["sexo"].value;
		var años = document.getElementById("form5")["años"].value;

        var prueba = imagen;
		var prueba1 = prueba.split('C:\\fakepath\\');
		var prueba2 = prueba1[1];
	
		envioDatos(prueba2,nombre,raza,sexo,años);
		}
	
		function envioDatos(imagen,nombre,raza,sexo,años){
		//JSON Parte
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status ==200) {
	
				console.log(this.responseText);
				
			}
		};
		xhttp.open("POST", "scripts/registrop.php", true);
		var parameters="imagen="+imagen+"&nombre="+nombre+"&raza="+raza+"&sexo="+sexo+"&años="+años;
	
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
		xhttp.send(parameters);

	}
}