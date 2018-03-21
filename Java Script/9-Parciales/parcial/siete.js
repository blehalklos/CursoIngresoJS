function Mostrar()
{
    var nota;
    var sexo;
    var contador=0;
    var contadorvarones=0;
    var goon=true;
    var promedio;
    var min=10;
    var max=6;
    var totalnotas=0;

    while(goon==true)
    {   
        contador++;
        
        nota= prompt("Ingrese la nota del alumno");
        
        nota= parseInt(nota);
        
        while(nota < 0 || nota > 10 || isNaN(nota))
            {
                nota= prompt("Por favor ingrese una nota valida entre 0 y 10");
                nota= parseInt(nota);
            }

        totalnotas=nota+totalnotas;

        if(nota<min)
        {
            min=nota;
        }
        
        sexo= prompt("Ingrese el sexo del alumno (m->Masculino f->Femenino)");
       
        while(sexo!= "f" && sexo!= "m")
            {
                sexo= prompt("Sexo invalido, recuerde, M->Masculino F->Femenino");
            }
        
        if(sexo=="m" && nota>=6)
        {
            contadorvarones++;
        }

        goon= confirm("Desea agregar otra nota?");
    }
    
    alert("Promedio de notas totales= " + totalnotas/contador);
    
    alert("La nota mas baja es= " + min);

    alert("La cantidad de varones cuya nota sea mayor a 6 es= " + contadorvarones); 


}
