# Site 3 — Continuação de Programação Web I

Terceiro exemplo didático da sequência de desenvolvimento Front-End da disciplina **Programação Web I**, utilizando HTML5, CSS3 e JavaScript.

## Evolução

- **Site 1:** fundamentos da integração HTML + CSS + JavaScript, DOM, `id`, `class` e eventos.
- **Site 2:** formulário acadêmico, validação, máscaras, eventos, DOM, Flexbox e CSS Grid.
- **Site 3:** menu de navegação, múltiplas seções, navegação suave, menu responsivo, destaque da seção atual e novas interações JavaScript.

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
└── site3/
    ├── index.html
    ├── style.css
    ├── script.js
    └── readme.md
```

Os links do Site 3 usam `../site1/index.html` e `../site2/index.html`. Portanto, mantenha os três diretórios no mesmo nível.

## Conteúdos trabalhados

### HTML5
- Estrutura semântica.
- `header`, `nav`, `main`, `section`, `article` e `footer`.
- Links internos com `href="#id"`.
- Botões.
- Atributos `id`, `class`, `aria-label` e `aria-expanded`.

### CSS3
- Seletores por elemento, classe e id.
- Flexbox.
- CSS Grid.
- `position: sticky`.
- Pseudoestados `:hover`.
- Transições.
- Media Queries.
- Layout responsivo.
- `clamp()` para tipografia responsiva.

### JavaScript
- `DOMContentLoaded`.
- `getElementById()`.
- `querySelector()`.
- `querySelectorAll()`.
- `addEventListener()`.
- `classList.toggle()`.
- `classList.add()` e `classList.remove()`.
- `setAttribute()`.
- `textContent`.
- `setTimeout()`.
- `IntersectionObserver`.

## Relação HTML → CSS

```html
<link rel="stylesheet" href="style.css">
```

O atributo `href` informa qual arquivo CSS será carregado.

## Relação HTML → JavaScript

```html
<script src="script.js"></script>
```

O atributo `src` informa qual arquivo JavaScript será carregado.

## Relação HTML → CSS por class

```html
<a class="link-menu">Início</a>
```

No CSS:

```css
.link-menu {
    padding: 10px;
}
```

A `class` do HTML é referenciada no CSS utilizando `.`.

## Relação HTML → JavaScript por id

```html
<button id="botaoMenu">☰</button>
```

No JavaScript:

```javascript
const botaoMenu = document.getElementById("botaoMenu");
```

O `id` permite localizar diretamente um elemento no DOM.

## Menu responsivo

No computador, os links aparecem horizontalmente.

Em telas menores, o CSS transforma o menu em um menu móvel e o JavaScript controla a abertura e o fechamento.

## Objetivo pedagógico

O Site 3 deve ser utilizado como continuidade dos Sites 1 e 2, permitindo que o estudante perceba que uma aplicação Web pode evoluir incrementalmente:

```text
HTML
  ↓
HTML + CSS
  ↓
HTML + CSS + JavaScript
  ↓
Formulários + DOM + eventos
  ↓
Menu + navegação + responsividade
  ↓
Aplicações Web mais completas
```
