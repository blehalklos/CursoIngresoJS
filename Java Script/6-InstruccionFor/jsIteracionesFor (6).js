function Mostrar()
{
 var rep=prompt("ingresa un numero")
 var contador=0
 for (i=1;i<=rep;i++)
 {
     if(i%2==0)
     {

         console.log(i);
         contador++;
         
     }
      
 }


alert("cantidad de numeros "+contador)

}//FIN DE LA FUNCIÓN