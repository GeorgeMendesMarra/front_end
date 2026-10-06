# Roteiro para Iniciar um Projeto de Front-End (HTML + CSS)

Este roteiro é a versão mais enxuta do projeto: só estrutura e estilo, sem nenhuma interatividade em JavaScript. É o ponto de partida ideal para quem está começando na disciplina.

---

## Etapa 1 — Planejamento antes de escrever código

- **Objetivo do site**: qual problema ele resolve? Para quem é?
- **Páginas ou seções**: uma página só ou várias (ex.: `index.html`, `sobre.html`, `contato.html`)?
- **Conteúdo mínimo**: título, textos, imagens — o essencial da primeira versão.
- **Wireframe rápido**: rascunho simples mostrando cabeçalho, menu, conteúdo principal e rodapé.

---

## Etapa 2 — Organização de pastas e arquivos

```
meu-projeto/
├── index.html
├── css/
│   └── style.css
└── img/
    └── (imagens do projeto)
```

Boas práticas:
- Nomes de arquivos em minúsculas, sem espaços (`sobre-nos.html`).
- HTML e CSS sempre em arquivos separados (nada de `style` inline).
- Repositório no GitHub desde o primeiro commit.

---

## Etapa 3 — Estrutura HTML semântica

Usar tags semânticas em vez de `<div>` para tudo:

- `<header>` — cabeçalho e navegação
- `<nav>` — menu principal
- `<main>` — conteúdo central
- `<section>` — blocos de conteúdo
- `<article>` — conteúdo que faz sentido isolado (card, post)
- `<aside>` — conteúdo complementar (barra lateral, destaque)
- `<footer>` — rodapé

Checklist:
- [ ] `<!DOCTYPE html>` e `lang="pt-br"`
- [ ] `<meta charset="UTF-8">` e `<meta name="viewport">`
- [ ] Hierarquia de títulos correta (`h1` único por página, `h2`/`h3` em ordem)
- [ ] Uso correto de `<a>`, `<img>` (com `alt`), listas (`<ul>`/`<ol>`) onde fizer sentido
- [ ] Formulário (se houver) com `<label>` associado a cada campo

---

## Etapa 4 — Estilização com CSS

1. **Reset básico** (zerar margens/paddings padrão do navegador).
2. **Variáveis CSS** (`:root { --cor-primaria: ...; }`) para cores, fontes e espaçamentos — facilita manter consistência entre páginas.
3. **Tipografia**: escolher fonte, definir tamanhos e hierarquia visual entre títulos e textos.
4. **Layout** com Flexbox ou Grid para organizar header, main, seções e footer.
5. **Mobile-first**: estilizar primeiro para telas pequenas, depois usar `@media` para adaptar a telas maiores.
6. **Estados visuais**: `:hover`, `:focus` em links e botões, transições simples para dar acabamento.

Checklist:
- [ ] Site funciona em tela de celular antes de ajustar para desktop
- [ ] Pelo menos um breakpoint de `@media` testado
- [ ] Cores e fontes centralizadas em variáveis, não repetidas em cada seletor
- [ ] Espaçamento consistente entre seções

---

## Etapa 5 — Testes e revisão

- [ ] Testar em pelo menos 3 larguras de tela (celular, tablet, desktop)
- [ ] Verificar todos os links (inclusive links internos com âncora, `#secao`)
- [ ] Validar o HTML no validador do W3C
- [ ] Conferir contraste de cores e tamanho de fonte para legibilidade
- [ ] Revisar se todas as imagens têm texto alternativo (`alt`)

---

## Etapa 6 — Versionamento e entrega

- Commits pequenos e descritivos (`git commit -m "adiciona seção de contato"`), em vez de um único commit no final.
- README explicando o que o projeto faz e como visualizá-lo.
- Publicar com GitHub Pages, se possível, para gerar um link de demonstração.

---

## Checklist final resumido

| Etapa | Feito? |
|---|---|
| Planejamento e wireframe | ☐ |
| Estrutura de pastas | ☐ |
| HTML semântico | ☐ |
| CSS mobile-first | ☐ |
| Testes e revisão | ☐ |
| Commits + README | ☐ |

Este roteiro é a base de tudo: uma vez que os alunos dominem bem a estrutura em HTML e a estilização em CSS, fica muito mais natural avançar para o roteiro com JavaScript puro, e depois para o roteiro com jQuery.
