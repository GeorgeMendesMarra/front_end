# Site 6 — Programação Web I (Bootstrap para quem nunca viu Bootstrap)

Sexto exemplo da sequência de Front-End da disciplina **Programação Web I**. Aqui o aluno vê o **mesmo painel de estoque do Site 5**, agora construído com **Bootstrap 5**. Como a lógica é a mesma, fica fácil perceber o que o Bootstrap muda: **quase todo o visual passa a vir de classes prontas**, em vez de centenas de linhas de CSS escritas à mão.

## Evolução

- **Site 1 a 3:** HTML + CSS + JavaScript, formulário, menu e responsividade escritos "na mão".
- **Site 4:** introdução ao jQuery.
- **Site 5:** painel de estoque com dados em JSON, filtros, ordenação, KPIs e gráfico, com CSS próprio (351 linhas).
- **Site 6:** o mesmo painel com **Bootstrap**; o CSS próprio cai para poucas linhas.

## Estrutura

```text
site6/
├── index.html
├── css/
│   └── estilo.css      (só 5 regras: o resto vem do Bootstrap)
├── js/
│   └── script.js
├── data/
│   └── estoque.json
└── readme.md
```

O Site 6 é independente dos anteriores, como o Site 5.

## O que é o Bootstrap?

O **Bootstrap** é uma biblioteca de **CSS (e um pouco de JavaScript)** que já traz prontos botões, formulários, tabelas, menus, cartões, janelas pop-up e um sistema de grade responsivo. Em vez de escrever o CSS de um botão, você escreve **no HTML** o nome das classes:

```html
<!-- Sem Bootstrap: você precisa escrever o CSS do botão -->
<button class="meu-botao">Salvar</button>

<!-- Com Bootstrap: o visual vem da classe -->
<button class="btn btn-primary">Salvar</button>
```

Ele não substitui HTML, CSS nem JavaScript: continua sendo CSS e JavaScript, só que já escritos por outras pessoas. Por isso o Site 6 só faz sentido depois dos Sites 1 a 5.

## Como instalar (sem instalar nada)

Basta duas linhas, via **CDN**, como já foi feito com o jQuery:

```html
<!-- No <head>: estilos -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- No final do <body>: comportamentos (menu hambúrguer, modal...) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Duas regras de ordem importantes:

1. O **CSS do Bootstrap vem antes do seu `estilo.css`**, para que você consiga ajustar o que quiser.
2. O **JS do Bootstrap vem antes do seu `script.js`**.

Além disso, a tag `<meta name="viewport" ...>` é obrigatória para o layout responsivo funcionar em celulares.

## Os 6 conceitos essenciais (com exemplos do `index.html`)

### 1. Container — centraliza o conteúdo

```html
<main class="container py-4"> ... </main>
```

`container` centraliza e limita a largura de forma responsiva. `container-fluid` ocupa 100% da largura.

### 2. Grade de 12 colunas — o coração do Bootstrap

Cada linha (`row`) tem **12 colunas**. Você diz quantas colunas cada bloco ocupa em cada tamanho de tela:

```html
<div class="row g-3">
  <div class="col-12 col-md-6 col-lg-3"> ... </div>
</div>
```

| Classe | Significa |
| ------ | --------- |
| `col-12` | em tela pequena (celular), ocupa 12 de 12 colunas (linha inteira) |
| `col-md-6` | a partir de tela média (tablet), ocupa 6 de 12 (metade) |
| `col-lg-3` | a partir de tela grande (desktop), ocupa 3 de 12 (um quarto) |

Resultado: os 4 filtros ficam **empilhados no celular, 2 por linha no tablet e 4 por linha no desktop**, sem nenhuma Media Query escrita por você. `g-3` define o espaçamento entre as colunas.

Os pontos de quebra (*breakpoints*) são: `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px) e `xxl` (1400px).

### 3. Componentes prontos

| Componente | Classes usadas no projeto | Onde aparece |
| ---------- | ------------------------- | ------------ |
| Barra de navegação | `navbar`, `navbar-expand-md`, `navbar-toggler` | topo da página (vira "hambúrguer" no celular) |
| Cartão | `card`, `card-header`, `card-body` | filtros, KPIs, gráfico, alertas e tabela |
| Formulário | `form-label`, `form-control`, `form-select` | filtros |
| Botão | `btn`, `btn-primary`, `btn-outline-secondary`, `btn-sm` | "Limpar filtros", "Entendi", "Tema" |
| Tabela | `table`, `table-striped`, `table-hover`, `table-responsive` | itens em estoque |
| Selo (badge) | `badge`, `text-bg-success`, `text-bg-warning`, `text-bg-danger` | coluna Status |
| Barra de progresso | `progress`, `progress-bar` | gráfico por categoria |
| Lista | `list-group`, `list-group-item` | itens abaixo do mínimo |
| Modal (pop-up) | `modal`, `modal-dialog`, `modal-content` | "Como o status é calculado?" |

### 4. Classes utilitárias — espaçamento, cor e alinhamento

São classes curtas que fazem **uma coisa só**. Exemplos usados no projeto:

| Classe | O que faz |
| ------ | --------- |
| `mt-3`, `mb-4`, `py-4`, `me-2` | margem/padding (`m` = margin, `p` = padding; `t`/`b`/`y`/`e` = topo/baixo/vertical/fim; número = tamanho de 0 a 5) |
| `d-flex`, `justify-content-between`, `align-items-center`, `gap-3` | Flexbox sem escrever CSS |
| `text-center`, `fw-bold`, `fs-3`, `small` | alinhamento, peso e tamanho do texto |
| `text-danger`, `text-body-secondary`, `bg-dark` | cores de texto e de fundo |
| `shadow-sm`, `h-100`, `border-danger` | sombra, altura total e cor da borda |

### 5. Comportamentos sem JavaScript — atributos `data-bs-*`

O Bootstrap liga botões a componentes **só com atributos HTML**:

```html
<!-- Abre o modal #modalStatus ao clicar -->
<button data-bs-toggle="modal" data-bs-target="#modalStatus">Como o status é calculado?</button>

<!-- Fecha o modal -->
<button data-bs-dismiss="modal">Entendi</button>
```

O mesmo vale para o menu "hambúrguer" (`data-bs-toggle="collapse"`). Para isso funcionar, o arquivo `bootstrap.bundle.min.js` precisa estar carregado.

### 6. Tema claro e escuro

O Bootstrap 5.3 troca todas as cores apenas mudando um atributo na tag `<html>`:

```html
<html data-bs-theme="light">   →   <html data-bs-theme="dark">
```

No `script.js`, o botão "🌓 Tema" só alterna esse valor — compare com o Site 4, que precisou de uma classe e de CSS próprio para isso.

## Comparando o Site 5 e o Site 6

| | Site 5 (sem Bootstrap) | Site 6 (com Bootstrap) |
| --- | --- | --- |
| CSS próprio | 351 linhas | 5 regras |
| Layout responsivo | Media Queries escritas à mão | classes `col-*` |
| Botões, formulários, tabela | estilizados do zero | classes `btn`, `form-*`, `table` |
| Status | classes `.badge normal/atencao/baixo` | `badge text-bg-success/warning/danger` |
| Gráfico | `div` + CSS próprio | `progress` do Bootstrap |
| Tema escuro | não tem | `data-bs-theme` |
| Visual | totalmente personalizado | "cara de Bootstrap" (padronizado) |

> O que se ganha em **velocidade e padronização**, perde-se em **identidade visual**: sites feitos só com Bootstrap tendem a parecer parecidos. Por isso o `estilo.css` continua existindo, para ajustes próprios.

## O que mudou no JavaScript

Quase nada. A lógica (ler o JSON, filtrar, ordenar, calcular KPIs) é idêntica à do Site 5. A diferença está no **HTML gerado pelo jQuery**, que agora usa classes do Bootstrap:

```js
// Site 5
$("<span>").addClass("badge baixo").text("Baixo")

// Site 6
$("<span>").addClass("badge text-bg-danger").text("Baixo")
```

Um objeto `corStatus` associa cada status a uma cor do Bootstrap (`success`, `warning` ou `danger`).

## Base de dados

Os dados são os mesmos do Site 5 (22 itens, 5 categorias e 6 fornecedores) e continuam **embutidos no `index.html`**, dentro de `<script type="application/json" id="base-dados">`, para que a página funcione com um simples duplo clique. O arquivo `data/estoque.json` acompanha o projeto com o mesmo conteúdo, para uso com `$.getJSON()` em um servidor.

## Como executar

1. Mantenha a estrutura de pastas acima.
2. Abra o `index.html` no navegador (duplo clique ou Live Server).
3. É necessário **acesso à internet**, pois o jQuery e o Bootstrap são carregados por CDN.
4. Teste a responsividade **diminuindo a largura da janela** e veja a grade, a tabela e o menu se adaptando.

## Sugestões de atividades

1. Trocar `col-lg-3` por `col-lg-4` nos filtros e observar o que acontece com o layout.
2. Trocar `bg-dark navbar-dark` por `bg-primary` na navbar.
3. Mudar a cor do botão "Entendi" de `btn-primary` para `btn-success` e `btn-danger`.
4. Incluir um quarto item no menu (`nav-item`).
5. Procurar na [documentação oficial](https://getbootstrap.com/docs/5.3/) um componente novo (por exemplo, `alert` ou `accordion`) e incluí-lo na página.
6. Usar `container-fluid` no lugar de `container` e comparar.

## Próximos passos sugeridos

Depois do Site 6, o aluno pode combinar Bootstrap com formulário de cadastro e `localStorage` (como nos projetos `controle_estoque_*`), consumir APIs reais, usar uma biblioteca de gráficos (como Chart.js) e, mais adiante, conhecer React ou Angular, que também têm versões do Bootstrap.
