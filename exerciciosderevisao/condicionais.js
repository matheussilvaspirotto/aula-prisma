let number = 12

if(numero > 0){
    console.log("positivo")
}
else if(numero < 0){ 
    console.log("Negativo")
}else{
    console.log("zero")
}





numero = 13
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log("par");
  } else {
    console.log("ímpar");
  }
}

idade = 19
function verificarVoto(idade) {
  if (idade > 16) {
    return "Você ainda não pode votar.";
  } else {
    return "Você pode votar!";
  }
}


a = 32
b = 9
console.log(a / b)
console.log(a % b)

for (let i = 1; i <= 100; i++) {
  console.log(i);
}


const numero = 7;

console.log(`Tabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}



let numero = parseInt(prompt("Digite um número inteiro positivo:"));


if (numero > 0) {
    let soma = 0;

  
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }

    
    alert(`A soma de todos os números de 1 até ${numero} é: ${soma}`);
} else {
    alert("Por favor, insira um número inteiro positivo.");
}

