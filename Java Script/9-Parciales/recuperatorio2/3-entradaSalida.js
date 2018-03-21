//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho
	var largo
	var perimetro
	var alambrado
	ancho= document.getElementById ("ancho").value;
    largo= document.getElementById ("largo").value;
	ancho= parseInt(ancho)
    largo= parseInt(largo)
	perimetro= ancho*2+largo*2
	alambrado= perimetro*6
	alert("usted necesita" +alambrado+"mts de alambre")
	

	
}

