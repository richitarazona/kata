function esMultiplo( valor, multiplo) {
    resto = valor % multiplo;
    if (resto == 0)
        return true;
    else
        return false;
}


function existeNumero( num, multiplo ){
    var  enteroString = num.toString();
    for(var i=0 ; i < enteroString.length; i++){
        if(enteroString.charAt(i) == multiplo ){
            return true;
        }
    }
    return false;
}

// Muestra si el numero es multiplo de 3 , de 5 o de ambos

for (var i = 1; i <= 100; i++) {
    if (esMultiplo(i, 3) && (esMultiplo(i, 5))) {
        console.log(`FIZZFUZZ....El numero ${i} es multiplo de 3 y 5`);
    }
    else if (esMultiplo(i, 3)) {
        console.log(`FIZZ....El numero ${i} es multiplo de 3 `);
    }
    else if (esMultiplo(i, 5)) {
        console.log(`FUZZ....El numero ${i} es multiplo de 5`);
    } else
    console.log(i);
}

console.log("****************************************************");


// Muestra si el numero es dvisible o si incluye el 3 o el 5 en el mismo

 for (var i = 1; i < 100; i++) {
    
     if(esMultiplo(i,3) || existeNumero(i,3)){
        console.log(`El numero ${i} es divible por 3 o contiene el 3`);
    }
    else if(esMultiplo(i,5) || existeNumero(i,5)){
        console.log(`El numero ${i} es divible por 5 o contiene el 5`);
    }
    else{
        console.log(i);
    }
}
    




