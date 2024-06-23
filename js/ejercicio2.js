let peso_kg = 42
let altura_m = 1.6
let imc = peso_kg/(altura_m*2)

if (imc<18.5){
    console.log('Bajo peso')
}else{
    if (imc>=18.5 & imc <=24.9){
        console.log('Normal')
    }else{
        if (imc>=25 & imc<=29.9){
            console.log('Sobrepeso')
        }else{
            if (imc>=30){
                console.log('Obesidad')
            }
        }
    }
}

