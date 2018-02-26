/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var Edad
    var Sexo
    var eCivil
    var contadorMasculino=0
    var contadorFemenino=0
    var sBruto=0
    var nLegajo
    var Nacionalidad
    var respuesta=true
    var sueldoTotal=0
    var sueldoTotalMF=0
    var sueldoM=0
    var sueldoF=0
    var promedioM=0
    var promedioF=0
    var sueldoNacionalizado=0
    var sueldoMinimo=8000
    var smn=8000//sueldo maximo nacionalizados
    var smfa=8000//sexo maximo femenino y argentino
    var efsm//edad de la persona f con sueldo max
    var smf//sueldo maximo femenino
    var sma=999999999999//sueldo minimo argentino
    var amn//argentino con menor sueldo
    var promedioMF
    var promedio=0 // promedio de todas las personas
    var contadorPersonas=0
    var contador1=0 // cant. personas s.neto>s.promedio
    var contador2=0 // cant. personas s.bruto<s. promedio
    var contador3=0 // cant. personas m con sueldo >12000


while(respuesta==true)
{   
    contadorPersonas++
   
   
    //pido edad
    Edad= prompt('Ingrese su edad por favor')
    Edad= parseInt(Edad)
    while(Edad < 18 || Edad > 90 || isNaN(Edad))
    {
        Edad= prompt('Solo entre 18 y 90')
    }
   
   
    //pido sexo
    Sexo= prompt('Ingrese su sexo(M=Masculino-F=Femenino)')
    while(Sexo!="F" && Sexo!="M")
    {
        Sexo= prompt('Recuerde, M=Masculino-F=Femenino')
    }
    
    
    //pido estado civil
    eCivil= prompt('Ingrese su estado civil (1=Soltero/a - 2=Casado/a - 3=Divorciado/a - 4=Viudo/a)')
    while(eCivil!="1" && eCivil!="2" && eCivil!="3" && eCivil!="4")
    {
        eCivil= prompt('Ingrese un estado civil valido por favor (1=Soltero/a - 2=Casado/a - 3=Divorciado/a - 4=Viudo/a)')
    }
   
   
    //pido sueldo
    sBruto= prompt('Ingrese su sueldo bruto por favor')
    sBruto= parseInt(sBruto)
    while(sBruto<=8000)
    {
        sBruto= prompt('Su sueldo debe ser mayor a $8000')
    }
   
   
    //pido legajo
    nLegajo= prompt('Ingrese su legajo por favor')
    while(nLegajo>9999)
    {
        nLegajo= prompt('Legajo no valido, ingreselo otra vez')
    }

   
    //pido nacionalidad
    Nacionalidad= prompt('Por ultimo, ingrese su nacionalidad por favor("A" si usted es Argentino/a - "E" si usted es Extranjero - "N" si usted es nacionalizado" )')
    while(Nacionalidad!="A" && Nacionalidad!="E" && Nacionalidad!="N")
    {
        Nacionalidad= prompt('Recuerde "A" si usted es Argentino/a - "E" si usted es Extranjero - "N" si usted es nacionalizado"')
    }
    //operaciones
    sueldoTotal=sBruto+sueldoTotal
    promedio=sueldoTotal/contadorPersonas
    
    if(Nacionalidad=="A" && sBruto<sma)
    {
        sma=sBruto

    if(sBruto>promedio)
    {
        contador1++
    }
    
    if(sBruto<promedio)
    {
        contador2++
    }

    if(Sexo=="M" && sBruto>=12000)
    {
        contador3++
    }

    if(Sexo=="M")
    {
        contadorMasculino++
        sueldoM=sBruto+sueldoM
    }

    if(Sexo=="F")
    {
        contadorFemenino++
        sueldoF=sBruto+sueldoF
    }
    sueldoTotalMF=sueldoF+sueldoM
    promedioM=sueldoM/contadorMasculino
    promedioF=sueldoF/contadorFemenino
    promedioMF=sueldoM+sueldoF/contadorFemenino+contadorMasculino
   
    if(Nacionalidad =="N" && sBruto>smn)
    {
        smn=sBruto
    }

    if(Sexo=="F" && Nacionalidad == "A" && sBruto>smfa)
    {
        smfa=sBruto
    }

    if(Sexo=="F" && sBruto>sueldoMinimo)
    {
        efsm=sBruto
    }

    
    }

respuesta= confirm("Desea reingresar valores?")    
}
document.getElementById("Edad").value=Edad
document.getElementById("Sexo").value=Sexo
document.getElementById("EstadoCivil").value=eCivil
document.getElementById("Sueldo").value=sBruto
document.getElementById("Legajo").value=nLegajo
document.getElementById("Nacionalidad").value=Nacionalidad

alert("sueldo maximo nacionalizados " + smn)
alert("sueldo max de f argentina " + smfa)
alert("sueldo promedio F "+ promedioF)
alert("sueldo promedio M "+ promedioM)
alert("promedio masculino y femenino " + promedioMF)
alert("cant. personas s.neto>s.promedio " + contador1)
alert("cant. personas s.bruto<s. promedio " + contador2)
alert("cant. personas m con sueldo >12000 " + contador3)

   
        
}




    
    
    



