function Mostrar()
{
    var contador=0;
    var primera=true;
    var peso;
    var max;
    var min;

    while(contador <= 50)
    {
        contador++
        
        peso= prompt("Ingrese el peso del contenedor");
        
        while(peso <= 0)
        {
            peso= prompt("Valor no valido, debe ser mayor a 0");
        }
        
        if (primera == true)
        {
            primera= false
            max= peso
            min= peso
        }

        else if(peso > max)
        {
            max= peso
        }

        else
        {
            if(peso < min)
            {
                min= peso
            }
        }
            
    }

    alert("el mas pesado pesa kg" + max)
    alert("el mas ligera pesa kg" + min)
}

