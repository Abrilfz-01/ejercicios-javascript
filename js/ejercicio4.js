let suma = 0
let resta = 0
let multiplicacion = 0


function sumar(a, b){
    let resultado_s = a + b
    return resultado_s
}



function restar(c, d){
    let resultado_r = c - d
    return resultado_r
}



function multiplicar(e, f){
    let resultado_m = e * f
    return resultado_m
}



suma = sumar(8, 9)
resta = restar(30, 20)
multiplicacion = multiplicar(9, 8)

if (suma > resta & suma > multiplicacion){
    console.log(suma)
}else{
    if (resta > suma & resta > multiplicacion){
        console.log(resta)
    }
    else{
        console.log(multiplicacion)
    }
}
