## 🎯 O que é JavaScript?

JavaScript é uma **linguagem de programação** que roda no navegador e permite criar **páginas web interativas**. 
- Botões que reagem a cliques
- Formulários que validam dados
- Animações e efeitos
- Buscar dados sem recarregar a página

**Importante:** Java e JavaScript são linguagens diferentes (como cachorro e coelho).

---

## 1. Onde escrever e testar JavaScript?

Você pode testar agora mesmo:

**Opção 1 - Console do navegador:**
1. Abra qualquer página web
2. Pressione `F12` ou clique com botão direito → "Inspecionar"
3. Vá na aba "Console"
4. Digite código ali e pressione Enter

**Opção 2 - Editor online:**
- Acesse `codepen.io` ou `jsfiddle.net` (mais simples)
- Ou crie um arquivo `index.html` no seu computador

Arquivo HTML básico para testar:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Meu primeiro JavaScript</title>
</head>
<body>
    <h1 id="titulo">Olá!</h1>
    
    <script>
        // Seu JavaScript vai aqui
        console.log("Funcionou!");
    </script>
</body>
</html>
```

---

## 2. Seu primeiro código: Variáveis

Variáveis são **caixas onde guardamos informações**.

```javascript
// Três formas de criar variáveis:

var nome = "João";        // Jeito antigo (evite usar)
let idade = 25;           // Jeito moderno (valor pode mudar)
const PI = 3.1415;        // Constante (valor NÃO pode mudar)
```

**Regras práticas:**
- Use `const` sempre que possível (valor não muda)
- Use `let` quando o valor vai mudar
- Nunca use `var`

### Tipos de dados básicos:

```javascript
let nome = "Maria";           // String (texto)
let idade = 30;               // Number (número)
let altura = 1.75;            // Number (decimal)
let isEstudante = true;       // Boolean (verdadeiro/falso)
let endereco = null;          // Null (vazio intencional)
let resposta;                 // Undefined (não definido)

console.log(nome);            // Imprime: Maria
console.log(typeof idade);    // Imprime: number
```

---

## 3. Operações básicas

### Aritméticos (matemática):

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (soma)
console.log(a - b);   // 7  (subtração)
console.log(a * b);   // 30 (multiplicação)
console.log(a / b);   // 3.333... (divisão)
console.log(a % b);   // 1  (resto da divisão)
```

### Concatenação (juntar textos):

```javascript
let primeiroNome = "Ana";
let sobrenome = "Silva";
let nomeCompleto = primeiroNome + " " + sobrenome;

console.log(nomeCompleto);  // Ana Silva
console.log(`Olá, ${primeiroNome}!`);  // Olá, Ana! (Template string - melhor jeito)
```

---

## 4. Comparações (verdadeiro ou falso)

```javascript
let x = 5;
let y = 10;

console.log(x > y);    // false
console.log(x < y);    // true
console.log(x == 5);   // true (igualdade, mas NÃO use)
console.log(x === 5);  // true (igualdade estrita - USE ESTE)
console.log(x != y);   // true (diferente)
console.log(x !== "5"); // true (estritamente diferente)
```

**Regra de ouro:** SEMPRE use `===` e `!==`, nunca `==` e `!=` (evitam bugs chatos).

---

## 5. Estruturas de decisão (if/else)

```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir ainda");
}

// Com else if (várias condições)
let nota = 85;

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else {
    console.log("Reprovado");
}
```

---

## 6. Laços de repetição (loops)

### For (quando sabemos quantas vezes repetir):

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}
// Imprime: 0, 1, 2, 3, 4

// Exemplo prático:
for (let ano = 2020; ano <= 2024; ano++) {
    console.log("Ano: " + ano);
}
```

### While (quando não sabemos quantas vezes):

```javascript
let tentativas = 0;

while (tentativas < 3) {
    console.log("Tentativa " + (tentativas + 1));
    tentativas++;
}

// Cuidado com loop infinito!
```

---

## 7. Arrays (listas)

Arrays guardam **múltiplos valores** em uma única variável.

```javascript
// Criando arrays
let frutas = ["maçã", "banana", "laranja"];
let numeros = [1, 2, 3, 4, 5];
let misturado = ["texto", 42, true, null];

// Acessando elementos (começa do 0)
console.log(frutas[0]);  // "maçã"
console.log(frutas[2]);  // "laranja"
console.log(frutas.length);  // 3 (tamanho do array)

// Adicionando/removendo
frutas.push("uva");     // Adiciona no final
frutas.pop();           // Remove do final
frutas.unshift("morango"); // Adiciona no início
frutas.shift();         // Remove do início

// Percorrendo arrays
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Jeito moderno (forEach)
frutas.forEach(function(fruta) {
    console.log(fruta);
});
```

---

## 8. Objetos (estruturas de dados)

Objetos guardam **informações com nomes** (propriedades).

```javascript
// Criando um objeto
let pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo",
    isEstudante: true
};

// Acessando propriedades
console.log(pessoa.nome);       // "Carlos"
console.log(pessoa["idade"]);   // 28 (outro jeito)

// Modificando
pessoa.idade = 29;
pessoa.profissao = "Engenheiro"; // Adiciona nova propriedade

// Objetos com arrays e funções
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    anos: [2020, 2021, 2022],
    ligar: function() {
        console.log("Vrum vrum!");
    }
};

carro.ligar();  // "Vrum vrum!"
```

---

## 9. Funções (blocos reutilizáveis)

Funções são **receitas** que executam uma tarefa.

```javascript
// Declarando uma função
function saudacao() {
    console.log("Olá, mundo!");
}

saudacao();  // Chamando a função

// Função com parâmetros
function soma(a, b) {
    return a + b;  // return devolve o resultado
}

let resultado = soma(5, 3);
console.log(resultado);  // 8

// Função com retorno condicional
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarIdade(20));  // "Maior de idade"

// Arrow functions (jeito moderno - muito usado em React)
const multiplicar = (x, y) => {
    return x * y;
};

// Arrow function simplificada (se só tem um return)
const dividir = (a, b) => a / b;

console.log(multiplicar(4, 5));  // 20
```

---

## 10. Métodos úteis de array (fundamentais para React)

```javascript
let numeros = [1, 2, 3, 4, 5];

// map - transforma cada elemento
let dobrados = numeros.map(num => num * 2);
console.log(dobrados);  // [2, 4, 6, 8, 10]

// filter - filtra elementos
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);  // [2, 4]

// find - encontra um elemento
let encontrado = numeros.find(num => num > 3);
console.log(encontrado);  // 4 (o primeiro que atende)

// includes - verifica se existe
console.log(numeros.includes(3));  // true
console.log(numeros.includes(10)); // false
```

---

## 🎯 Mini projetos práticos (faça na ordem)

### 1. Calculadora de IMC
```javascript
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

console.log(calcularIMC(70, 1.75));
```

### 2. Filtro de produtos
```javascript
let produtos = ["camisa", "calça", "tênis", "camiseta", "bermuda"];

let comecaComC = produtos.filter(produto => produto[0] === "c");
console.log(comecaComC);  // ["camisa", "camiseta"]
```

### 3. Lista de tarefas simples
```javascript
let tarefas = ["estudar", "comprar pão", "correr"];

function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada!`);
}

function listarTarefas() {
    console.log("Minhas tarefas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
    });
}

adicionarTarefa("ler livro");
listarTarefas();
```

---

## 📚 Próximos passos (ordem de estudo)

1. **DOM Manipulation** (interagir com HTML/CSS)
   - `document.getElementById`
   - `addEventListener`
   - Criar elementos com JavaScript

2. **Async JavaScript** (requisições, temporizadores)
   - setTimeout, setInterval
   - Callbacks
   - Promises
   - async/await

3. **Fetch API** (buscar dados da internet)
   - `fetch("https://api.exemplo.com/dados")`

4. **Armazenamento local**
   - `localStorage`

5. **Orientação a objetos** (classes, prototypes)

---

## ✅ Exercícios para fixar (faça antes de React)

1. Crie uma função que recebe um array de números e retorna a soma
2. Crie uma função que recebe uma string e conta quantas vogais ela tem
3. Crie um objeto "aluno" com nome, notas (array) e uma função que calcula a média
4. Use filter para extrair números maiores que 10 de um array
5. Use map para converter um array de temperaturas em Celsius para Fahrenheit

---

## 📖 Recursos gratuitos

- **MDN Web Docs** (documentação oficial)
- **JavaScript.info** (curso completo gratuito)
- **Curso em Vídeo** (YouTube - Gustavo Guanabara)
- **freeCodeCamp** (curso interativo)
- **Codewars** (praticar com desafios)

---
