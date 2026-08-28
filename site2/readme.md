# 🎓 Formulário Acadêmico — HTML5, CSS3 e JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)

## 📚 Sobre o projeto

Este projeto apresenta um **Formulário de Cadastro Acadêmico** desenvolvido exclusivamente com tecnologias fundamentais de desenvolvimento Front-End:

* **HTML5** — estrutura e semântica;
* **CSS3** — apresentação visual, layout e responsividade;
* **JavaScript** — comportamento, validação e interação.

O projeto foi desenvolvido com finalidade **didática**, especialmente para utilização na disciplina **Programação Web I**, do curso superior de **Análise e Desenvolvimento de Sistemas (ADS)**.

A proposta é avançar em relação ao primeiro exemplo, demonstrando como HTML, CSS e JavaScript podem trabalhar juntos em uma aplicação Web interativa.

---

# 🎯 Objetivos

Ao estudar este projeto, o aluno deverá compreender:

* Como criar formulários com HTML5;
* Como utilizar diferentes tipos de `<input>`;
* Como utilizar `<select>`, `<textarea>`, radio buttons e checkboxes;
* Como utilizar `id`, `class`, `name` e `for`;
* Como associar `<label>` aos campos;
* Como estilizar formulários utilizando CSS3;
* Como organizar campos utilizando Flexbox;
* Como utilizar CSS Grid;
* Como criar layouts responsivos;
* Como capturar eventos com JavaScript;
* Como manipular o DOM;
* Como validar dados no navegador;
* Como criar máscaras para campos;
* Como trabalhar com `querySelector()` e `querySelectorAll()`;
* Como utilizar `textContent` e `innerHTML`;
* Como apresentar mensagens de erro e sucesso;
* Como coletar dados preenchidos pelo usuário.

---

# 🧩 Tecnologias utilizadas

## HTML5

O HTML5 é responsável pela **estrutura do formulário e da página**.

São utilizados diversos elementos semânticos e elementos específicos para formulários:

```text
<header>
<main>
<section>
<footer>
<form>
<fieldset>
<legend>
<label>
<input>
<select>
<option>
<textarea>
<button>
```

---

## CSS3

O CSS3 é responsável pela **apresentação visual**.

O projeto utiliza CSS para:

* cores;
* fontes;
* espaçamentos;
* bordas;
* sombras;
* Flexbox;
* CSS Grid;
* estados de foco;
* botões;
* mensagens;
* responsividade.

O arquivo externo utilizado é:

```text
style.css
```

---

## JavaScript

O JavaScript é responsável pelo **comportamento da aplicação**.

Neste projeto, ele realiza:

* captura dos elementos HTML;
* validação dos campos;
* máscaras;
* controle de eventos;
* contador de caracteres;
* mostrar/ocultar senha;
* validação de senha;
* coleta dos dados;
* geração do resumo;
* mensagens de erro;
* mensagens de sucesso;
* manipulação do DOM.

O arquivo utilizado é:

```text
script.js
```

---

# 📂 Estrutura do projeto

```text
site2/
│
├── index.html
├── style.css
└── script.js
```

A separação dos arquivos segue o princípio de **separação de responsabilidades**:

```text
index.html
     ↓
ESTRUTURA

style.css
     ↓
APRESENTAÇÃO

script.js
     ↓
COMPORTAMENTO
```

---

# 🔗 Integração entre as tecnologias

A aplicação demonstra claramente a relação:

```text
                    HTML5
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
        CSS3                  JavaScript
          │                       │
          ▼                       ▼
   APRESENTAÇÃO              COMPORTAMENTO
          │                       │
          └───────────┬───────────┘
                      ▼
                 FORMULÁRIO
```

### HTML

Cria o formulário.

### CSS

Define sua aparência.

### JavaScript

Controla seu comportamento.

---

# 🔌 Conexão HTML → CSS

O arquivo HTML conecta o CSS através da seguinte instrução:

```html
<link rel="stylesheet" href="style.css">
```

O atributo:

```text
rel="stylesheet"
```

indica que o arquivo é uma folha de estilos.

O atributo:

```text
href="style.css"
```

indica qual arquivo deverá ser carregado.

---

# 🔌 Conexão HTML → JavaScript

O HTML conecta o JavaScript através de:

```html
<script src="script.js"></script>
```

O atributo:

```text
src="script.js"
```

indica o arquivo JavaScript externo.

---

# 🎯 A importância do `id`

Um dos conceitos fundamentais deste projeto é o uso do atributo `id`.

Exemplo:

```html
<input
    type="text"
    id="nome"
    name="nome"
>
```

O JavaScript consegue localizar esse elemento através de:

```javascript
const nome =
    document.getElementById("nome");
```

A relação é:

```text
HTML

id="nome"

   ↓

JavaScript

getElementById("nome")
```

---

# 🏷️ A importância da `class`

As classes são utilizadas principalmente pelo CSS.

Exemplo:

```html
<section class="card">
```

O CSS pode selecionar esse elemento através de:

```css
.card {
    background: white;
}
```

A relação é:

```text
HTML                    CSS

class="card"       →    .card
```

---

# 🆔 `id` × `class`

Uma diferença importante para o aluno:

| Característica | `id`               | `class`              |
| -------------- | ------------------ | -------------------- |
| Identificação  | Única              | Pode ser reutilizada |
| CSS            | `#elemento`        | `.elemento`          |
| JavaScript     | `getElementById()` | `querySelector()`    |
| Exemplo        | `id="nome"`        | `class="campo"`      |

---

# 📝 Estrutura básica de um formulário

O elemento principal é:

```html
<form id="formularioCadastro">
```

Dentro dele são utilizados diferentes tipos de campos.

### Texto

```html
<input type="text">
```

### E-mail

```html
<input type="email">
```

### Telefone

```html
<input type="tel">
```

### Data

```html
<input type="date">
```

### Senha

```html
<input type="password">
```

### Radio button

```html
<input type="radio">
```

### Checkbox

```html
<input type="checkbox">
```

### Lista

```html
<select>
```

### Texto longo

```html
<textarea>
```

---

# 🏷️ Relação entre `label` e `input`

O projeto demonstra uma prática importante de HTML:

```html
<label for="email">
    E-mail:
</label>

<input
    type="email"
    id="email"
>
```

O atributo:

```text
for="email"
```

está relacionado ao:

```text
id="email"
```

Portanto:

```text
label
  │
  └── for="email"
          ↓
      input
          │
          └── id="email"
```

Essa associação melhora a organização e a acessibilidade do formulário.

---

# 🧱 Organização com `<fieldset>` e `<legend>`

O formulário é dividido em grupos:

```html
<fieldset>
    <legend>Dados pessoais</legend>
</fieldset>
```

São utilizados grupos para:

* Dados pessoais;
* Dados acadêmicos;
* Endereço;
* Interesses em tecnologia;
* Dados de acesso;
* Mensagem.

Isso facilita a organização visual e semântica do formulário.

---

# 🎨 CSS e formulário

Os campos são estilizados através de seletores CSS.

Exemplo:

```css
input,
select,
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 7px;
}
```

O mesmo estilo é aplicado aos diferentes elementos.

---

# 🧩 Flexbox

O projeto utiliza Flexbox para organizar campos.

Exemplo:

```css
.linha {
    display: flex;
    gap: 20px;
}
```

Isso permite colocar dois campos lado a lado.

Visualmente:

```text
┌─────────────────────┐  ┌─────────────────────┐
│ Nome                │  │ E-mail              │
└─────────────────────┘  └─────────────────────┘
```

Em telas pequenas, os elementos passam para uma única coluna.

---

# 📐 CSS Grid

Os interesses tecnológicos utilizam CSS Grid:

```css
.checkboxes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

O resultado é uma organização semelhante a:

```text
┌─────────┐ ┌─────────┐ ┌──────────────┐
│ HTML5   │ │ CSS3    │ │ JavaScript   │
└─────────┘ └─────────┘ └──────────────┘

┌─────────┐ ┌─────────┐ ┌──────────────┐
│ Java    │ │ Python  │ │ Banco Dados  │
└─────────┘ └─────────┘ └──────────────┘
```

---

# 📱 Responsividade

O projeto possui uma Media Query:

```css
@media (max-width: 700px) {
    ...
}
```

Quando a tela possui largura menor que 700 pixels:

* os campos deixam de ficar lado a lado;
* os checkboxes passam para uma coluna;
* os botões ocupam toda a largura;
* o título diminui;
* os espaçamentos são reduzidos.

A ideia é:

```text
DESKTOP

┌──────────┐ ┌──────────┐
│ Campo 1  │ │ Campo 2  │
└──────────┘ └──────────┘


CELULAR

┌───────────────────────┐
│ Campo 1               │
└───────────────────────┘

┌───────────────────────┐
│ Campo 2               │
└───────────────────────┘
```

---

# ⚙️ JavaScript e DOM

O JavaScript acessa os elementos HTML através do DOM.

Exemplo:

```javascript
const formulario =
    document.getElementById("formularioCadastro");
```

O navegador transforma o HTML em uma estrutura de objetos.

O JavaScript pode então:

* localizar elementos;
* ler valores;
* modificar conteúdos;
* alterar atributos;
* adicionar eventos;
* criar mensagens;
* controlar a interface.

---

# 🖱️ Eventos

O projeto utiliza diversos eventos JavaScript.

## `click`

Utilizado no botão Mostrar/Ocultar senha:

```javascript
mostrarSenha.addEventListener(
    "click",
    function () {
        ...
    }
);
```

---

## `input`

Utilizado para detectar alterações enquanto o usuário digita:

```javascript
mensagem.addEventListener(
    "input",
    function () {
        ...
    }
);
```

Esse evento é utilizado, por exemplo, no contador de caracteres.

---

## `submit`

Utilizado quando o formulário é enviado:

```javascript
formulario.addEventListener(
    "submit",
    function (evento) {
        ...
    }
);
```

O projeto utiliza:

```javascript
evento.preventDefault();
```

para impedir o envio tradicional e permitir que o JavaScript processe os dados.

---

# 🔢 Contador de caracteres

O campo de mensagem possui limite de 300 caracteres.

O JavaScript conta os caracteres:

```javascript
const quantidade =
    mensagem.value.length;
```

Depois atualiza o HTML:

```javascript
contador.textContent =
    quantidade;
```

O resultado aparece como:

```text
45/300 caracteres
```

---

# 🔐 Mostrar e ocultar senha

O projeto possui um botão para alternar o tipo do campo:

```javascript
if (senha.type === "password") {

    senha.type = "text";

}
```

O fluxo é:

```text
password
   ↓
Clique
   ↓
text
   ↓
senha visível
```

Ao clicar novamente:

```text
text
   ↓
Clique
   ↓
password
   ↓
senha oculta
```

---

# 🧪 Validação de dados

O JavaScript verifica se os dados informados são válidos.

Exemplo:

```javascript
if (nome.value.trim().length < 3) {

    mostrarErro(
        "erroNome",
        "Digite seu nome completo."
    );

}
```

Também são verificados:

* nome;
* e-mail;
* telefone;
* CPF;
* data de nascimento;
* curso;
* senha;
* confirmação da senha;
* aceite dos termos.

---

# 📧 Validação de e-mail

O projeto utiliza uma expressão regular:

```javascript
const regraEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

Depois:

```javascript
if (!regraEmail.test(email.value)) {
    ...
}
```

A expressão verifica se o valor possui uma estrutura básica de e-mail.

Exemplo válido:

```text
aluno@exemplo.com
```

---

# ☎️ Máscara de telefone

O campo telefone recebe uma máscara automaticamente.

O usuário pode digitar:

```text
62999998888
```

e o JavaScript transforma para:

```text
(62) 99999-8888
```

Isso é realizado através do evento:

```javascript
telefone.addEventListener(
    "input",
    function () {
        ...
    }
);
```

---

# 🪪 Máscara de CPF

O CPF também recebe uma máscara.

Entrada:

```text
12345678900
```

Resultado:

```text
123.456.789-00
```

O JavaScript primeiro remove caracteres não numéricos:

```javascript
cpf.value.replace(/\D/g, "");
```

Depois reorganiza os números.

---

# 📮 Máscara de CEP

O mesmo princípio é utilizado no CEP.

Entrada:

```text
74000000
```

Resultado:

```text
74000-000
```

---

# 🔑 Validação da senha

O projeto verifica o tamanho da senha.

Menos de 8 caracteres:

```text
Senha fraca
```

Entre 8 e 11:

```text
Senha razoável
```

12 ou mais:

```text
Senha forte
```

A validação é feita durante a digitação.

---

# 🔁 Confirmação da senha

O sistema compara:

```javascript
senha.value
```

com:

```javascript
confirmarSenha.value
```

Se forem diferentes:

```text
As senhas não são iguais.
```

---

# ☑️ Checkbox

O projeto também verifica se o usuário aceitou os termos.

O JavaScript utiliza:

```javascript
termos.checked
```

Se o checkbox não estiver marcado:

```text
Você precisa aceitar os termos.
```

---

# 🔎 `querySelector()`

O JavaScript utiliza:

```javascript
document.querySelector(...)
```

para encontrar elementos específicos.

Exemplo:

```javascript
document.querySelector(
    'input[name="sexo"]:checked'
);
```

Esse código encontra o radio button selecionado.

---

# 🔎 `querySelectorAll()`

Também é utilizado:

```javascript
document.querySelectorAll(...)
```

Esse método permite encontrar vários elementos.

No projeto, ele é utilizado para descobrir quais tecnologias foram selecionadas:

```javascript
document.querySelectorAll(
    'input[name="tecnologias"]:checked'
);
```

---

# 📦 Array de tecnologias

As tecnologias selecionadas são armazenadas em um array:

```javascript
const tecnologias = [];
```

Depois:

```javascript
tecnologias.push(
    tecnologia.value
);
```

Por exemplo:

```text
[
    "HTML",
    "CSS",
    "JavaScript",
    "Java"
]
```

---

# 🧾 Resumo do cadastro

Depois da validação, o JavaScript cria um resumo dos dados.

São apresentados:

* nome;
* e-mail;
* telefone;
* CPF;
* curso;
* período;
* sexo;
* modalidade;
* endereço;
* CEP;
* tecnologias;
* mensagem.

O resumo é inserido dinamicamente na página.

---

# 🧠 `textContent` × `innerHTML`

O projeto apresenta dois conceitos importantes.

## `textContent`

Utilizado para alterar texto:

```javascript
contador.textContent = quantidade;
```

## `innerHTML`

Utilizado para inserir uma estrutura HTML:

```javascript
resumoCadastro.innerHTML = `
    <div class="resumo-item">
        ...
    </div>
`;
```

---

# 🛑 `preventDefault()`

Normalmente, quando um formulário é enviado, o navegador tenta realizar o envio.

Neste projeto:

```javascript
evento.preventDefault();
```

impede o comportamento padrão.

Isso permite que o JavaScript:

```text
1. Intercepte o envio
        ↓
2. Valide os campos
        ↓
3. Processe os dados
        ↓
4. Mostre o resultado
```

---

# 🔄 Fluxo completo da aplicação

```text
                    USUÁRIO
                       │
                       ▼
              Preenche formulário
                       │
                       ▼
                 Clica em enviar
                       │
                       ▼
                JavaScript
                       │
                       ▼
                 Validação
                 /       \
              ERRO       OK
               │          │
               ▼          ▼
          Mensagens     Coleta
          de erro       dados
                           │
                           ▼
                     Gera resumo
                           │
                           ▼
                    Exibe resultado
```

---

# 📊 Conceitos abordados

| Conceito             | Tecnologia | Aplicação                             |
| -------------------- | ---------- | ------------------------------------- |
| Estrutura semântica  | HTML5      | `header`, `main`, `section`, `footer` |
| Formulários          | HTML5      | `<form>`                              |
| Campos               | HTML5      | `<input>`                             |
| Listas               | HTML5      | `<select>`                            |
| Texto longo          | HTML5      | `<textarea>`                          |
| Agrupamento          | HTML5      | `<fieldset>`                          |
| Identificação        | HTML5      | `id`                                  |
| Classes              | HTML5/CSS  | `class`                               |
| Seletores            | CSS3       | `#id`, `.class`                       |
| Flexbox              | CSS3       | Organização dos campos                |
| Grid                 | CSS3       | Tecnologias                           |
| Responsividade       | CSS3       | `@media`                              |
| DOM                  | JavaScript | Manipulação da página                 |
| Eventos              | JavaScript | `click`, `input`, `submit`            |
| Validação            | JavaScript | Verificação dos dados                 |
| Regex                | JavaScript | E-mail                                |
| Máscaras             | JavaScript | CPF, telefone e CEP                   |
| Arrays               | JavaScript | Tecnologias                           |
| `querySelector()`    | JavaScript | Busca de elementos                    |
| `querySelectorAll()` | JavaScript | Busca múltipla                        |
| `textContent`        | JavaScript | Alteração de texto                    |
| `innerHTML`          | JavaScript | Geração do resumo                     |

---

# 🧪 Como executar

Não é necessário instalar servidor ou banco de dados.

Clone o repositório:

```bash
git clone https://github.com/GeorgeMendesMarra/front_end.git
```

Entre na pasta do projeto:

```bash
cd front_end/site2
```

Abra:

```text
index.html
```

Também é possível executar utilizando a extensão **Live Server** no Visual Studio Code.

---

# 🖥️ Testes sugeridos

Para utilizar o projeto em aula, recomenda-se testar:

### Teste 1 — Nome

Deixe o nome vazio.

Resultado esperado:

```text
Digite seu nome completo.
```

### Teste 2 — E-mail

Digite:

```text
teste
```

Resultado:

```text
Digite um e-mail válido.
```

### Teste 3 — Telefone

Digite poucos números.

Resultado:

```text
Digite um telefone válido.
```

### Teste 4 — Senha

Digite menos de 8 caracteres.

Resultado:

```text
Senha fraca.
```

### Teste 5 — Confirmação

Digite senhas diferentes.

Resultado:

```text
As senhas não são iguais.
```

### Teste 6 — Termos

Não marque os termos.

Resultado:

```text
Você precisa aceitar os termos.
```

### Teste 7 — Formulário completo

Preencha todos os campos corretamente.

Resultado:

```text
Cadastro realizado com sucesso!
```

---

# 🎓 Utilização pedagógica

Este projeto pode ser utilizado como uma segunda etapa no ensino de desenvolvimento Web.

## Etapa 1 — Fundamentos

Projeto anterior:

```text
HTML
 ↓
CSS
 ↓
JavaScript
```

Conceitos:

* estrutura;
* estilos;
* `id`;
* `class`;
* DOM;
* eventos básicos.

## Etapa 2 — Formulários

Este projeto:

```text
HTML
 ↓
FORMULÁRIO
 ↓
CSS
 ↓
JAVASCRIPT
 ↓
VALIDAÇÃO
 ↓
RESULTADO
```

Conceitos adicionais:

* formulários;
* eventos;
* validação;
* máscaras;
* DOM;
* arrays;
* expressões regulares;
* responsividade.

---

# 🚀 Possíveis evoluções

Este projeto pode ser utilizado como base para projetos mais avançados.

### Versão 3 — Back-End

Conectar o formulário a:

```text
Java
Spring Boot
Servlet
JSP
Struts
```

### Versão 4 — Banco de dados

Adicionar:

```text
MySQL
PostgreSQL
MariaDB
Oracle
```

### Versão 5 — API REST

Criar uma API:

```text
HTML/CSS/JS
       ↓
    Fetch API
       ↓
   REST API
       ↓
    Java
       ↓
   Banco de Dados
```

### Versão 6 — Full Stack

```text
              FRONT-END
        HTML + CSS + JavaScript
                    │
                    ▼
                 REST API
                    │
                    ▼
                BACK-END
             Java / Spring
                    │
                    ▼
                DATABASE
           MySQL / PostgreSQL
```

---

# 🔐 Observação sobre segurança

Este projeto possui finalidade **educacional**.

Os dados são processados apenas no navegador e **não são enviados para um servidor ou banco de dados**.

Portanto, a validação JavaScript não deve ser considerada mecanismo suficiente de segurança em uma aplicação real.

Em uma aplicação profissional, a validação deve ocorrer também no servidor.

---

# 📌 Características

* [x] HTML5
* [x] CSS3
* [x] JavaScript
* [x] Formulário completo
* [x] `id`
* [x] `class`
* [x] `name`
* [x] `label`
* [x] `fieldset`
* [x] `legend`
* [x] Input text
* [x] Input email
* [x] Input tel
* [x] Input date
* [x] Input password
* [x] Radio buttons
* [x] Checkboxes
* [x] Select
* [x] Textarea
* [x] Validação JavaScript
* [x] Eventos
* [x] DOM
* [x] Máscara de CPF
* [x] Máscara de telefone
* [x] Máscara de CEP
* [x] Validação de senha
* [x] Mostrar/ocultar senha
* [x] Contador de caracteres
* [x] Flexbox
* [x] CSS Grid
* [x] Media Query
* [x] Layout responsivo
* [x] Resumo dos dados
* [x] Mensagens de erro
* [x] Mensagem de sucesso

---

# 👨‍🏫 Contexto acadêmico

**Disciplina:** Programação Web I
**Curso:** Análise e Desenvolvimento de Sistemas — ADS
**Tema:** Desenvolvimento Front-End e formulários Web
**Nível:** Fundamentos / Intermediário
**Tecnologias:** HTML5, CSS3 e JavaScript

---

# 👨‍💻 Autor

**Professor George Mendes Marra**

Projeto desenvolvido para fins acadêmicos e didáticos, com foco no ensino dos fundamentos de desenvolvimento Web Front-End.

---

# 📜 Licença

Este projeto possui finalidade educacional e acadêmica.

Pode ser utilizado para estudos, aulas, demonstrações e exercícios de programação Web.

---

## ⭐ Conceito central

O principal objetivo deste projeto é demonstrar que uma aplicação Web não é construída por uma única tecnologia:

```text
HTML5
ESTRUTURA
     │
     ▼
CSS3
APRESENTAÇÃO
     │
     ▼
JavaScript
COMPORTAMENTO
     │
     ▼
APLICAÇÃO WEB
```

**HTML cria. CSS organiza e apresenta. JavaScript dá comportamento.**

Essa separação de responsabilidades constitui uma das bases fundamentais do desenvolvimento Front-End moderno.
