function jogoDosTres(num) {


    console.log('Se você conseguir tres números iguais você sera o GANHADOR!!!!')
    
    console.log(`O seu número e: ${num}`)// numero digitado pelo usuario

    let numero1 = (Math.floor(Math.random() * (num + 1))) // primeiro numero sorteado 
    console.log(`O primeiro número e: ${numero1}`);

    let numero2 = (Math.floor(Math.random() * (num + 1))) // segundo numero sorteado 
    console.log(`O segundo número e:  ${numero2}`);

    let numero3 = (Math.floor(Math.random() * (num + 1))) // terceiro numero sorteado 
    console.log(`O terseiro número e: ${numero3} `);

    let soma = (numero1 + numero2 + numero3 )/ 3

    if (soma === num) { // comparação entre o numero digitado e os sorteados 
        console.log('Vocễ Gannhou!!!!')
    } else {
        console.log('você Perdeu!!');
    }
}jogoDosTres(4)

