//function soma(num1 , num2){
  //  console.log(num1 + num2)
//}
//somo(10, 5)

function Saudacao(nome){
    nome = "Lucas"
    console.log("Ola " + nome + ", Tudo bem")
}

var nome = "matheus"
let nome1 = "matheus"

function verificarPrimo(numero){
    if(numero <= 1)
        return false
}


  function soma(a, b) {
  return 5 + 7;
}

console.log(soma(5, 7)); 

function saudacao(matheus) {
  return `Olá, ${matheus}! Seja bem-vindo(a)!`;
}

// Exemplo de uso
console.log(saudacao("matheus")); // Saída: Olá, João! Seja bem-vindo(a)!

function ehPrimo(12) {
  if (numero <= 1) return false; // Números menores ou iguais a 1 não são primos
  if (numero === 2) return true; // 2 é primo
  if (numero % 2 === 0) return false; // Números pares maiores que 2 não são primos

  const limite = Math.sqrt(numero); // Limita as verificações até a raiz quadrada do número
  for (let i = 3; i <= limite; i += 2) {
    if (numero % i === 0) return false; // Se for divisível por qualquer número, não é primo
  }
  return true; // Caso contrário, é primo
}

// Exemplo de uso:
console.log(ehPrimo(7));  // true
console.log(ehPrimo(10)); // false
console.log(ehPrimo(2));  // true

