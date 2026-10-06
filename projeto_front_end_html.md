# Roteiro para Iniciar um Projeto de Front-End (somente HTML)

Este é o roteiro mais básico da sequência: só estrutura, sem estilo e sem interatividade. Serve como primeiro contato com a disciplina, focado em entender semântica e organização de conteúdo antes de qualquer preocupação visual.

---

## Etapa 1 — Planejamento antes de escrever código

- **Objetivo da página**: que conteúdo ela vai apresentar? Para quem é?
- **Páginas ou seções**: uma página só ou várias (ex.: `index.html`, `sobre.html`, `contato.html`)?
- **Conteúdo mínimo**: título, textos, imagens, links — o essencial da primeira versão.
- **Estrutura da informação**: qual vem primeiro, o que é mais importante, como agrupar os assuntos.

---

## Etapa 2 — Organização de pastas e arquivos

```
meu-projeto/
├── index.html
├── sobre.html
├── contato.html
└── img/
    └── (imagens do projeto)
```

Boas práticas:
- Nomes de arquivos em minúsculas, sem espaços e sem acentos (`sobre-nos.html`, não `Sobre Nós.html`).
- Um arquivo HTML por página.
- Repositório no GitHub desde o primeiro commit, mesmo com o projeto simples.

---

## Etapa 3 — Estrutura base do documento

Todo arquivo HTML deve começar com o esqueleto correto:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da página</title>
</head>
<body>

</body>
</html>
```

Checklist:
- [ ] `<!DOCTYPE html>` presente
- [ ] `lang="pt-br"` na tag `<html>`
- [ ] `<meta charset="UTF-8">` para acentuação correta
- [ ] `<meta name="viewport">` para telas de celular
- [ ] `<title>` descritivo e único por página

---

## Etapa 4 — Conteúdo e tags semânticas

Organizar o conteúdo usando as tags certas para cada função, em vez de recorrer só a `<div>`:

- `<header>` — cabeçalho da página (título, logo, menu)
- `<nav>` — links de navegação entre páginas/seções
- `<main>` — conteúdo principal (deve aparecer uma vez por página)
- `<section>` — blocos de conteúdo relacionado
- `<article>` — conteúdo que faz sentido sozinho (notícia, post, produto)
- `<aside>` — conteúdo complementar
- `<footer>` — rodapé (contato, direitos autorais)

Tags de conteúdo mais usadas:
- `<h1>` a `<h6>` — títulos, sempre em ordem hierárquica (um único `<h1>` por página)
- `<p>` — parágrafos
- `<a href="...">` — links (internos e externos)
- `<img src="..." alt="...">` — imagens, sempre com `alt` descritivo
- `<ul>`/`<ol>` + `<li>` — listas não ordenadas e ordenadas
- `<table>` — dados tabulares (não usar para layout)
- `<form>` + `<label>`, `<input>`, `<textarea>`, `<button>` — formulários

Checklist:
- [ ] Hierarquia de títulos correta e sem pular níveis
- [ ] Todo link com `href` válido
- [ ] Toda imagem com `alt` explicando o conteúdo
- [ ] Formulário (se houver) com `<label>` associado a cada campo via `for`/`id`

---

## Etapa 5 — Navegação entre páginas

Se o projeto tiver mais de uma página:

- Criar um menu (`<nav>`) repetido de forma consistente em todas as páginas.
- Usar links relativos (`sobre.html`, não o caminho completo do computador).
- Testar se todos os links realmente levam à página certa.

---

## Etapa 6 — Testes e revisão

- [ ] Abrir cada página no navegador e conferir se o conteúdo aparece como esperado
- [ ] Validar o HTML no validador do W3C (ajuda a pegar tags mal fechadas ou aninhadas errado)
- [ ] Revisar a ortografia e a formatação dos textos
- [ ] Conferir se todas as imagens carregam corretamente

---

## Etapa 7 — Versionamento e entrega

- Commits pequenos e descritivos, em vez de um único commit no final.
- README explicando do que se trata o projeto.
- Publicar com GitHub Pages, se possível, para gerar um link de demonstração.

---

## Checklist final resumido

| Etapa | Feito? |
|---|---|
| Planejamento do conteúdo | ☐ |
| Estrutura de pastas | ☐ |
| Esqueleto HTML correto | ☐ |
| Tags semânticas aplicadas | ☐ |
| Navegação entre páginas | ☐ |
| Testes e revisão | ☐ |
| Commits + README | ☐ |

Este é o ponto de partida da sequência: dominar a estrutura e a semântica do HTML aqui torna a Etapa de CSS (no próximo roteiro) muito mais tranquila, porque o conteúdo já estará bem organizado para receber o estilo.
