function gusta (inicio,fim){
    inicio = 0
    fim = 10
    for ( let parImpar = inicio; parImpar < fim; parImpar++){
        if (parImpar % 2 === 0 ){
        }else{
            console.log(`${parImpar} é impar`)
        }
    }
}
console.log(gusta())