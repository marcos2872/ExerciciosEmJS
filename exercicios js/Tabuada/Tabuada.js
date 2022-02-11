function tabuada(num){
 
    
    for (var contador = 0; contador < num.length; contador ++){
        var resultado = [];
        for (var index = 1; index <= 10; index ++ ){
        
            resultado.push(num[contador] * index);
          
        } console.log('Tabuada do ' + num[contador]);
        console.log(resultado);
    }


} 
tabuada([1, 2, 3,])