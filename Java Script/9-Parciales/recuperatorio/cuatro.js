function Mostrar()
{
    	
	var num1;
	var num2;
	var resultado;

	num1= prompt("Ingrese el primer numero");

	num2= prompt("Ingrese el segundo numero");

	num1= parseInt(num1);

	num2= parseInt(num2);

	resultado= num1 + num2;

	if(resultado < 0)
		{
			document.write ("El resultado es negativo");
		}
	
	else if(resultado == 0)
		{
			document.write ("El resultado es 0");
		}
	
	else if(resultado > 0)

		{
			document.write ("El resultado es positivo");
		}

}
