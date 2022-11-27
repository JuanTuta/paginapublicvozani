

window.onload = init;
function init() {
    pintar();
    llenar();
    console.log("ola")
}

function pintar() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			let espacio = document.getElementById('imgbox');

			var data = JSON.parse(this.responseText);
			var img = data;
			var prub = img.length;
			console.log(prub);

			for (let index = 0; index < img.length; index++) {

                var imgagene = '<div class="imgboxx"> <a href="formulario_apadrinara.html"> <img class="contenoro" id="animal'+ index +'" src=""></a> </div>'
				var cssc ='<style> #animal' + index +'{ width: 390px; height: 420px;margin-bottom: 25px;}</style>'
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
	let imagen = document.getElementById('imgbox');
	let imagene = document.getElementsByClassName('imgboxx');
	console.log(imagen);
	console.log(imagene);
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			var data = JSON.parse(this.responseText);
			var img = data;

			for (let index = 0; index < imagene.length; index++) {
				imagene.item(index).getElementsByClassName('contenoro').item(0).setAttribute('src', 'imagenes/' + img[index].imagen);
				
			}
		}
	};
	xhttp.open('GET', 'scripts/galeriaa.php', true);
	xhttp.send();
}