# 🌐 Programação Web I — HTML, CSS e JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)

## 📚 Sobre o projeto

Este projeto foi desenvolvido como material didático para a disciplina **Programação Web I**, do curso superior de **Análise e Desenvolvimento de Sistemas (ADS)**.

O objetivo é apresentar, de maneira simples e prática, como as três principais tecnologias fundamentais do desenvolvimento Front-End trabalham em conjunto:

* **HTML5** → estrutura e conteúdo da página;
* **CSS3** → apresentação visual e layout;
* **JavaScript** → comportamento e interatividade.

A aplicação também demonstra conceitos fundamentais como:

* elementos HTML;
* atributos `id` e `class`;
* seletores CSS;
* conexão entre HTML e CSS;
* conexão entre HTML e JavaScript;
* manipulação do DOM;
* eventos de clique;
* responsividade;
* organização de arquivos externos.

O projeto está disponível no repositório:

**GitHub:**
https://github.com/GeorgeMendesMarra/front_end/tree/main/site1

---

# 🎯 Objetivos de aprendizagem

Ao estudar este projeto, o aluno deverá compreender:

1. Como uma página HTML é estruturada;
2. Como um arquivo CSS externo é conectado ao HTML;
3. Como o CSS utiliza `id` e `class` para selecionar elementos;
4. Como o JavaScript é conectado à página;
5. Como o JavaScript localiza elementos do HTML;
6. Como eventos são associados aos elementos;
7. Como o DOM pode ser manipulado;
8. Como o CSS controla a apresentação visual;
9. Como utilizar Media Queries para responsividade;
10. Como separar estrutura, apresentação e comportamento.

---

# 🧩 Tecnologias utilizadas

## HTML5

O **HTML (HyperText Markup Language)** é responsável pela estrutura semântica da página.

Neste projeto, ele define elementos como:

```html
<header>
<main>
<section>
<h1>
<h2>
<p>
<div>
<button>
<ul>
<li>
<footer>
```

O HTML também estabelece identificadores que posteriormente serão utilizados pelo CSS e pelo JavaScript.

Exemplo:

```html
<header id="cabecalho">
```

O elemento possui o identificador:

```text
cabecalho
```

Esse identificador poderá ser utilizado pelo CSS:

```css
#cabecalho
```

e pelo JavaScript:

```javascript
document.getElementById("cabecalho")
```

---

# 🎨 CSS3

O **CSS (Cascading Style Sheets)** é responsável pela apresentação visual da página.

O projeto utiliza CSS para definir:

* cores;
* espaçamentos;
* fontes;
* largura dos elementos;
* alinhamento;
* bordas;
* sombras;
* arredondamento;
* Flexbox;
* responsividade;
* efeitos de interação.

O arquivo utilizado é:

```text
style.css
```

Ele é conectado ao HTML através da tag:

```html
<link rel="stylesheet" href="style.css">
```

---

# ⚙️ JavaScript

O **JavaScript** é utilizado para adicionar comportamento à página.

Neste projeto, o JavaScript:

1. espera o carregamento do documento;
2. localiza o botão através do `id`;
3. localiza o elemento destinado à mensagem;
4. registra um evento de clique;
5. modifica o conteúdo da página;
6. registra uma informação no console.

O arquivo utilizado é:

```text
script.js
```

A conexão é realizada no HTML:

```html
<script src="script.js"></script>
```

---

# 🔗 Como as tecnologias se conectam?

A ideia central do projeto pode ser representada da seguinte forma:

```text
                 ┌─────────────┐
                 │    HTML     │
                 │  Estrutura  │
                 └──────┬──────┘
                        │
              ┌─────────┴─────────┐
              │                   │
              ▼                   ▼
       ┌─────────────┐    ┌──────────────┐
       │     CSS     │    │ JavaScript   │
       │ Apresentação│    │ Comportamento│
       └─────────────┘    └──────────────┘
```

De maneira simplificada:

> **HTML cria os elementos → CSS apresenta os elementos → JavaScript adiciona comportamento aos elementos.**

---

# 🔌 Conexão HTML → CSS

A conexão entre HTML e CSS ocorre através da tag:

```html
<link rel="stylesheet" href="style.css">
```

O atributo:

```html
rel="stylesheet"
```

informa que o recurso externo é uma folha de estilos.

O atributo:

```html
href="style.css"
```

indica o arquivo CSS que deverá ser carregado.

Como os arquivos estão no mesmo diretório:

```text
site1/
├── index.html
├── style.css
└── script.js
```

não é necessário informar um caminho mais complexo.

---

# 🎯 Como o CSS encontra os elementos HTML?

Um dos conceitos mais importantes deste projeto é a relação entre `id`, `class` e seletores CSS.

## HTML com `id`

```html
<header id="cabecalho">
```

No CSS:

```css
#cabecalho {
    ...
}
```

### Regra

```text
HTML                 CSS

id="cabecalho"   →   #cabecalho
```

O símbolo `#` representa um seletor de `id`.

---

# 🏷️ HTML com `class`

O projeto também utiliza classes:

```html
<h1 class="titulo">
```

No CSS:

```css
.titulo {
    ...
}
```

### Regra

```text
HTML                 CSS

class="titulo"   →   .titulo
```

O ponto (`.`) representa um seletor de classe.

---

# 🔄 HTML → JavaScript

O JavaScript também consegue localizar elementos HTML através de seus identificadores.

No projeto existe:

```html
<button id="botaoMensagem">
```

O JavaScript localiza esse botão através de:

```javascript
document.getElementById("botaoMensagem");
```

Portanto:

```text
HTML

id="botaoMensagem"

        ↓

JavaScript

getElementById("botaoMensagem")
```

O mesmo conceito é utilizado para localizar:

```html
<p id="mensagem"></p>
```

através de:

```javascript
document.getElementById("mensagem");
```

---

# 🖱️ Funcionamento do botão

O projeto possui um botão:

```html
<button id="botaoMensagem">
    Clique para executar JavaScript
</button>
```

O JavaScript encontra esse elemento:

```javascript
const botao = document.getElementById("botaoMensagem");
```

Depois registra um evento:

```javascript
botao.addEventListener("click", function () {
```

Isso significa:

> Quando o usuário clicar no botão, execute determinada função.

Dentro da função, o JavaScript modifica o conteúdo de:

```html
<p id="mensagem"></p>
```

através de:

```javascript
mensagem.textContent =
    "JavaScript encontrou o HTML pelo id e alterou a página!";
```

---

# 🌳 DOM — Document Object Model

O navegador transforma o HTML em uma estrutura conhecida como **DOM (Document Object Model)**.

Podemos imaginar a página desta maneira:

```text
HTML
│
├── header
│   ├── h1
│   └── p
│
├── main
│   ├── section
│   ├── section
│   ├── section
│   ├── section
│   │   ├── button
│   │   └── p
│   └── section
│
└── footer
```

O JavaScript pode acessar essa estrutura e modificar seus elementos.

Neste projeto:

```javascript
document.getElementById(...)
```

é utilizado para localizar elementos dentro do DOM.

---

# 📱 Responsividade

O projeto também apresenta um exemplo de **Design Responsivo**.

O CSS utiliza uma Media Query:

```css
@media (max-width: 600px) {
    ...
}
```

Essa regra é aplicada quando a largura da tela é igual ou inferior a **600 pixels**.

Nesse caso, o tamanho do título é reduzido:

```css
.titulo {
    font-size: 1.7rem;
}
```

O diagrama também passa a organizar seus elementos verticalmente:

```css
.diagrama {
    flex-direction: column;
}
```

Assim, a estrutura se adapta melhor a dispositivos móveis.

---

# 📂 Estrutura do projeto

```text
site1/
│
├── index.html
├── style.css
└── script.js
```

## `index.html`

Responsável pela:

* estrutura;
* conteúdo;
* elementos da interface;
* identificação dos elementos através de `id` e `class`;
* conexão com CSS;
* conexão com JavaScript.

## `style.css`

Responsável pela:

* aparência;
* cores;
* espaçamentos;
* layout;
* Flexbox;
* botões;
* cards;
* responsividade.

## `script.js`

Responsável pela:

* manipulação do DOM;
* localização dos elementos;
* eventos;
* alteração dinâmica do conteúdo;
* interação com o usuário.

---

# 🧠 Relação entre os arquivos

```text
                    index.html
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
        style.css              script.js
             │                     │
             ▼                     ▼
       APRESENTAÇÃO           COMPORTAMENTO
             │                     │
             └──────────┬──────────┘
                        ▼
                  PÁGINA WEB
```

---

# 📝 Exemplo completo da integração

## HTML

```html
<button id="botaoMensagem">
    Clique aqui
</button>

<p id="mensagem"></p>
```

## CSS

```css
#botaoMensagem {
    padding: 12px 18px;
}

#mensagem {
    font-weight: bold;
}
```

## JavaScript

```javascript
const botao =
    document.getElementById("botaoMensagem");

const mensagem =
    document.getElementById("mensagem");

botao.addEventListener("click", function () {

    mensagem.textContent =
        "JavaScript alterou o HTML!";

});
```

### Fluxo de execução

```text
1. HTML cria o botão
          ↓
2. CSS estiliza o botão
          ↓
3. JavaScript encontra o botão
          ↓
4. Usuário clica
          ↓
5. Evento "click" é disparado
          ↓
6. JavaScript modifica o DOM
          ↓
7. Mensagem aparece na página
```

---

# 🚀 Como executar o projeto

Não é necessário instalar servidor, banco de dados ou framework.

### 1. Clone o repositório

```bash
git clone https://github.com/GeorgeMendesMarra/front_end.git
```

### 2. Entre no diretório do projeto

```bash
cd front_end/site1
```

### 3. Abra o arquivo

```text
index.html
```

O arquivo pode ser aberto diretamente em um navegador.

Também é possível utilizar extensões como **Live Server** em editores como Visual Studio Code.

---

# 🧪 Testando o projeto

Após abrir `index.html`:

1. Observe o cabeçalho;
2. Observe o diagrama HTML → CSS → JavaScript;
3. Leia a explicação sobre `id` e `class`;
4. Localize o botão;
5. Clique em **"Clique para executar JavaScript"**;
6. Observe a mensagem exibida;
7. Abra o console do navegador utilizando `F12`;
8. Acesse a aba **Console**;
9. Observe a mensagem registrada pelo JavaScript.

---

# 📖 Conceitos abordados

| Conceito                | Tecnologia | Aplicação                             |
| ----------------------- | ---------- | ------------------------------------- |
| Estrutura HTML          | HTML5      | Organização da página                 |
| Semântica               | HTML5      | `header`, `main`, `section`, `footer` |
| Identificadores         | HTML5      | `id`                                  |
| Classes                 | HTML5      | `class`                               |
| Seletores               | CSS3       | `#id` e `.class`                      |
| Layout                  | CSS3       | Flexbox                               |
| Responsividade          | CSS3       | Media Query                           |
| Eventos                 | JavaScript | `click`                               |
| DOM                     | JavaScript | Acesso aos elementos                  |
| Manipulação de conteúdo | JavaScript | `textContent`                         |
| Console                 | JavaScript | `console.log()`                       |

---

# 🎓 Aplicação acadêmica

Este projeto pode ser utilizado como exemplo introdutório para estudantes de **Análise e Desenvolvimento de Sistemas**, especialmente nas primeiras aulas de desenvolvimento Web.

A proposta permite demonstrar progressivamente:

### Aula 1 — HTML

```text
Estrutura da página
Elementos
Atributos
id
class
Semântica
```

### Aula 2 — CSS

```text
Seletores
Cores
Fontes
Espaçamentos
Box Model
Flexbox
Responsividade
```

### Aula 3 — JavaScript

```text
Variáveis
DOM
getElementById()
Eventos
addEventListener()
textContent
console.log()
```

### Aula 4 — Integração

```text
HTML + CSS + JavaScript
```

---

# 💡 Principal conceito do projeto

O projeto demonstra uma das ideias fundamentais do desenvolvimento Front-End:

> **Separação de responsabilidades.**

```text
HTML
↓
Estrutura

CSS
↓
Apresentação

JavaScript
↓
Comportamento
```

Essa separação facilita:

* manutenção;
* organização;
* reutilização;
* compreensão do código;
* evolução do projeto;
* trabalho em equipe.

---

# 📌 Características

* [x] HTML5
* [x] CSS3
* [x] JavaScript
* [x] Arquivos separados
* [x] Comentários didáticos
* [x] Seletores por `id`
* [x] Seletores por `class`
* [x] Manipulação do DOM
* [x] Evento de clique
* [x] `textContent`
* [x] `console.log()`
* [x] Flexbox
* [x] Media Query
* [x] Layout responsivo
* [x] Estrutura adequada para fins educacionais

---

# 👨‍🏫 Contexto

**Disciplina:** Programação Web I
**Curso:** Análise e Desenvolvimento de Sistemas — ADS
**Tema:** Fundamentos de desenvolvimento Front-End
**Tecnologias:** HTML5, CSS3 e JavaScript

---

# 👨‍💻 Autor

**Professor George Mendes Marra**

Professor e cientista da computação, com atuação nas áreas de desenvolvimento de software, programação, desenvolvimento Web e tecnologias computacionais.

---

# 📜 Licença

Este projeto possui finalidade **educacional e acadêmica**, podendo ser utilizado como material de estudo, demonstração e prática dos fundamentos de desenvolvimento Web.

---

⭐ **Projeto desenvolvido para demonstrar, na prática, como HTML, CSS e JavaScript trabalham juntos na construção de uma página Web.**
