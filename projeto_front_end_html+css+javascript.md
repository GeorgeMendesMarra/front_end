# Roteiro para Iniciar um Projeto de Front-End (HTML + CSS + JavaScript)

Este roteiro é a versão do projeto sem jQuery — útil para etapas iniciais da disciplina, em que o foco é consolidar os fundamentos antes de introduzir bibliotecas.

---

## Etapa 1 — Planejamento antes de escrever código

- **Objetivo do site**: qual problema ele resolve? Para quem é?
- **Páginas ou seções**: uma página só ou várias?
- **Conteúdo mínimo**: título, textos, imagens, formulário — o essencial da primeira versão.
- **Wireframe rápido**: rascunho simples mostrando cabeçalho, menu, conteúdo principal e rodapé.

---

## Etapa 2 — Organização de pastas e arquivos

```
meu-projeto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    └── (imagens do projeto)
```

Boas práticas:
- Nomes de arquivos em minúsculas, sem espaços (`sobre-nos.html`).
- HTML, CSS e JS sempre em arquivos separados.
- Repositório no GitHub desde o primeiro commit.

---

## Etapa 3 — Estrutura HTML semântica

Usar tags semânticas em vez de `<div>` para tudo:

- `<header>` — cabeçalho e navegação
- `<nav>` — menu principal
- `<main>` — conteúdo central
- `<section>` — blocos de conteúdo
- `<article>` — conteúdo que faz sentido isolado (card, post)
- `<footer>` — rodapé

Checklist:
- [ ] `<!DOCTYPE html>` e `lang="pt-br"`
- [ ] `<meta charset="UTF-8">` e `<meta name="viewport">`
- [ ] Hierarquia de títulos correta (`h1` único, `h2`/`h3` em ordem)
- [ ] IDs e classes já pensados para uso posterior no CSS e no JS

---

## Etapa 4 — Estilização com CSS

1. **Reset básico** (zerar margens/paddings padrão do navegador).
2. **Variáveis CSS** (`:root { --cor-primaria: ...; }`) para cores, fontes e espaçamentos.
3. **Layout** com Flexbox ou Grid para header, main e footer.
4. **Mobile-first**: estilizar primeiro para telas pequenas, depois `@media` para telas maiores.
5. **Detalhes visuais**: tipografia, hover, transições simples.

Checklist:
- [ ] Site funciona em tela de celular antes de ajustar para desktop
- [ ] Pelo menos um breakpoint de `@media` testado
- [ ] Nenhum CSS inline no HTML

---

## Etapa 5 — Interatividade com JavaScript

Como não há jQuery neste projeto, todo comportamento dinâmico é feito com JS puro (vanilla JS):

- **Seleção de elementos**: `document.querySelector` / `querySelectorAll`
- **Manipulação do DOM**: `textContent`, `innerHTML` (com cuidado), `classList.add/remove/toggle`
- **Eventos**: `addEventListener('click', ...)`, `('submit', ...)`, `('input', ...)`
- **Validação de formulário**: checar campos vazios, formato de e-mail, exibir mensagens de erro
- **Funcionalidades comuns para praticar**: menu responsivo (abrir/fechar), modo escuro/claro, contador, troca de conteúdo por clique, carrossel simples

Organize o `script.js` em funções pequenas e nomeadas (`function abrirMenu() {...}`), em vez de um único bloco de código solto. Facilita tanto a leitura quanto a correção.

Checklist:
- [ ] Pelo menos uma funcionalidade interativa implementada do zero
- [ ] Código comentado explicando o que cada função faz
- [ ] Nenhum erro no console do navegador

---

## Etapa 6 — Testes e responsividade

- [ ] Testar em pelo menos 3 larguras de tela (celular, tablet, desktop)
- [ ] Verificar todos os links, botões e formulários
- [ ] Validar o HTML no validador do W3C
- [ ] Conferir contraste de cores e tamanho de fonte

---

## Etapa 7 — Versionamento e entrega

- Commits pequenos e descritivos, em vez de um único commit no final.
- README explicando o que o projeto faz e como rodar.
- Publicar com GitHub Pages, se possível, para gerar link de demonstração.

---

## Checklist final resumido

| Etapa | Feito? |
|---|---|
| Planejamento e wireframe | ☐ |
| Estrutura de pastas | ☐ |
| HTML semântico | ☐ |
| CSS mobile-first | ☐ |
| JavaScript (interatividade) | ☐ |
| Testes de responsividade | ☐ |
| Commits + README | ☐ |

Este roteiro é o passo anterior natural ao roteiro com jQuery: uma vez que os alunos dominem bem a Etapa 5 usando apenas JavaScript puro, fica muito mais fácil entender o que o jQuery está simplificando por baixo dos panos.
