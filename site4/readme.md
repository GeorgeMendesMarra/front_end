# Site 4 — Continuação de Programação Web I (jQuery)

Quarto exemplo didático da sequência de desenvolvimento Front-End da disciplina **Programação Web I**, agora introduzindo a biblioteca **jQuery** sobre a base de HTML5, CSS3 e JavaScript.

## Evolução

- **Site 1:** fundamentos da integração HTML + CSS + JavaScript, DOM, `id`, `class` e eventos.
- **Site 2:** formulário acadêmico, validação, máscaras, eventos, DOM, Flexbox e CSS Grid.
- **Site 3:** menu de navegação, múltiplas seções, navegação suave, menu responsivo e destaque da seção atual.
- **Site 4:** introdução ao jQuery — seletores `$()`, eventos com `.on()`, efeitos (`fadeIn()`/`fadeOut()`/`slideToggle()`), `toggleClass()` e `.each()`.

## Estrutura esperada

```text
front_end/
├── site1/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── site2/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── site3/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── site4/
    ├── index.html
    ├── style.css
    ├── script.js
    └── readme.md
```

Os links do Site 4 usam `../site1/index.html`, `../site2/index.html` e `../site3/index.html`. Portanto, mantenha os quatro diretórios no mesmo nível.

## Por que jQuery?

O jQuery é uma biblioteca **escrita em JavaScript** que oferece funções prontas para tarefas muito comuns — selecionar elementos, escutar eventos e criar efeitos visuais — usando uma sintaxe curta baseada no símbolo `$`. Ela não substitui o JavaScript: continua rodando sobre ele, apenas reduz a quantidade de código necessária para fazer o que já era feito "na mão" nos Sites 1 e 3.

Ela é carregada por um CDN, antes do arquivo `script.js`:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="script.js"></script>
```

## Conteúdos trabalhados

### HTML5
- Reaproveitamento da estrutura semântica dos sites anteriores (`header`, `nav`, `main`, `section`, `footer`).
- Novos elementos interativos: botão de curtir, botão de tema e acordeão de perguntas frequentes.

### CSS3
- Reaproveitamento das variáveis visuais (cores, cartões, botões) definidas no Site 3.
- Estilo para os novos componentes: `.botao-curtir`, `.item-faq`/`.pergunta`/`.resposta` e `body.modo-escuro`.
- Grades (`grid-template-columns: repeat(auto-fit, minmax(...))`) que se adaptam automaticamente ao número de cartões.

### jQuery
- `$(document).ready()` — aguarda o carregamento do HTML antes de executar o script.
- `$("#id")` e `$(".classe")` — seleção de elementos.
- `.on("click", ...)` — captura de eventos.
- `.toggleClass()` / `.addClass()` / `.removeClass()` / `.hasClass()` — manipulação de classes CSS.
- `.text()` — leitura e alteração de conteúdo textual.
- `.fadeIn()` / `.fadeOut()` — efeitos de transparência.
- `.slideToggle()` — efeito de abrir/fechar com deslizamento, usado no acordeão de perguntas.
- `.next()` — seleção do elemento irmão seguinte.
- `.each()` — repetição sobre um conjunto de elementos.
- `.offset()` / `.outerHeight()` / `.scrollTop()` — cálculo de posição para destacar o link do menu durante a rolagem.

## Exemplos interativos da seção jQuery

1. **Selecionar e exibir** — troca o texto de uma mensagem com `fadeOut()`/`fadeIn()`.
2. **Curtir com jQuery** — alterna o estado de um botão com `toggleClass()` e atualiza um contador.
3. **Tema claro e escuro** — alterna uma classe na tag `<body>` para trocar as cores de toda a página.
4. **Perguntas frequentes** — acordeão simples com `slideToggle()` e `next()`.

## Próximos passos sugeridos

Depois do Site 4, o aluno pode avançar para o consumo de APIs (`fetch()` em JavaScript puro ou `$.ajax()`/`$.get()` do jQuery), armazenamento local (`localStorage`) e, mais adiante, integração com back-end.
