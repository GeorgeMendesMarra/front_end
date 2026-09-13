# Roteiro Progressivo de Front-End: HTML → CSS → JavaScript → jQuery + Bootstrap

Este roteiro reúne toda a sequência em um único documento, mostrando como o mesmo projeto evolui em camadas. Cada fase pode ser entregue como uma etapa própria da disciplina, sempre construindo em cima da anterior.

---

## Fase 0 — Planejamento (vale para o projeto inteiro)

- **Objetivo do site**: qual problema ele resolve? Para quem é?
- **Páginas ou seções**: uma página só ou várias?
- **Conteúdo mínimo**: título, textos, imagens, formulário.
- **Wireframe rápido**: rascunho simples do cabeçalho, menu, conteúdo principal e rodapé.

### Organização de pastas (evolui a cada fase)

```
meu-projeto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
└── lib/
    └── (jquery, bootstrap — quando entrarem)
```

---

## Fase 1 — HTML (estrutura e semântica)

Objetivo: organizar o conteúdo com as tags certas, sem se preocupar ainda com aparência.

- Esqueleto correto: `<!DOCTYPE html>`, `lang="pt-br"`, `<meta charset="UTF-8">`, `<meta name="viewport">`.
- Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Hierarquia de títulos (`h1` único, `h2`/`h3` em ordem), `<img alt="...">`, listas, formulário com `<label>`.

Checklist:
- [ ] Estrutura semântica completa e validada no validador do W3C
- [ ] Navegação entre páginas funcionando (se houver mais de uma)

---

## Fase 2 — CSS (estilo e layout)

Objetivo: dar aparência e responsividade ao HTML já estruturado.

- Reset básico + variáveis CSS (`:root { --cor-primaria: ...; }`).
- Tipografia e hierarquia visual.
- Layout com Flexbox ou Grid.
- Mobile-first: estilizar para telas pequenas primeiro, depois `@media` para telas maiores.
- Estados (`:hover`, `:focus`) e transições simples.

Checklist:
- [ ] Site funciona bem em pelo menos 3 larguras de tela
- [ ] Cores e fontes centralizadas em variáveis
- [ ] Nenhum CSS inline no HTML

---

## Fase 3 — JavaScript (interatividade com JS puro)

Objetivo: adicionar comportamento dinâmico usando só vanilla JS, antes de qualquer biblioteca.

- Seleção de elementos (`document.querySelector`).
- Manipulação do DOM (`classList.add/remove/toggle`, `textContent`).
- Eventos (`addEventListener`).
- Validação de formulário.
- Funcionalidades para praticar: menu responsivo, modo escuro/claro, contador, carrossel simples.

Checklist:
- [ ] Pelo menos uma funcionalidade interativa implementada do zero
- [ ] Nenhum erro no console do navegador
- [ ] Funções nomeadas e comentadas em `script.js`

---

## Fase 4 — jQuery + Bootstrap (produtividade e componentes prontos)

Objetivo: usar jQuery para simplificar manipulação do DOM/eventos, e Bootstrap para acelerar layout e componentes visuais — sempre entendendo o que cada ferramenta está automatizando por baixo dos panos.

### jQuery

- Importar via CDN:
  ```html
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  ```
- Reescrever seletores com `$()`.
- Métodos de evento (`.on('click', ...)`) e manipulação (`.addClass()`, `.toggleClass()`, `.fadeIn()/.fadeOut()`, `.slideToggle()`).
- Se precisar de dados externos: `$.ajax()` ou `$.getJSON()`.

### Bootstrap

- Importar CSS e JS via CDN (verificar a versão atual na documentação oficial antes de usar):
  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  ```
- Substituir o grid manual em CSS puro pelo sistema de grid do Bootstrap (`container`, `row`, `col-*`).
- Usar componentes prontos onde fizer sentido: navbar, cards, botões, modais, carrossel — sempre comparando com o que foi feito manualmente nas fases anteriores.
- Cuidado pedagógico: Bootstrap não substitui o aprendizado de CSS/JS — ele acelera o que já foi entendido nas fases 2 e 3. Evite que o aluno pule direto pra cá sem ter passado pelas fases anteriores.

Checklist:
- [ ] Ao menos um componente Bootstrap usado corretamente (navbar, card ou modal)
- [ ] Grid do Bootstrap substituindo (ou complementando) o layout manual, sem quebrar a responsividade
- [ ] jQuery usado para pelo menos uma interação que antes era feita em JS puro, com comentário comparando as duas formas

---

## Fase 5 — Testes, versionamento e entrega (vale para o projeto inteiro)

- [ ] Testar em pelo menos 3 larguras de tela
- [ ] Validar HTML e checar console do navegador sem erros
- [ ] Commits pequenos e descritivos ao longo de todas as fases
- [ ] README explicando o projeto e as tecnologias usadas em cada fase
- [ ] Publicar com GitHub Pages, se possível

---

## Checklist geral por fase

| Fase | Tecnologias | Feito? |
|---|---|---|
| 1 | HTML | ☐ |
| 2 | HTML + CSS | ☐ |
| 3 | HTML + CSS + JS | ☐ |
| 4 | HTML + CSS + JS + jQuery + Bootstrap | ☐ |
| 5 | Testes e entrega | ☐ |

Essa progressão funciona bem como trilha da disciplina: cada fase pode virar uma entrega intermediária, e o aluno chega ao projeto final (Fase 4) já tendo dominado, na prática, o que cada camada de tecnologia resolve.
