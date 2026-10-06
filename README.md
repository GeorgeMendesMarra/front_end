# 🌐 Front-End — Desenvolvimento Web

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![React](https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)

# 📚 Repositório de Desenvolvimento Front-End e Web

Este repositório foi criado para **centralizar conteúdos didáticos, projetos, experimentos e exemplos práticos relacionados ao desenvolvimento de aplicações Web**.

O material foi organizado principalmente para apoiar estudantes de cursos da área de Computação, desenvolvedores iniciantes e profissionais que desejam revisar ou aprofundar conhecimentos em tecnologias de desenvolvimento Web.

A proposta do repositório é apresentar os conceitos de forma **progressiva e prática**, partindo dos fundamentos do desenvolvimento Front-End e avançando para bibliotecas, frameworks e tecnologias utilizadas na construção de aplicações Web.

---

# 🎯 Objetivos

Este repositório tem como principais objetivos:

- 📖 disponibilizar material didático para aulas de desenvolvimento Web;
- 💻 apresentar exemplos práticos de implementação;
- 🧩 demonstrar a integração entre diferentes tecnologias;
- 🏗️ apresentar diferentes arquiteturas e abordagens de desenvolvimento;
- 🌐 explorar tecnologias Front-End e Web;
- ☕ demonstrar tecnologias Java utilizadas no desenvolvimento Web;
- ⚛️ apresentar bibliotecas e frameworks modernos;
- 🧪 disponibilizar projetos para experimentação e estudo;
- 🎓 servir como material de apoio para disciplinas acadêmicas;
- 🚀 auxiliar estudantes na construção de uma base sólida em desenvolvimento Web.

---

# 🧭 Organização do repositório

Os exemplos estão organizados em diretórios independentes, permitindo estudar cada tecnologia ou projeto separadamente.

```
front_end/
│
├── angular/
│   └── angular.md
│
├── controle_estoque_1/
│
├── controle_estoque_2/
│
├── controle_pecas_1/
│
├── controle_pecas_2/
│
├── java_server_faces/
│   ├── java_server_faces.md
│   ├── hello_world/
│   ├── tomcat_8/
│   └── tomcat_11/
│
├── java_server_pages/
│   ├── java_server_pages.md
│   └── hello_world/
│
├── java_struts/
│   ├── java_struts.md
│   └── hello_world/
│
├── javascript/
│   ├── javascript.md
│   └── exemplos_javascript.html
│
├── react/
│   └── react.md
│
├── site1/
│
├── site2/
│
├── site3/
│
├── site4/
│
├── site5/
│
├── projeto_front_end_html.md
│
├── projeto_front_end_html+css.md
│
├── projeto_front_end_html+css+javascript.md
│
├── projeto_front_end_html+css+javascript+jQuery.md
│
├── projeto_front_end_html+css+javascript+jQuery+bootstrap.md
│
├── LICENSE
│
└── README.md
```

A estrutura atual do repositório reúne **tutoriais e exemplos de Angular, React, JavaScript, JavaServer Faces, JavaServer Pages e Java Struts**, quatro **aplicações de controle** (estoque e peças), a sequência didática `site1` a `site5` (Programação Web I) e cinco roteiros passo a passo para iniciar um projeto de Front-End.

---

# 🗂️ Projetos e tecnologias

## 🌱 `site1` — Fundamentos de Front-End

Exemplo introdutório desenvolvido para demonstrar a integração entre:

```
HTML5
   ↓
CSS3
   ↓
JavaScript
```

Principais conceitos:

- estrutura HTML;
- elementos semânticos;
- `id`;
- `class`;
- seletores CSS;
- conexão HTML → CSS;
- conexão HTML → JavaScript;
- manipulação do DOM;
- eventos;
- responsividade.

🔗 [Acessar o projeto site1](https://github.com/GeorgeMendesMarra/front_end/tree/main/site1)

---

# 📝 `site2` — Formulário Acadêmico

Exemplo desenvolvido como evolução do `site1`, utilizando HTML5, CSS3 e JavaScript para construção de um formulário completo.

O projeto apresenta:

- formulários HTML5;
- `input`;
- `select`;
- `textarea`;
- radio buttons;
- checkboxes;
- `fieldset`;
- `legend`;
- validação;
- máscaras;
- eventos;
- DOM;
- contador de caracteres;
- validação de senha;
- mostrar/ocultar senha;
- Flexbox;
- CSS Grid;
- responsividade.

🔗 [Acessar o projeto site2](https://github.com/GeorgeMendesMarra/front_end/tree/main/site2)

---

# 🧭 `site3` — Menu, Navegação e Responsividade

Terceiro exemplo da sequência didática de **Programação Web I**, evoluindo o `site2` com um menu de navegação completo.

O projeto apresenta:

- estrutura semântica (`header`, `nav`, `main`, `section`, `article`, `footer`);
- navegação suave por âncoras (`href="#id"`);
- menu responsivo (móvel em telas pequenas);
- destaque automático da seção atual durante a rolagem;
- Flexbox e CSS Grid;
- `position: sticky`, transições e Media Queries;
- `IntersectionObserver`, `classList`, `querySelector()`/`querySelectorAll()`.

Os links do `site3` fazem referência a `site1` e `site2`, então os três diretórios devem permanecer no mesmo nível.

🔗 [Acessar o projeto site3](https://github.com/GeorgeMendesMarra/front_end/tree/main/site3)

---

# 💛 `site4` — Introdução ao jQuery

Quarto exemplo da sequência, que introduz a biblioteca **jQuery** sobre a base construída em `site1`–`site3`.

O projeto apresenta:

- carregamento do jQuery via CDN;
- seletores `$()`, eventos com `.on()`;
- efeitos (`fadeIn()`, `fadeOut()`, `slideToggle()`);
- `toggleClass()`, `addClass()`, `removeClass()`, `hasClass()`, `.each()`;
- exemplos interativos: troca de mensagem, botão de curtir, alternância de tema claro/escuro e acordeão de perguntas frequentes;
- cálculo de posição de rolagem (`.offset()`, `.outerHeight()`, `.scrollTop()`) para destacar o link do menu ativo.

Os links do `site4` fazem referência a `site1`, `site2` e `site3`, então os quatro diretórios devem permanecer no mesmo nível.

🔗 [Acessar o projeto site4](https://github.com/GeorgeMendesMarra/front_end/tree/main/site4)

---

# 📊 `site5` — Painel de Controle de Estoque (Dashboard)

Quinto exemplo da sequência: um **painel de controle de estoque** em HTML, CSS, JavaScript e jQuery, que consome dados de uma base local em JSON e demonstra uma aplicação Front-End mais próxima de um cenário real.

O projeto apresenta:

- indicadores (KPIs) com destaque para itens em alerta;
- gráfico de barras com o valor em estoque por categoria;
- lista de itens abaixo do estoque mínimo;
- tabela de itens em estoque;
- filtros de busca, categoria, fornecedor e status;
- consumo de dados a partir de `data/estoque.json`;
- organização em `css/`, `js/` e `data/`.

🔗 [Acessar o projeto site5](https://github.com/GeorgeMendesMarra/front_end/tree/main/site5)

---

# ⚡ `javascript`

Diretório destinado ao estudo da linguagem **JavaScript**, com o tutorial `javascript.md` e a página de práticas `exemplos_javascript.html`, abordando conceitos fundamentais de programação e desenvolvimento no lado cliente.

Entre os conceitos explorados:

```
Variáveis
Tipos de dados
Operadores
Comparações
Condicionais (if/else)
Laços de repetição (for/while)
Arrays
Objetos
Funções
DOM
Eventos
```

🔗 [Acessar JavaScript](https://github.com/GeorgeMendesMarra/front_end/tree/main/javascript)

---

# ⚛️ `react`

Diretório com o tutorial `react.md`, destinado ao estudo da biblioteca **React**, utilizada para construção de interfaces de usuário baseadas em componentes.

Conceitos abordados:

- configuração do ambiente;
- componentes e JSX;
- renderização de variáveis e lógica;
- props (propriedades);
- estado (`useState`);
- renderização de listas com `map`;
- eventos;
- efeitos colaterais (`useEffect`);
- projetos práticos para fazer em sequência.

🔗 [Acessar React](https://github.com/GeorgeMendesMarra/front_end/tree/main/react)

---

# 🅰️ `angular`

Diretório com o tutorial `angular.md`, destinado ao estudo do **Angular**, framework para desenvolvimento de aplicações Web estruturadas.

O tutorial cobre desde os pré-requisitos (Node.js e Angular CLI) até a criação do primeiro projeto e de um Hello World personalizado, explorando:

- componentes (TypeScript, HTML e CSS);
- templates;
- módulos;
- serviços;
- roteamento;
- formulários;
- injeção de dependência;
- aplicações SPA.

🔗 [Acessar Angular](https://github.com/GeorgeMendesMarra/front_end/tree/main/angular)

---

# ☕ Tecnologias Java para Web

Uma característica importante deste repositório é a presença de tecnologias Java voltadas ao desenvolvimento Web.

O objetivo é apresentar não apenas o Front-End moderno, mas também tecnologias utilizadas historicamente e atualmente no ecossistema Java Web.

---

## `java_server_pages`

Material sobre **JavaServer Pages (JSP)**, com tutorial completo (`java_server_pages.md`) e um roteiro de Hello World (`hello_world/`) com a criação manual da estrutura de pastas, hospedagem no Tomcat e scripts automáticos para criar o projeto.

O JSP permite combinar páginas Web com recursos do ecossistema Java para construção de aplicações Web.

Conceitos relacionados:

```
JSP
HTML
Java
Servlets
Formulários
Tomcat
```

🔗 [Acessar JavaServer Pages](https://github.com/GeorgeMendesMarra/front_end/tree/main/java_server_pages)

---

## `java_server_faces`

Material sobre **JavaServer Faces (JSF)**, com tutorial (`java_server_faces.md`), um Hello World passo a passo (`hello_world/`) e projetos de portfólio prontos para execução em diferentes versões do Tomcat (`tomcat_8/` e `tomcat_11/`, em arquivos `.zip`).

O JSF utiliza uma abordagem baseada em componentes para construção de interfaces Web no ecossistema Java.

Conceitos relacionados:

- arquitetura MVC do JSF;
- páginas XHTML;
- Managed Beans;
- navegação entre páginas;
- ciclo de vida;
- configuração (`web.xml`, `faces-config.xml`, Maven);
- integração com aplicações Java.

🔗 [Acessar JavaServer Faces](https://github.com/GeorgeMendesMarra/front_end/tree/main/java_server_faces)

---

## `java_struts`

Material sobre o **Apache Struts**, framework tradicional do ecossistema Java para desenvolvimento de aplicações Web baseado no padrão MVC, com tutorial para iniciantes (`java_struts.md`) e um Hello World (`hello_world/`).

Conceitos relacionados:

```
MVC
Action
Interceptors
struts.xml
Value Stack e OGNL
JSP
Servlet
Maven
```

🔗 [Acessar Java Struts](https://github.com/GeorgeMendesMarra/front_end/tree/main/java_struts)

---

# 📦 Projetos de controle

O repositório também contém aplicações Front-End voltadas ao desenvolvimento de sistemas de controle, em HTML, CSS e JavaScript, com dados e autenticação simulados no navegador (`localStorage`):

| Projeto | Descrição |
| ------- | --------- |
| `controle_estoque_1` | Controle de estoque com páginas de produtos, fornecedores, entradas e saídas |
| `controle_estoque_2` | Evolução do anterior, com tela de login, dashboard, produtos, entradas e saídas |
| `controle_pecas_1` | Controle de estoque de peças com login e tabela de cadastro (nome, código, quantidade, preço e ações) |
| `controle_pecas_2` | ERP de controle de estoque de peças com login, dashboard (Chart.js), cadastro de peças, entrada/saída e usuários |

Esses projetos podem ser utilizados para demonstrar a evolução de uma aplicação Web a partir de requisitos mais próximos de sistemas reais.

---

# 🧾 Roteiros: Como iniciar um projeto de Front-End

O repositório inclui cinco roteiros passo a passo, pensados para orientar o aluno na organização de um projeto de Front-End desde o planejamento até a entrega, em diferentes níveis de complexidade:

```
projeto_front_end_html.md
   → apenas estrutura (HTML)

projeto_front_end_html+css.md
   → estrutura e estilo (HTML + CSS)

projeto_front_end_html+css+javascript.md
   → estrutura, estilo e interatividade (HTML + CSS + JavaScript)

projeto_front_end_html+css+javascript+jQuery.md
   → adiciona a biblioteca jQuery

projeto_front_end_html+css+javascript+jQuery+bootstrap.md
   → roteiro progressivo completo, em fases, reunindo HTML, CSS, JavaScript, jQuery e Bootstrap
```

Cada roteiro trata do planejamento inicial (objetivo do site, páginas/seções, conteúdo mínimo, wireframe), da organização de pastas, dos testes, do versionamento e da entrega, além de trazer um checklist final, servindo de apoio tanto para os exemplos `site1`–`site5` quanto para novos projetos dos alunos.

---

# 🏗️ Arquiteturas e padrões

O repositório permite estudar diferentes formas de estruturar aplicações Web.

Uma visão simplificada:

```
                APLICAÇÕES WEB
                      │
      ┌───────────────┼────────────────┐
      │               │                │
      ▼               ▼                ▼
  Front-End       Java Web        Frameworks
      │               │                │
      ▼               ▼                ▼
HTML/CSS/JS      JSP / JSF /      React / Angular
  + jQuery          Struts
```

Também é possível utilizar os projetos para introduzir conceitos relacionados ao padrão:

```
MVC — Model View Controller
```

Representação simplificada:

```
         ┌─────────────┐
         │   Usuário   │
         └──────┬──────┘
                │
                ▼
         ┌─────────────┐
         │ Controller  │
         └──────┬──────┘
                │
      ┌─────────┴─────────┐
      ▼                   ▼
┌───────────┐       ┌───────────┐
│   Model   │       │    View   │
└─────┬─────┘       └───────────┘
      │
      ▼
┌───────────┐
│  Dados    │
└───────────┘
```

---

# 🔗 Evolução do desenvolvimento Web

Uma das propostas deste repositório é permitir visualizar a evolução das tecnologias Web.

```
HTML
 │
 ├── CSS
 │
 ├── JavaScript
 │
 ├── JavaScript + DOM
 │
 ├── jQuery
 │      └── site4 / site5
 │
 ├── Aplicações de controle
 │      └── controle_estoque / controle_pecas
 │
 ├── Frameworks
 │      ├── React
 │      └── Angular
 │
 └── Java Web
        ├── JSP
        ├── JSF
        └── Struts
```

Essa abordagem permite comparar diferentes paradigmas, ferramentas e arquiteturas utilizadas no desenvolvimento de aplicações Web.

---

# 🧠 Conceitos fundamentais

Os projetos deste repositório podem ser utilizados para estudar:

### Front-End

- HTML5;
- CSS3;
- JavaScript;
- jQuery;
- DOM;
- eventos;
- formulários;
- validação;
- responsividade;
- Flexbox;
- CSS Grid;
- consumo de dados em JSON;
- armazenamento no navegador (`localStorage`);
- componentes;
- interfaces de usuário.

### Java Web

- JSP;
- JSF;
- Struts;
- MVC;
- Servlets;
- Tomcat;
- aplicações Web Java.

### Frameworks

- React;
- Angular.

### Desenvolvimento de sistemas

- CRUD;
- formulários;
- autenticação (simulada);
- controle de dados;
- dashboards e indicadores;
- organização de aplicações;
- separação de responsabilidades;
- arquitetura de software.

---

# 🎓 Aplicação acadêmica

Este repositório foi pensado também como **material de apoio para atividades acadêmicas**.

Pode ser utilizado em disciplinas como:

- Programação Web I;
- Programação Web II;
- Desenvolvimento Web;
- Desenvolvimento Front-End;
- Engenharia de Software;
- Programação Orientada a Objetos;
- Desenvolvimento de Sistemas;
- Tecnologias Web;
- Desenvolvimento de Aplicações Web.

Os exemplos `site1` a `site5` formam, em especial, a sequência didática utilizada na disciplina **Programação Web I** do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

---

# 👨‍🏫 Proposta pedagógica

Os exemplos podem ser utilizados seguindo uma progressão de dificuldade:

```
NÍVEL 1
Fundamentos
HTML + CSS
        ↓
NÍVEL 2
Interatividade
JavaScript + DOM
        ↓
NÍVEL 3
Aplicações
Formulários + Validação
        ↓
NÍVEL 4
Navegação e responsividade
Menu + rolagem + Media Queries
        ↓
NÍVEL 5
Bibliotecas
jQuery + dashboard com dados JSON
        ↓
NÍVEL 6
Sistemas de controle
Login + CRUD + entradas e saídas
        ↓
NÍVEL 7
Componentização
React / Angular
        ↓
NÍVEL 8
Aplicações Web
Java / JSP / JSF / Struts
        ↓
NÍVEL 9
Arquitetura
MVC + Banco de Dados + APIs
```

Essa organização permite que o estudante avance gradualmente dos conceitos básicos para aplicações mais estruturadas.

---

# 🛠️ Tecnologias

| Tecnologia | Finalidade                                |
| ---------- | ----------------------------------------- |
| HTML5      | Estrutura das páginas                     |
| CSS3       | Estilos e layout                          |
| JavaScript | Interatividade                            |
| jQuery     | Manipulação simplificada do DOM e efeitos |
| Chart.js   | Gráficos nos painéis de controle          |
| React      | Interfaces baseadas em componentes        |
| Angular    | Aplicações Web estruturadas               |
| Java       | Desenvolvimento de aplicações             |
| JSP        | Páginas Web Java                          |
| JSF        | Interfaces baseadas em componentes        |
| Struts     | Framework Web baseado em MVC              |
| Tomcat     | Servidor de aplicações Java Web           |

---

# 📌 Princípios utilizados

Os exemplos procuram reforçar alguns princípios importantes:

### Separação de responsabilidades

```
HTML
→ Estrutura

CSS
→ Apresentação

JavaScript
→ Comportamento
```

### Reutilização

Componentes, classes, funções e estruturas devem ser organizados para facilitar sua reutilização.

### Organização

Cada projeto possui seu próprio diretório e arquivos relacionados.

### Progressão

Os exemplos partem de conceitos simples e avançam gradualmente.

### Experimentação

O código pode ser utilizado como base para modificações, testes e novos projetos.

---

# 🚀 Como utilizar

Clone o repositório:

```
git clone https://github.com/GeorgeMendesMarra/front_end.git
```

Entre no diretório:

```
cd front_end
```

Escolha o projeto que deseja estudar.

Por exemplo:

```
cd site1
```

ou:

```
cd site5
```

Os projetos Front-End (`site1` a `site5`, `controle_estoque_*` e `controle_pecas_*`) podem ser abertos diretamente no navegador, a partir do arquivo `index.html` (ou `login.html`, nos projetos com autenticação). O `site5` consome um arquivo JSON local e, dependendo do navegador, pode exigir um servidor local simples (por exemplo, a extensão Live Server do VS Code).

Para os tutoriais de React, Angular, JSP, JSF e Struts, siga o passo a passo do respectivo arquivo `.md` dentro do diretório.

---

# 🌐 Demonstração

O repositório possui também uma página de apresentação disponível em:

🔗 **[Acessar demonstração](https://front-end-xi-orpin.vercel.app/)**

---

# 📚 Público-alvo

Este material é destinado principalmente a:

- 👨‍🎓 estudantes de cursos de Computação;
- 👩‍💻 desenvolvedores iniciantes;
- 👨‍🏫 professores;
- 🧑‍💻 desenvolvedores que desejam revisar fundamentos;
- 🚀 entusiastas de tecnologia;
- 📖 pessoas interessadas em desenvolvimento Web.

---

# 🔮 Possíveis evoluções

Este repositório poderá incorporar novos exemplos envolvendo:

```
TypeScript
Node.js
APIs REST
Bootstrap
Spring Boot
Spring MVC
Spring Security
Banco de Dados
Docker
Testes
CI/CD
Web Components
Arquitetura de Software
```

A intenção é ampliar gradualmente o material, acompanhando a evolução das tecnologias e das necessidades didáticas.

---

# 👨‍💻 Autor

## Professor George Mendes Marra

Professor e pesquisador na área de Computação, com atuação em ensino, desenvolvimento de software, programação e tecnologias Web.

Este repositório foi criado com finalidade **educacional, acadêmica e experimental**, reunindo exemplos utilizados para estudo, ensino e demonstração de conceitos relacionados ao desenvolvimento de software.

---

# 📄 Licença

Este repositório é distribuído sob a **Licença BSD de 3 Cláusulas (BSD 3-Clause)**. Consulte o arquivo [LICENSE](LICENSE) para os termos completos.

Os exemplos possuem finalidade predominantemente educacional. Consulte os arquivos e projetos individuais para verificar eventuais licenças ou condições específicas de utilização de cada tecnologia ou código de terceiros.

---

# ⭐ Contribuição

Sugestões, melhorias e correções são bem-vindas.

Você pode:

1. Fazer um Fork do projeto;
2. Criar uma nova Branch;
3. Implementar sua melhoria;
4. Realizar um Commit;
5. Criar um Pull Request.

---

# 📊 Repositório em evolução

Este projeto é desenvolvido de forma contínua e pode receber novos exemplos, exercícios, tecnologias e aplicações.

A proposta é transformar o repositório em uma **base de conhecimento prática para desenvolvimento Web**, conectando fundamentos, programação, frameworks, arquiteturas e desenvolvimento de aplicações.

---

## 🌐 Desenvolvimento Web na prática

```
                DESENVOLVIMENTO WEB
                        │
       ┌────────────────┼────────────────┐
       │                │                │
       ▼                ▼                ▼
   FRONT-END          JAVA WEB       FRAMEWORKS
       │                │                │
       ▼                ▼                ▼
HTML • CSS • JS      JSP • JSF       React • Angular
   • jQuery
                        │
                        ▼
                     STRUTS
                        │
                        ▼
                      MVC
                        │
                        ▼
                 APLICAÇÕES WEB
```

> **Aprender desenvolvimento Web é mais do que aprender uma tecnologia: é compreender como diferentes tecnologias, linguagens, frameworks e arquiteturas trabalham juntas para construir aplicações.**

⭐ **Este repositório é um espaço de estudo, experimentação e compartilhamento de conhecimento sobre desenvolvimento Web.**
