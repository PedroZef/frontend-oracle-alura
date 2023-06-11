console.log(`Trabalhando com condicionais`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2,1);
} else {
    console.log("Não é maior de idade e não posso vender");
}
 
console.log("Embarque : \n\n")//\n\n pula linhas
if( idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!!");
} else {
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);

//Operadores lógicos que temos
//console.log(idadeComprador > 18);
//console.log(idadeComprador > 18);
//console.log(idadeComprador <= 18);
//console.log(idadeComprador >= 18);
//console.log(idadeComprador == 18);

