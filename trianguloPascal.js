
let n = 25

trianguloPascal(n)

function trianguloPascal(n) {
    let linha 
    for(let i = 0; i < n; i++){
        
        linha = espaco(n -i)
        for(let j = 0; j <= i; j++){
            c = fatorial(i) / (fatorial(j)*fatorial(i - j))
            linha = linha + c + " "
        }
        console.log(linha)
    }
}

function fatorial(n){
    f = 1
    for(let i = 1; i <= n; i++){
        f *= i
    }
    return f
}

function espaco(n){
    let esp = ""
    for(let i = n; i >= 0; i--)
        {
            esp = esp + " "
        }
    return esp
}
