function Mostrar()
{
    var largo
    var ancho
    var perimetro
    largo=document.getElementById("largo").value;
    ancho=document.getElementById("ancho").value;
    largo= parseInt(largo)
    ancho= parseInt(ancho)
    perimetro=largo*ancho*2
    alert ("usted necesita" + perimetro*3 + "metros de cable")


}
