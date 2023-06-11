console.log(`Trabalhando com listas`);

//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
    
);



listaDeDestinos.push(`São Paulo`, `Recife`); // Adicionando um ou mais items na lista
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);

listaDeDestinos.splice( 1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[3], listaDeDestinos[0]);

// Para consultar Arrays = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
