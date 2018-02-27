function Mostrar()

{
var goon=true;
var num;
var max;
var min;
var primeravez=true
var total=0;
    total= parseInt(total)
var contador=0;
var contadorpares=0;
    
    while(goon==true)
    {
        contador++;
        
        num = prompt("Ingrese un numero positivo");
        
        num = parseInt(num);

        while(num<=0 || isNaN(num))
        {
            num= prompt("Recuerde, debe ser un numero positivo");

            num= parseInt(num);
        }

        if(primeravez == true)
        {
            primeravez = false;
            max = num;
            min = num;
        }

        else if(num > max)
        {
            max = num;
        }

        else if(num < min)
        {
            min = num;
        }

        if (num % 2 == 0)
        {
            contadorpares++;
        }

        total = total + num;

        goon= confirm("Desea agregar otro numero?");

    }

document.write("La cantidad de numeros pares es=" + contadorpares);

document.write("El promedio de todos los numeros ingresados es=" + total / contador);

document.write("La suma de todos los numeros ingresados es=" + total);

document.write("El numero maximo es=" + max + " Y el numero minimo es" + min);

alert("Gracias vuelva prontos")
}
