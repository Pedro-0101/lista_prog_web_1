function maiorNum(...val: number[]){
    //Exercicio 1
    return Math.max.apply(null, val);
}

function ePar(val:number){
    //Exercicio 2
    if(val%2 == 1){
        console.log("O numero " + val + " é impar");
        return false;
    }else{
        console.log("O numero " + val + " é par");
        return true;
    }
}

function calcMedia(val: number[]){
    //Exercicio 3
    let soma = 0;

    for(let i = 0; val[i] != null; i++){
        soma += val[i];
    }
    return soma/val.length;
}

function caixaAlta(frase: string){
    //Exercicio 4
    let fraseUp = frase.toUpperCase();
    return fraseUp;
}

function ePrimo(num: number){
    //Exercicio 5
    for(let i = 2; i<num/2; i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

function inverte(vetor: number[]){
    //Exercicio 6
    return vetor.reverse()
}

function porcentagem(valor: number, porc: number){
    //Exercicio 7
    return (valor+(valor*(porc/100)))
}

function revString(frase: string){
    //Exercicio 8
    let vetFrase: string[];
    vetFrase = frase.split('');
    frase = vetFrase.reverse().join(" ")
    frase.replace(",", " ")
    return frase
}

function somaPar(val: number[]){
    //Exercicio 9
    let tam = val.length
    let soma = 0
    for(let i = 0; i<=tam; i++){
        if(val[i]%2 == 0){
            soma += val[i]
        }
    }
    return soma;
}

function fatorial(num: number): number{
    //Exercicio 10
    if(num == 1 ){
        return 1;
    }

    return num * fatorial(num-1)

}