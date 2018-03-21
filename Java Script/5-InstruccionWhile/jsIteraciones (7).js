function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var numero;

	while(respuesta==true)
	{
		
		numero= prompt("ingrese un numero");
		console.log(numero)
		if(numero == null)
		{break
		
		}
		
		numero= parseInt(numero);
		acumulador+=numero;
		contador++;
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;
		respuesta= confirm("desea continuar?");
		
	}
}




//FIN DE LA FUNCIÓN