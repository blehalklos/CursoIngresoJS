//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var primera=true;
	var importe;
	var max;
	var min;
	var contador=0;

	alert("A continuacion ingrese el total de importes de la semana");
	
	while(contador<=7)
	{
		contador++;

		importe= prompt("Ingrese los importes")

		while(importe <= 0)
		{
			importe= prompt("Importe no valido, debe ser mayor a cero");
		}

		if (primera == true)
		{
			primera = false;
			max= importe;
			min= importe;
		}

		else if(importe > max)
		{
			max= importe
		}

		else
		{
			if(importe < min)
			{
				min= importe
			}
		}
	}
	
	alert("EL mayor importe de la semana fue $" + max);
	alert("Y el menor importe fue $" + min);

}	

