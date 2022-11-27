

window.onload = init;
function init() {
    pintar();
    llenar();
	elim();
    console.log("ola")
	
}

function pintar() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			let espacio = document.getElementById('peludos');

			var data = JSON.parse(this.responseText);
			var img = data;
			var prub = img.length;
			console.log(prub);

			for (let index = 0; index < img.length; index++) {

                var imgagene = '<div class="nompel" > <span> <h1 class="nompell">nombre</h1> </span></div>'
				var cssc ='<style> .nompel{background: #5496FF;font-size: 15px;color: #000000;padding: 15px;}</style>'
                console.log('pinto');
				espacio.innerHTML += imgagene;
                espacio.innerHTML += cssc;
			}
		}
	};
	xhttp.open('GET', 'scripts/galeriaa.php', true);
	xhttp.send();

    //raza
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			let espacio = document.getElementById('raza');

			var data = JSON.parse(this.responseText);
			var img = data;
			var prub = img.length;
			console.log(prub);

			for (let index = 0; index < img.length; index++) {

                var imgagene = '<div class="razpel" > <span> <h1 class="razpell">raza</h1> </span></div>'
				var cssc ='<style> .razpel{background: #5496FF;font-size: 15px;color: #000000;padding: 15px;}</style>'
                console.log('pinto');
				espacio.innerHTML += imgagene;
                espacio.innerHTML += cssc;
			}
		}
	};
	xhttp.open('GET', 'scripts/galeriaa.php', true);
	xhttp.send();

    //imagen
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			let espacio = document.getElementById('imagenpel');

			var data = JSON.parse(this.responseText);
			var img = data;
			var prub = img.length;
			console.log(prub);

			for (let index = 0; index < img.length; index++) {

                var imgagene = '<div class="impel"> <span> <h1 class="impell">raza</h1> </span></div>'
				var cssc ='<style> .impel{background: #5496FF;font-size: 15px;color: #000000;padding: 15px;}</style>'
                console.log('pinto');
				espacio.innerHTML += imgagene;
                espacio.innerHTML += cssc;
			}
		}
	};
	xhttp.open('GET', 'scripts/galeriaa.php', true);
	xhttp.send();

}

function llenar() {
	var xhttp = new XMLHttpRequest();
	let imagen = document.getElementById('peludos');
	let imagene = document.getElementsByClassName('nompel');
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			var data = JSON.parse(this.responseText);
			var img = data;
            console.log(img[1].raza);
			for (let index = 0; index < imagene.length; index++) {
                imagene.item(index).getElementsByClassName('nompell').item(0).innerHTML="id " + img[index].id + " - " +img[index].nombre; 
			}
		}
	};
	xhttp.open('GET', 'scripts/galeriaa.php', true);
	xhttp.send();

    //raza
    var xhttp = new XMLHttpRequest();
	let imagenn = document.getElementById('raza');
	let imagenee = document.getElementsByClassName('razpel');
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			var data = JSON.parse(this.responseText);
			var img = data;
            console.log(img[1].raza);
			for (let index = 0; index < imagene.length; index++) {
                imagenee.item(index).getElementsByClassName('razpell').item(0).innerHTML=img[index].raza;
			}
		}
	};
	xhttp.open('GET', 'scripts/galeriaa.php', true);
	xhttp.send();

    //imagen
    var xhttp = new XMLHttpRequest();
	let imagennn = document.getElementById('imagenpel');
	let imageneee = document.getElementsByClassName('impel');
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			var data = JSON.parse(this.responseText);
			var img = data;
            console.log(img[1].raza);
			for (let index = 0; index < imagene.length; index++) {
                imageneee.item(index).getElementsByClassName('impell').item(0).innerHTML=img[index].imagen;
			}
		}
	};
	xhttp.open('GET', 'scripts/galeriaa.php', true);
	xhttp.send();
}

function elim() {
	// recoletar datos
    console.log("entrro");
	document.getElementById("enviara").onclick = function(){

		var nombre = document.getElementById("form")["idpel"].value
	
		envioDatos(nombre);
		}
	
		function envioDatos(nombre){
		//JSON Parte
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status ==200) {
	
				console.log(this.responseText);
				
			}
		};
		xhttp.open("POST", "scripts/eliminar.php", true);
		var parameters="nombre="+nombre;
	
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
		xhttp.send(parameters);

	}
}