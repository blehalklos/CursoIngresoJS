function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;

while(sexo!="f" && sexo!="m")
{
   sexo= prompt ("ingrese su sexo otra vez")
}

}//FIN DE LA FUNCIÓN