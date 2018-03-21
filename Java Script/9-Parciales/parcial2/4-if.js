//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
	var num2;
	var resultado;

	num1= prompt("Ingrese el primer numero");
	
	num1= parseInt(num1);

	num2= prompt("Ingrese el segundo numero");

	num2= parseInt(num2);

	if (num1 == num2)
	{
		resultado= num1 * num2
	}

	else if(num1 > num2)
	{
		resultado= num1 - num2
	}

	else
	{
		if(num1 < num2)
		{
			resultado= num1 + num2
		}
	}

	document.write("El resultado es " + resultado)


}

