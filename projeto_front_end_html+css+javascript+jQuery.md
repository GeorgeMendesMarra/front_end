# Roteiro para Iniciar um Projeto de Front-End (HTML + CSS + JavaScript + jQuery)

Este roteiro serve como guia passo a passo para os alunos que estão começando um projeto de front-end na disciplina de Programação Web I. Ele segue a mesma lógica de progressão usada em sala: primeiro a estrutura, depois o estilo, depois a interatividade.

---

## Etapa 1 — Planejamento antes de escrever código

Antes de abrir o editor, defina no papel (ou num documento simples):

- **Objetivo do site**: qual problema ele resolve? Para quem é?
- **Páginas ou seções**: uma landing page com uma só página, ou várias páginas?
- **Conteúdo mínimo**: título, textos, imagens, formulários — o que é essencial para a primeira versão?
- **Wireframe rápido**: um rascunho simples (papel, Figma ou até um quadro dividido em blocos) mostrando onde ficam cabeçalho, menu, conteúdo principal e rodapé.

> Dica para os alunos: um wireframe de 5 minutos evita retrabalho de 5 horas depois.

---

## Etapa 2 — Organização de pastas e arquivos

Estrutura recomendada para manter o projeto organizado desde o início:

```
meu-projeto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── (imagens do projeto)
└── lib/
    └── jquery.min.js (ou via CDN)
```

Boas práticas:
- Nomes de arquivos e pastas em minúsculas, sem espaços (use hífen: `sobre-nos.html`).
- Separar sempre HTML, CSS e JS em arquivos próprios — nada de `style` inline ou `<script>` gigante dentro do HTML.
- Criar o repositório no GitHub desde o primeiro commit, mesmo que o projeto ainda esteja incompleto.

---

## Etapa 3 — Estrutura HTML semântica

Montar o esqueleto da página usando tags semânticas em vez de `<div>` para tudo:

- `<header>` para cabeçalho e menu de navegação
- `<nav>` para a navegação principal
- `<main>` para o conteúdo central
- `<section>` para blocos de conteúdo dentro da página
- `<article>` quando o conteúdo faz sentido sozinho (ex.: um card de post, produto)
- `<footer>` para rodapé

Checklist desta etapa:
- [ ] `<!DOCTYPE html>` e `lang="pt-br"` definidos
- [ ] `<meta charset="UTF-8">` e `<meta name="viewport">` configurados
- [ ] Hierarquia de títulos correta (`h1` único por página, `h2`, `h3` em ordem lógica)
- [ ] IDs e classes já pensados para depois serem usados no CSS e no JS/jQuery

---

## Etapa 4 — Estilização com CSS

Com o HTML pronto, começar o CSS de forma incremental:

1. **Reset/normalização básica** (zerar margens e paddings padrão do navegador).
2. **Variáveis CSS** (`:root { --cor-primaria: ...; }`) para cores, fontes e espaçamentos — facilita manter consistência.
3. **Layout geral** com Flexbox ou Grid para organizar header, main e footer.
4. **Mobile-first**: estilizar primeiro para telas pequenas, depois usar `@media` para adaptar a telas maiores.
5. **Detalhes visuais**: tipografia, cores de hover, transições simples.

Checklist desta etapa:
- [ ] O site funciona em tela de celular antes de se preocupar com desktop
- [ ] Pelo menos um breakpoint de `@media` testado
- [ ] Nenhum CSS inline no HTML

---

## Etapa 5 — Interatividade com JavaScript puro

Antes de usar jQuery, é importante confirmar que os fundamentos de JS estão dominados:

- Seleção de elementos (`document.querySelector`)
- Manipulação do DOM (`textContent`, `classList.add/remove/toggle`)
- Eventos (`addEventListener('click', ...)`)
- Validação simples de formulário

Use esta etapa para funcionalidades que não dependem de bibliotecas: menu responsivo (abrir/fechar), validação de campos, troca de classe para exibir/ocultar elementos.

---

## Etapa 6 — Incrementando com jQuery

Depois que a lógica em JS puro está clara, jQuery entra para simplificar tarefas repetitivas:

- Importar a biblioteca via CDN no `<head>` ou antes do fechamento do `</body>`:
  ```html
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="js/script.js"></script>
  ```
- Reescrever seletores com `$()` no lugar de `document.querySelector`.
- Usar métodos de evento (`.on('click', ...)`), manipulação (`.addClass()`, `.toggleClass()`, `.fadeIn()/.fadeOut()`, `.slideToggle()`) para dar polimento visual com pouco código.
- Se o projeto envolver dados externos, esta é a etapa para introduzir `$.ajax()` ou `$.getJSON()`.

> Boa prática pedagógica: peça para os alunos comentarem, ao lado de cada trecho em jQuery, como o mesmo efeito seria feito em JS puro. Isso reforça o entendimento em vez de só "copiar receita".

---

## Etapa 7 — Testes e responsividade

- [ ] Testar em pelo menos 3 larguras de tela (celular, tablet, desktop)
- [ ] Verificar todos os links e botões
- [ ] Validar o HTML (validador do W3C) e checar erros no console do navegador
- [ ] Conferir contraste de cores e tamanho de fonte para legibilidade

---

## Etapa 8 — Versionamento e entrega

- Commits pequenos e descritivos (`git commit -m "adiciona menu responsivo"`), em vez de um único commit gigante no final.
- README no repositório explicando o que o projeto faz e como rodar.
- Se possível, publicar com GitHub Pages para gerar um link funcional de demonstração.

---

## Checklist final resumido

| Etapa | Feito? |
|---|---|
| Planejamento e wireframe | ☐ |
| Estrutura de pastas | ☐ |
| HTML semântico | ☐ |
| CSS mobile-first | ☐ |
| JS puro (fundamentos) | ☐ |
| jQuery (polimento) | ☐ |
| Testes de responsividade | ☐ |
| Commits + README | ☐ |

Esse roteiro pode ser seguido de forma linear, mas nada impede que os alunos avancem para o CSS ou o JS em paralelo, contanto que a estrutura HTML básica já esteja pronta.
