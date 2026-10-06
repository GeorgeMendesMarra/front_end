# Site 5 — Continuação de Programação Web I (Dashboard de Estoque)

Quinto exemplo didático da sequência de desenvolvimento Front-End da disciplina **Programação Web I**: um **painel de controle de estoque** (dashboard) construído com **HTML5, CSS3, JavaScript e jQuery**, que lê dados em formato JSON e os apresenta em indicadores, gráfico, alertas e tabela, com filtros e ordenação.

## Evolução

- **Site 1:** fundamentos da integração HTML + CSS + JavaScript, DOM, `id`, `class` e eventos.
- **Site 2:** formulário acadêmico, validação, máscaras, eventos, DOM, Flexbox e CSS Grid.
- **Site 3:** menu de navegação, múltiplas seções, navegação suave, menu responsivo e destaque da seção atual.
- **Site 4:** introdução ao jQuery — seletores `$()`, eventos com `.on()`, efeitos e `.each()`.
- **Site 5:** aplicação mais próxima de um cenário real — dados em JSON, filtros combinados, ordenação, indicadores (KPIs) e gráfico, tudo com jQuery.

## Estrutura

```text
site5/
├── index.html
├── css/
│   └── estilo.css
├── js/
│   └── script.js
├── data/
│   └── estoque.json
└── readme.md
```

Diferente dos Sites 1 a 4, o Site 5 é **independente**: não faz referência aos diretórios anteriores e organiza os arquivos em subpastas (`css/`, `js/` e `data/`), prática comum em projetos reais.

## O que o painel mostra

- **Filtros:** busca por nome do produto, categoria, fornecedor e status, que podem ser combinados, além do botão **Limpar filtros** e de um contador de resultados (por exemplo, "12 de 22 itens").
- **Indicadores (KPIs):** quantidade de itens no filtro, valor total em estoque, itens abaixo do mínimo e categoria de maior valor.
- **Gráfico de barras:** valor em estoque por categoria, desenhado apenas com `<div>` e CSS (sem biblioteca de gráficos), com animação das barras.
- **Alertas:** lista dos itens com status **Baixo**, mostrando a quantidade atual e o estoque mínimo.
- **Tabela de itens:** produto, categoria, quantidade, mínimo, preço unitário, fornecedor e status, com **ordenação ao clicar no cabeçalho** de cada coluna (alterna entre crescente e decrescente).

Todos os blocos são atualizados juntos a cada mudança de filtro ou de ordenação.

## Base de dados

A base contém **22 itens**, de **5 categorias** (Informática, Papelaria, Limpeza, Elétrica e Ferramentas) e **6 fornecedores**. Cada registro tem o formato:

```json
{
  "id": 1,
  "produto": "Notebook 15'' i5 8GB",
  "categoria": "Informática",
  "quantidade": 4,
  "estoque_minimo": 5,
  "preco_unitario": 3200.00,
  "fornecedor": "TechDist"
}
```

### Dados embutidos x arquivo JSON

Para que o exemplo funcione com um simples **duplo clique** no `index.html`, os dados ficam **embutidos no próprio HTML**, dentro de uma tag `<script type="application/json" id="base-dados">`. O `script.js` lê o texto dessa tag com `$("#base-dados").text()` e o converte com `JSON.parse()`, obtendo o mesmo array de objetos que receberia de uma API.

O motivo é que o navegador bloqueia chamadas como `$.getJSON("data/estoque.json")` quando a página é aberta direto do disco (`file://`), por política de CORS. O arquivo `data/estoque.json` acompanha o projeto com o mesmo conteúdo e pode ser usado quando o projeto for publicado em um servidor (GitHub Pages, Vercel etc.) ou aberto com um servidor local (como a extensão Live Server do VS Code): basta buscá-lo com `$.getJSON()` no lugar da leitura da tag.

## Regra de negócio: status do item

O status é calculado no JavaScript a partir da quantidade e do estoque mínimo:

| Status | Condição |
| ------ | -------- |
| **Baixo** | `quantidade` menor que `estoque_minimo` |
| **Atenção** | `quantidade` maior ou igual ao mínimo e até 1,5 × o mínimo |
| **Normal** | `quantidade` acima de 1,5 × o mínimo |

## Conteúdos trabalhados

### HTML5
- Estrutura semântica (`header`, `main`, `section`, `footer`) com `aria-label` nas seções.
- Formulário de filtros com `label`, `input` e `select`.
- Tabela (`table`, `thead`, `tbody`) com atributos `data-campo` nos cabeçalhos, usados na ordenação.
- Dados em JSON dentro de `<script type="application/json">`.

### CSS3
- Variáveis CSS (`:root`) para cores, status e fontes.
- Fontes do Google Fonts (Barlow Condensed e IBM Plex Sans).
- Cartões, KPIs, badges de status e gráfico de barras feito com `div`.
- Layout com Flexbox e CSS Grid, Media Queries (`max-width: 900px` e `560px`) e `prefers-reduced-motion`.

### JavaScript e jQuery
- `$(function () { ... })` — execução após o carregamento do HTML.
- `JSON.parse()` e `.map()`, `.filter()`, `.reduce()` e `.sort()` para tratar os dados.
- `$.each()`, `$.extend()` e `.localeCompare()` para percorrer, copiar e comparar valores.
- `.on("input" | "change" | "click", ...)` — eventos dos filtros e dos cabeçalhos da tabela.
- `.val()`, `.text()`, `.html()`, `.append()`, `.empty()` — leitura e criação de elementos.
- `.data()`, `.addClass()` e `.removeClass()` — ordenação e estado visual dos cabeçalhos.
- `.css()` e `.animate()` — animação das barras do gráfico.
- `toLocaleString("pt-BR")` — formatação de valores em reais.
- Uma função central (`atualizarDashboard()`) que aplica filtros, ordena e redesenha tabela, KPIs, gráfico e alertas.

## Como executar

1. Mantenha a estrutura de pastas acima.
2. Abra o arquivo `index.html` no navegador (duplo clique ou Live Server).
3. O jQuery é carregado por CDN (`https://code.jquery.com/jquery-3.7.1.min.js`), portanto é necessário acesso à internet.

## Sugestões de atividades

1. Incluir um novo item na base de dados e observar a atualização dos indicadores.
2. Alterar a regra de status (por exemplo, trocar 1,5 × o mínimo por 2 × o mínimo).
3. Criar um novo KPI, como o preço médio dos itens filtrados.
4. Trocar a leitura embutida por `$.getJSON("data/estoque.json")` e testar com um servidor local.
5. Adicionar um filtro por faixa de preço.

## Próximos passos sugeridos

Depois do Site 5, o aluno pode avançar para o cadastro de itens com formulário e `localStorage` (como nos projetos `controle_estoque_*` e `controle_pecas_*`), o consumo de APIs reais (`fetch()` ou `$.ajax()`), bibliotecas de gráficos (como Chart.js) e a integração com back-end.
