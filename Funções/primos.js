function primo (n1){
    for (let numero =2; numero < n1 ;numero++){
        if (n1 % numero === 0 ) {
            return `o numero ${n1} não é primo`
        } 
    }return `o numero ${n1} é primo`

}
console.log(primo(17))