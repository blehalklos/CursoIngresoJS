function Mostrar()
{
    var contador=0;
    var max=0;
    var min=0;
    var importe1=0;
    var primera=true

    alert("A continuacion ingrese el importe de ventas de los 24 dias del mes");
    
    while(contador <= 24)
    {
        contador++
        importe = prompt()
        if(primera == true)
        {
            primera = false
            max = importe
            min = importe
        }
        else if(importe > max)
        {
            max = importe
        }
        else 
        {
            if(importe < min)
        {
            min = importe
        }
        }
        
       
    }
    alert("Mayor importe del mes: $"+max);
    alert("Menor importe del mes: $"+min);
}
