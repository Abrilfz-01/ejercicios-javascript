let precio_incial = 80


if (precio_incial > 100){
    let descuento = precio_incial * 0.1
    let resultado_f = precio_incial - descuento
    console.log ('Se le aplico un descuento del 10%, el precio final de su producto es de: $', resultado_f)
}else{
    if(precio_incial >= 50 & precio_incial <= 100){
        descuento = precio_incial * 0.05
        resultado = precio_incial - descuento
        console.log ('Se le aplico un descuento del 5%, el precio final de su producto es de: $', resultado)
    }else{
        if(precio_incial < 50){
            console.log('No se le aplico ningun descuento')
        }
    }
}
