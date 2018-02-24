function Mostrar()
{
    var num=prompt("ingresa un numero")
    var contador=0
    for(i=1;i<=num;i++)
 {
     if (num%i==0)
     {
        contador++
     }
     
     if (contador >=3)
     {
        alert("no es primo");
     }
     else
     {
         alert("es primo")
     }  
    

    }
}//FIN DE LA FUNCIÓN