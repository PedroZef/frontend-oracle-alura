console.log(`\nTrabalhando com condicionais | FOR!`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 19;
const estaAcompanhada = false;

let temPassagemComprada = false;
const destino = "Recife";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
//while(contador<3){ //WHILE = enquanto for verdadeiro executa o bloco de códicos

//  if (listaDeDestinos[contador] == destino){
//    destinoExiste = true;
//  break;
//}
//contador += 1;

for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}