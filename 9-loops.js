console.log(`\nTrabalhando com condicionais | loops!`);

const listaDeDestinos = new Array(`Salvador`, 
`São Paulo`, 
`Rio de Janeiro`
);

const idadeComprador = 60;
const estaAcompanhada = false;

let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){ //WHILE = enquanto for verdadeiro executa o bloco de códicos
    
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
}else {
    console.log("Desculpe Tivemos um erro!");
}
