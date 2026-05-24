## 🧠 Antes de começar: o que você já sabe (e isso é ótimo!)

Por você já estar estudando Java backend:

- **Java puro** (classes, objetos, métodos, condicionais, loops)
- **Servlet** (provavelmente já viu ou vai ver em breve)
- **Lógica de programação** sólida

**O que você NÃO precisa saber ainda:**
- HTML/CSS avançado (apenas o básico serve)
- JavaScript (pode aprender depois)
- Frameworks complexos

---

## 1. Afinal, o que é JSP? (Comparação com o que você conhece)

**JSP (JavaServer Pages)** é uma tecnologia que permite **misturar HTML com Java** para criar páginas web dinâmicas.

### A maneira mais simples de entender:

```
Sem JSP (apenas HTML):
┌─────────────────────────┐
│  Olá, visitante!        │  ← Sempre a mesma mensagem
│  Hoje é um belo dia.    │
└─────────────────────────┘

Com JSP:
┌─────────────────────────┐
│  Olá, João!             │  ← O nome muda por usuário
│  Hoje é 25/05/2026      │  ← A data é dinâmica
│  Você é o visitante #42 │  ← Contador dinâmico
└─────────────────────────┘
```

### O que acontece por baixo dos panos:

```
1. Você cria um arquivo .jsp com HTML + Java
2. O servidor (Tomcat) converte esse arquivo em um Servlet
3. O Servlet gera HTML puro
4. O navegador recebe apenas HTML (não vê o Java)
```

**Importante:** O cliente (navegador) NUNCA vê seu código Java. Tudo roda no servidor.

---

## 2. JSP vs Servlet vs JSF (O que cada um faz?)

Como você está estudando backend Java, é importante entender onde cada tecnologia se encaixa:

| Tecnologia | O que é | Quando usar | Complexidade |
|------------|---------|-------------|--------------|
| **Servlet** | Java puro que escreve HTML na mão (`out.println("<html>...")`) | Controle de requisições, APIs REST | Baixa/ Média |
| **JSP** | HTML com "pedaços" de Java dentro | Páginas com muita apresentação e pouca lógica | Baixa (mais fácil que Servlet) |
| **JSF** | Framework completo com componentes prontos | Aplicações empresariais complexas | Alta |

**Resumo prático:**
- **Servlet** = Você é o pedreiro, constrói tudo do zero
- **JSP** = Você usa blocos de montar (mais fácil)
- **JSF** = Você compra a casa pronta (mais poderoso, mas complexo)

Para começar: **Comece pelo JSP** (é o mais fácil de entender e debuggar)

---

## 3. Configurando seu ambiente (Primeiro passo)

### O que você precisa instalar:

1. **JDK 11 ou superior** (você já deve ter)
2. **Apache Tomcat 9 ou 10** (servidor web)
3. **Eclipse IDE for Enterprise Java** (recomendado) ou IntelliJ IDEA
4. **Navegador** (Chrome, Firefox, etc.)

### Criando seu primeiro projeto JSP no Eclipse:

1. **File → New → Dynamic Web Project**
2. Nome do projeto: `MeuPrimeiroJSP`
3. Target runtime: Apache Tomcat (configure se não tiver)
4. Configuration: Default Configuration for Apache Tomcat
5. **Finish**

A estrutura do projeto vai ficar assim:

```
MeuPrimeiroJSP/
  ├── src/main/java/          (Seus arquivos .java)
  ├── src/main/webapp/        (Arquivos web - HTML, JSP, CSS)
  │    ├── WEB-INF/           (Configurações - web.xml)
  │    └── index.jsp          (Sua primeira página JSP)
  └── pom.xml                 (Se usar Maven)
```

---

## 4. Seu Primeiro Arquivo JSP (Hello World)

Crie um arquivo `index.jsp` dentro da pasta `src/main/webapp/`:

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Meu Primeiro JSP</title>
</head>
<body>
    <h1>Bem-vindo ao JSP!</h1>
    
    <%-- Isto é um comentário JSP (não aparece no HTML gerado) --%>
    
    <%
        // Isto é código Java puro!
        String nome = "João";
        int idade = 25;
        String mensagem = "Olá, " + nome + "! Você tem " + idade + " anos.";
    %>
    
    <p><%= mensagem %></p>
    
    <p>Data atual: <%= new java.util.Date() %></p>
    
    <hr/>
    
    <h3>Calculadora simples:</h3>
    <%
        int a = 10;
        int b = 5;
        int soma = a + b;
        int produto = a * b;
    %>
    <p><%= a %> + <%= b %> = <%= soma %></p>
    <p><%= a %> × <%= b %> = <%= produto %></p>
</body>
</html>
```

**Explicação das tags que você viu:**

| Tag | O que faz | Exemplo |
|-----|-----------|---------|
| `<%@ page ... %>` | Diretiva - configurações da página | Define encoding, importa classes |
| `<% ... %>` | Scriptlet - código Java executado | `<% int x = 10; %>` |
| `<%= ... %>` | Expression - imprime um valor | `<%= nome %>` imprime o nome |
| `<%-- ... --%>` | Comentário JSP | Não vai para o HTML final |

### Para testar:

1. Clique com botão direito no projeto → **Run As → Run on Server**
2. Selecione o Tomcat e clique Finish
3. O navegador abrirá em `http://localhost:8080/MeuPrimeiroJSP/`
4. Você verá sua página funcionando!

---

## 5. JSP + Java Classes (Separando a lógica)

Misturar muito código Java no meio do HTML é bagunçado (ninguém faz isso em projetos reais). O ideal é **separar a lógica em classes Java normais**.

### Passo 1: Crie uma classe Java normal

Em `src/main/java/br/meuapp/model/Usuario.java`:

```java
package br.meuapp.model;

import java.time.LocalDate;
import java.time.Period;

public class Usuario {
    private String nome;
    private LocalDate dataNascimento;
    private String email;
    
    public Usuario(String nome, LocalDate dataNascimento, String email) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.email = email;
    }
    
    public int getIdade() {
        return Period.between(dataNascimento, LocalDate.now()).getYears();
    }
    
    // Getters e Setters
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    
    public LocalDate getDataNascimento() { return dataNascimento; }
    public void setDataNascimento(LocalDate dataNascimento) { this.dataNascimento = dataNascimento; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```

### Passo 2: Use a classe no JSP

Crie `perfil.jsp`:

```jsp
<%@ page import="br.meuapp.model.Usuario" %>
<%@ page import="java.time.LocalDate" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Perfil do Usuário</title>
</head>
<body>
    <h1>Perfil do Usuário</h1>
    
    <%
        // Instanciando e usando uma classe Java normal
        Usuario usuario = new Usuario(
            "Maria Silva",
            LocalDate.of(1995, 3, 15),
            "maria@email.com"
        );
    %>
    
    <h2>Dados do Usuário:</h2>
    <ul>
        <li><strong>Nome:</strong> <%= usuario.getNome() %></li>
        <li><strong>Email:</strong> <%= usuario.getEmail() %></li>
        <li><strong>Idade:</strong> <%= usuario.getIdade() %> anos</li>
    </ul>
    
    <%
        // Lógica condicional
        if (usuario.getIdade() >= 18) {
    %>
        <p style="color: green;">✅ Usuário maior de idade</p>
    <%
        } else {
    %>
        <p style="color: red;">⚠️ Usuário menor de idade</p>
    <%
        }
    %>
</body>
</html>
```

---

## 6. Recebendo Dados do Usuário (Formulários)

Agora a parte mais importante: como receber o que o usuário digita?

### Passo 1: Crie um formulário HTML

`formulario.jsp`:

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Formulário de Cadastro</title>
</head>
<body>
    <h1>Cadastro de Usuário</h1>
    
    <form action="processarCadastro.jsp" method="post">
        <label for="nome">Nome:</label><br/>
        <input type="text" id="nome" name="nome" required/><br/><br/>
        
        <label for="email">Email:</label><br/>
        <input type="email" id="email" name="email" required/><br/><br/>
        
        <label for="idade">Idade:</label><br/>
        <input type="number" id="idade" name="idade" required/><br/><br/>
        
        <label for="curso">Curso:</label><br/>
        <select id="curso" name="curso">
            <option value="java">Java Backend</option>
            <option value="react">React Frontend</option>
            <option value="fullstack">Full Stack</option>
        </select><br/><br/>
        
        <input type="submit" value="Enviar Cadastro"/>
    </form>
</body>
</html>
```

### Passo 2: Processe os dados recebidos

`processarCadastro.jsp`:

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dados Recebidos</title>
</head>
<body>
    <h1>Dados do Cadastro</h1>
    
    <%
        // Recebendo os parâmetros enviados pelo formulário
        String nome = request.getParameter("nome");
        String email = request.getParameter("email");
        String idadeStr = request.getParameter("idade");
        String curso = request.getParameter("curso");
        
        // Convertendo idade para número
        int idade = 0;
        if (idadeStr != null && !idadeStr.isEmpty()) {
            idade = Integer.parseInt(idadeStr);
        }
        
        // Validação simples
        if (nome == null || nome.trim().isEmpty()) {
            out.println("<p style='color: red;'>Erro: Nome é obrigatório!</p>");
        } else {
    %>
    
    <h2>Cadastro realizado com sucesso!</h2>
    <ul>
        <li><strong>Nome:</strong> <%= nome %></li>
        <li><strong>Email:</strong> <%= email %></li>
        <li><strong>Idade:</strong> <%= idade %> anos</li>
        <li><strong>Curso:</strong> <%= curso %></li>
    </ul>
    
    <%
        // Lógica condicional baseada nos dados
        if (idade >= 18) {
            out.println("<p style='color: green;'>Matrícula confirmada!</p>");
        } else {
            out.println("<p style='color: orange;'>Matrícula requer autorização dos pais.</p>");
        }
        }
    %>
    
    <br/>
    <a href="formulario.jsp">Voltar ao formulário</a>
</body>
</html>
```

**Objetos implícitos do JSP** (você pode usar sem declarar):
- `request` - dados da requisição HTTP
- `response` - resposta HTTP
- `session` - sessão do usuário
- `out` - para escrever no HTML
- `application` - dados globais da aplicação

---

## 7. Trabalhando com Listas (Repetição)

Um dos usos mais comuns do JSP é mostrar listas de dados:

`listaAlunos.jsp`:

```jsp
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="br.meuapp.model.Usuario" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lista de Alunos</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Lista de Alunos Matriculados</h1>
    
    <%
        // Simulando dados do banco (depois você conecta com banco real)
        List<Usuario> alunos = new ArrayList<>();
        alunos.add(new Usuario("João Silva", LocalDate.of(1998, 5, 10), "joao@email.com"));
        alunos.add(new Usuario("Maria Souza", LocalDate.of(2000, 8, 22), "maria@email.com"));
        alunos.add(new Usuario("Pedro Costa", LocalDate.of(1995, 12, 3), "pedro@email.com"));
        alunos.add(new Usuario("Ana Paula", LocalDate.of(2002, 2, 18), "ana@email.com"));
    %>
    
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <%
                // Loop para mostrar todos os alunos
                for (Usuario aluno : alunos) {
            %>
            <tr>
                <td><%= aluno.getNome() %></td>
                <td><%= aluno.getEmail() %></td>
                <td><%= aluno.getIdade() %></td>
                <td>
                    <%
                        if (aluno.getIdade() >= 18) {
                            out.print("<span style='color: green;'>Ativo</span>");
                        } else {
                            out.print("<span style='color: orange;'>Pendente</span>");
                        }
                    %>
                </td>
            </tr>
            <%
                }
            %>
        </tbody>
    </table>
    
    <p><strong>Total de alunos:</strong> <%= alunos.size() %></p>
</body>
</html>
```

---

## 8. Usando Includes (Reutilizando código)

Evite repetir cabeçalho, menu e rodapé em todas as páginas:

### `cabecalho.jsp`:

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div style="background-color: #333; color: white; padding: 10px;">
    <h2>Meu Site com JSP</h2>
    <nav>
        <a href="index.jsp" style="color: white;">Home</a> |
        <a href="formulario.jsp" style="color: white;">Cadastro</a> |
        <a href="listaAlunos.jsp" style="color: white;">Alunos</a>
    </nav>
</div>
<hr/>
```

### `rodape.jsp`:

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<hr/>
<div style="background-color: #f0f0f0; padding: 10px; text-align: center;">
    <p>&copy; 2026 - Meu Primeiro Site JSP</p>
    <p>Data/Hora: <%= new java.util.Date() %></p>
</div>
```

### Usando os includes em qualquer página:

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Minha Página</title>
</head>
<body>
    <%@ include file="cabecalho.jsp" %>
    
    <h1>Conteúdo Principal</h1>
    <p>Aqui vai o conteúdo específico de cada página...</p>
    
    <%@ include file="rodape.jsp" %>
</body>
</html>
```

---

## 9. JSP com Banco de Dados (JDBC)

Aqui é onde seu conhecimento backend brilha! Exemplo simples de conexão com MySQL:

### Adicione o driver MySQL no projeto:

Se usar Maven, adicione no `pom.xml`:

```xml
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.0.33</version>
</dependency>
```

### Página para listar usuários do banco:

```jsp
<%@ page import="java.sql.*" %>
<%@ page import="java.util.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Usuários do Banco</title>
</head>
<body>
    <h1>Lista de Usuários</h1>
    
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
        </tr>
        
        <%
            Connection conn = null;
            Statement stmt = null;
            ResultSet rs = null;
            
            try {
                // 1. Carregar o driver (opcional em versões recentes)
                Class.forName("com.mysql.cj.jdbc.Driver");
                
                // 2. Conectar ao banco
                String url = "jdbc:mysql://localhost:3306/meubanco";
                String usuario = "root";
                String senha = "suasenha";
                conn = DriverManager.getConnection(url, usuario, senha);
                
                // 3. Executar consulta
                stmt = conn.createStatement();
                rs = stmt.executeQuery("SELECT id, nome, email FROM usuarios");
                
                // 4. Percorrer resultados
                while (rs.next()) {
                    int id = rs.getInt("id");
                    String nome = rs.getString("nome");
                    String email = rs.getString("email");
        %>
        <tr>
            <td><%= id %></td>
            <td><%= nome %></td>
            <td><%= email %></td>
        </tr>
        <%
                }
            } catch (Exception e) {
                out.println("<p style='color: red;'>Erro: " + e.getMessage() + "</p>");
                e.printStackTrace();
            } finally {
                // 5. Fechar recursos
                if (rs != null) try { rs.close(); } catch (SQLException e) {}
                if (stmt != null) try { stmt.close(); } catch (SQLException e) {}
                if (conn != null) try { conn.close(); } catch (SQLException e) {}
            }
        %>
    </table>
</body>
</html>
```

**Importante:** Em projetos reais, você NÃO coloca código de banco no JSP. Você cria classes DAO separadas e usa apenas o resultado no JSP. Isso é só para entender o conceito.

---

## 10. JSTL (JSP Standard Tag Library) - O jeito profissional

Misturar `<% %>` é aceitável para aprender, mas o profissional usa **JSTL** - tags que parecem HTML e são mais limpas.

### Adicione JSTL ao projeto:

```xml
<dependency>
    <groupId>jakarta.servlet.jsp.jstl</groupId>
    <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
    <version>3.0.0</version>
</dependency>
<dependency>
    <groupId>org.glassfish.web</groupId>
    <artifactId>jakarta.servlet.jsp.jstl</artifactId>
    <version>3.0.1</version>
</dependency>
```

### Exemplo usando JSTL (muito mais limpo):

```jsp
<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
    // Preparando dados no scriptlet (ideal seria num Servlet)
    List<String> frutas = new ArrayList<>();
    frutas.add("Maçã");
    frutas.add("Banana");
    frutas.add("Laranja");
    frutas.add("Uva");
    request.setAttribute("frutas", frutas);
%>

<!DOCTYPE html>
<html>
<head>
    <title>JSTL Example</title>
</head>
<body>
    <h1>Lista de Frutas</h1>
    
    <ul>
        <c:forEach items="${frutas}" var="fruta">
            <li>${fruta}</li>
        </c:forEach>
    </ul>
    
    <c:if test="${empty frutas}">
        <p>Nenhuma fruta cadastrada.</p>
    </c:if>
</body>
</html>
```

**Vantagens do JSTL:**
- Código mais limpo e legível
- Separa melhor a lógica da apresentação
- Fácil de dar manutenção

---

## 🎯 Projetos práticos (faça na sequência)

1. **Página de boas-vindas personalizada** (recebe nome via formulário)
2. **Calculadora de IMC** (peso e altura, retorna resultado)
3. **Lista de tarefas** (array na sessão, adicionar/remover)
4. **Sistema de login simples** (validação de usuário/senha na sessão)
5. **CRUD completo com banco de dados** (cadastrar, listar, editar, excluir)

---

## 📚 O que estudar depois do JSP

1. **Servlets** (entender como JSP funciona por baixo dos panos)
2. **MVC com JSP + Servlets** (separar responsabilidades)
3. **JSTL completa** (forEach, if, choose, format)
4. **Expression Language (EL)** `${...}`
5. **JDBC com Pool de Conexões** (HikariCP, Tomcat JDBC)
6. **Frameworks modernos** (Spring MVC, JSF)

---

## ⚠️ Nota importante sobre o mercado

**JSP ainda vale a pena aprender?** SIM e NÃO.

- **Sim**, porque:
  - Você vai manter sistemas legados (muitas empresas ainda usam)
  - Entender JSP ajuda a entender qualquer framework web Java
  - É a porta de entrada mais fácil para web Java

- **Não**, porque:
  - Projetos novos usam Spring Boot, JSF ou React/Angular
  - JSP é considerado "tecnologia legada" para projetos verdes

**Meu conselho:** Aprenda JSP para entender o fundamento (1-2 semanas), depois migre para **Spring MVC com Thymeleaf** ou **JSF**.

---

## ✅ Exercícios para fixar

1. Crie uma página que mostra a data e hora atual com formatação brasileira
2. Faça um contador de visitas usando session
3. Crie um formulário de cadastro de produtos (nome, preço, quantidade)
4. Mostre uma tabela com produtos cadastrados
5. Adicione validação nos campos (ex: preço não pode ser negativo)

---
