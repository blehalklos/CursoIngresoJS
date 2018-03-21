function Mostrar()
{

	var numero=0;
	var positivo=0;
	var negativo=1;
	var contador=0;
	var respuesta=true;

	while(respuesta!=false)
	{
		numero= prompt("ingrese un numero");
		console.log(numero);
		if(numero==null)
			{
				break;
			}
		numero= parseInt(numero);
		 if(numero>0)
		 	{
				 positivo+=numero
			}
		 else if (numero<0)
		 	{	
				 contador++
				 negativo*=numero
			}
		else if (contador=0)
			{
				negativo-1
			}
		respuesta=confirm("Desea continuar? Caso contrario presione cancelar");	
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;		
}//FIN DE LA FUNCIÓN