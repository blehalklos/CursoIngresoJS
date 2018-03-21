//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var iva
	var resultado
	importe= prompt("ingrese el importe")
	importe= parseInt(importe)
	iva= importe*0.21
	resultado= importe+iva
	alert ("el importe final es" + resultado)
	
}

