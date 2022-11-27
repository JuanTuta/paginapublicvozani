

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

			let espacio = document.getElementById('padrino');

			var data = JSON.parse(this.responseText);
			var img = data;
			var prub = img.length;
			console.log(prub);

			for (let index = 0; index < img.length; index++) {

                var imgagene = '<div class="papad" > <span> <h1 class="papadd">nombre del padrino</h1> </span></div>'
				var cssc ='<style> .papad{background: #5496FF;font-size: 10px;color: #000000;padding: 15px;}</style>'
                console.log('pinto');
				espacio.innerHTML += imgagene;
                espacio.innerHTML += cssc;
			}
		}
	};
	xhttp.open('GET', 'scripts/padrinoss.php', true);
	xhttp.send();

    //peludo
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			let espacio = document.getElementById('peludo');

			var data = JSON.parse(this.responseText);
			var img = data;
			var prub = img.length;
			console.log(prub);

			for (let index = 0; index < img.length; index++) {

                var imgagene = '<div class="pelpad" > <span> <h1 class="pelpadd">peludo</h1> </span></div>'
				var cssc ='<style> .pelpad{background: #5496FF;font-size: 10px;color: #000000;padding: 15px;}</style>'
                console.log('pinto');
				espacio.innerHTML += imgagene;
                espacio.innerHTML += cssc;
			}
		}
	};
	xhttp.open('GET', 'scripts/galeriaa.php', true);
	xhttp.send();

    //cuota
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			let espacio = document.getElementById('cuota');

			var data = JSON.parse(this.responseText);
			var img = data;
			var prub = img.length;
			console.log(prub);

			for (let index = 0; index < img.length; index++) {

                var imgagene = '<div class="cupad"> <span> <h1 class="cupadd">cuota</h1> </span></div>'
				var cssc ='<style> .cupad{background: #5496FF;font-size: 10px;color: #000000;padding: 15px;}</style>'
                console.log('pinto');
				espacio.innerHTML += imgagene;
                espacio.innerHTML += cssc;
			}
		}
	};
	xhttp.open('GET', 'scripts/padrinoss.php', true);
	xhttp.send();

    //mensaje
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			let espacio = document.getElementById('mensaje');

			var data = JSON.parse(this.responseText);
			var img = data;
			var prub = img.length;
			console.log(prub);

			for (let index = 0; index < img.length; index++) {

                var imgagene = '<div class="infof1"> <a tabindex="13" href="" class="abtnf3">Mensaje</a></div>'
                console.log('pinto');
				espacio.innerHTML += imgagene;
			}
		}
	};
	xhttp.open('GET', 'scripts/padrinoss.php', true);
	xhttp.send();

}

function llenar() {
	var xhttp = new XMLHttpRequest();
	let imagen = document.getElementById('padrino');
	let imagene = document.getElementsByClassName('papad');
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			var data = JSON.parse(this.responseText);
			var img = data;
           //console.log(img[1].raza);
			for (let index = 0; index < imagene.length; index++) {
                imagene.item(index).getElementsByClassName('papadd').item(0).innerHTML="id " + img[index].id + " - padrino = " +img[index].nombre; 
			}
		}
	};
	xhttp.open('GET', 'scripts/padrinoss.php', true);
	xhttp.send();

    //raza
    var xhttp = new XMLHttpRequest();
	let imagenn = document.getElementById('peludo');
	let imagenee = document.getElementsByClassName('pelpad');
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			var data = JSON.parse(this.responseText);
			var img = data;
            console.log(img[1].raza);
			for (let index = 0; index < imagene.length; index++) {
                imagenee.item(index).getElementsByClassName('pelpadd').item(0).innerHTML="peludo = " + img[index].nombre;
			}
		}
	};
	xhttp.open('GET', 'scripts/galeriaa.php', true);
	xhttp.send();

    //imagen
    var xhttp = new XMLHttpRequest();
	let imagennn = document.getElementById('cuota');
	let imageneee = document.getElementsByClassName('cupad');
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			var data = JSON.parse(this.responseText);
			var img = data;
            //console.log(img[1].raza);
			for (let index = 0; index < imagene.length; index++) {
                imageneee.item(index).getElementsByClassName('cupadd').item(0).innerHTML="cuota = " +img[index].cuota;
			}
		}
	};
	xhttp.open('GET', 'scripts/padrinoss.php', true);
	xhttp.send();
}

 function elim() {
	// recoletar datos
    console.log("elimino");
	document.getElementById("eliminar").onclick = function(){

		var nombre = document.getElementById("forma")["idpad"].value
	
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
		xhttp.open("POST", "scripts/eliminarpad.php", true);
		var parameters="nombre="+nombre;
	
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
		xhttp.send(parameters);

	}
} 