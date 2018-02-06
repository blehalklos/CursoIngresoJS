//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo
    var ancho
    var perimetro
    largo=document.getElementById("largo").value;
    ancho=document.getElementById("ancho").value;
    largo= parseInt(largo)
    ancho= parseInt(ancho)
    perimetro=largo*ancho
    alert ("usted necesita" + perimetro*6 + "metros de cable")
	
}

