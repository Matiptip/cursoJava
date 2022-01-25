/*Saludo*/

alert("Hola! porfavor, introduce un numero y te diremos si es primo o no")

/*Variables*/
let numero = (prompt("Introduce un numero"));
let primo = true;

/*Exepciones*/
if (numero === 1 || numero === 0) {
    alert("0 y 1 no corresponden a numeros primos por definicion.");
}


/*Ciclo: (Solo funciona con positivos)*/
else if (numero > 1) {

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
            break;
        }
    }

    
/*salidas */
    if (primo) {
        alert(`${numero} es un numero primo`);
    } else {
        alert(`${numero} no es un numero primo`);
    }
}

else {
    alert("Por el momento, solo funciono con numeros positivos.");
}
