/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
   numeroSecreto= Math.floor(Math.random()*(101-1))

	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
}

function verificar()
{ 
  contadorIntentos= contadorIntentos+1;


  var numero
  numero= document.getElementById("numero").value;

    if (contadorIntentos > 10)
  {
    alert ("game over")
  }
  
  else if (numero>100)
  {
    alert ("boludo te dije entre 1 y 100")
  }
  
  else if (numero==numeroSecreto)
  {
    alert ("GG PeRrI")
    document.getElementById("intentos").value = contadorIntentos
  }

  else if (numero >= numeroSecreto)
  {
    alert ("Te pasaste man")
  }
  
  else if (numero <= numeroSecreto)
  {
    alert ("Te falta viejo")
  }
	
	
}