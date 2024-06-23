let num_entero = 0


function esPrimo(num_entero) {
    for (var i = 2; i < num_entero; i++) {
      if (num_entero% i === 0) {
        return false;
      }
    }
    return num_entero !== 1;
}

console.log(esPrimo(6))