let pessoa = {
    nome: "Matheus", idade: 24, profissao: "estudante"
}

console.log(pessoa)
function produtoMaisCaro(produtos) {
  if (produtos.length === 0) {
    return "O array está vazio.";
  }

  let maisCaro = produtos[0];

  for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].preco > maisCaro.preco) {
      maisCaro = produtos[i];
    }
  }

  return maisCaro;
}


const produtos = [
  { nome: "Celular", preco: 1500 },
  { nome: "Notebook", preco: 3000 },
  { nome: "Fone de Ouvido", preco: 200 }
];

console.log(produtoMaisCaro(produtos));


const carrinho = [
  { nome: "Pera", preco: 4.50 },
  { nome: "Batata", preco: 2.50 },
  { nome: "Alface", preco: 1.50 }
];


function calcularTotal(carrinho) {
  return carrinho.reduce((total, item) => total + item.preco, 0);
}


console.log("Itens no carrinho:");
carrinho.forEach(item => console.log(`- ${item.nome}: R$ ${item.preco.toFixed(2)}`));

const total = calcularTotal(carrinho);
console.log(`\nTotal da compra: R$ ${total.toFixed(2)}`);


const numeroAleatorio = Math.floor(Math.random() * 10) + 1;


const palpite = parseInt(prompt("Tente adivinhar o número (entre 1 e 10):"));


if (palpite === numeroAleatorio) {
  alert("Parabéns! Você acertou! O número era " + numeroAleatorio);
} else {
  alert("Que pena! Você errou. O número era " + numeroAleatorio);
}


function contarVogais(frase) {
  
  const fraseMinuscula = frase.toLowerCase();
  

  if (!fraseMinuscula.includes("caneca")) {
    console.log("A palavra 'caneca' não está presente na frase.");
    return;
  }


  const vogais = "aeiou";
  let contador = 0;

  
  for (let char of fraseMinuscula) {
    if (vogais.includes(char)) {
      contador++;
    }
  }

  console.log(`A frase contém ${contador} vogais.`);
}


const frase = "Eu gosto de caneca e café.";
contarVogais(frase);


