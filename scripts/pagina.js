

window.onload = init;

function init() {
    // recoletar datos
    console.log("entrro");
	document.getElementById("enviara").onclick = function(){

		var nombre = document.getElementById("form")["nombre"].value;
		var celular = document.getElementById("form")["celular"].value;
		var cedula = document.getElementById("form")["cedula"].value;
        var email = document.getElementById("form")["email"].value;
		var cuota = document.getElementById("form")["cuota"].value;
	
		envioDatos(nombre,celular,cedula,email,cuota);
		}
	
		function envioDatos(nombre,celular,cedula,email,cuota){
		//JSON Parte
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status ==200) {
	
				console.log(this.responseText);
				
			}
		};
		xhttp.open("POST", "scripts/registro.php", true);
		var parameters="nombre="+nombre+"&celular="+celular+"&cedula="+cedula+"&email="+email+"&cuota="+cuota;
	
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
		xhttp.send(parameters);

	}
}