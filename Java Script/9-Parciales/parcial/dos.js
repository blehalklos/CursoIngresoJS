function Mostrar()
{
   var importe
   var iva
   var resultado
   importe= prompt ("ingrese el importe")
   importe= parseInt(importe)
   iva= importe*0.21
   resultado= importe+iva
   document.getElementById("importeFinal").value=resultado

  
}
