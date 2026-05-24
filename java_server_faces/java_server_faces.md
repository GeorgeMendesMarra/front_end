## 🧠 Antes de começar: o que você já sabe (e isso é ótimo!)

Por você já estar estudando Java backend, você tem tudo que precisa:

- **Java puro** (classes, objetos, métodos, getters/setters)
- **Lógica de programação** (if/else, loops, etc.)
- **Conceitos de servidores** (Tomcat, WildFly, etc.)

O JSF vai usar tudo isso. Você **não precisa saber** HTML, CSS ou JavaScript avançados (embora ajude mais tarde).

---

## 1. Afinal, o que é JSF? (Comparação com o que você já conhece)

**JSF (JavaServer Faces)** é um **framework MVC** oficial da plataforma Java EE (hoje Jakarta EE) para construir interfaces web com componentes reutilizáveis .

Vamos entender melhor comparando com coisas que você já deve ter ouvido falar:

### A "Família" Java para Web (Diferenças importantes)

| Tecnologia | O que é | Para que serve | Como se relaciona com JSF |
|------------|--------|----------------|--------------------------|
| **Servlet** | API Java pura que intercepta requisições HTTP | Controlar requisições/respostas no servidor | O JSF é **construído sobre** Servlets  |
| **JSP** | Tecnologia de visão que mistura HTML com Java | Criar páginas dinâmicas (é convertido em Servlet) | JSF **usava** JSP (versões antigas), hoje usa **Facelets**  |
| **JSF** | Framework MVC completo com componentes | Construir interfaces ricas como se fosse um aplicativo desktop | Ele **substitui** a complexidade de gerenciar HTML/CSS/JS na mão |

**Traduzindo para o mundo backend que você está estudando**:
- Se **Servlet** é o "controller mais básico possível" (como um `public static void main` para web)
- **JSP** seria como escrever HTML com Java dentro (bagunçado)
- **JSF** é como ter um framework que gerencia tudo para você: componentes, estado, eventos, validação 

---

## 2. A Arquitetura MVC do JSF (Você já conhece esse padrão!)

O JSF implementa MVC de forma muito clara :

```
┌─────────────────────────────────────────────────────────┐
│                     VIEW (Facelets)                     │
│              Páginas .xhtml com componentes JSF         │
│                  <h:inputText value="#{...}" />         │
└─────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────┐
│                   CONTROLLER (FacesServlet)              │
│           Gerencia o ciclo de vida, recebe ações,        │
│               atualiza modelos, decide navegação         │
└─────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────┐
│                      MODEL (Beans)                       │
│           Classes Java comuns (getters/setters)          │
│         Armazenam dados e contêm a lógica de negócio      │
└─────────────────────────────────────────────────────────┘
```

**O que cada parte faz**:

- **View (Facelets)**: São arquivos `.xhtml` com componentes JSF (botões, campos). Você não escreve HTML puro na mão .
- **Controller (FacesServlet)**: É o Servlet que o JSF já te entrega pronto. Ele recebe a requisição, atualiza os beans, chama validações e decide qual página mostrar depois .
- **Model (Managed Beans / CDI Beans)**: São SUAS classes Java. Você cria uma classe com atributos, getters/setters e métodos de ação (como `salvar()`, `buscar()`). O JSF conecta automaticamente os dados do formulário aos atributos dessa classe .

---

## 3. Tipos de Beans no JSF (Organizando seu código)

Uma das melhores práticas no JSF é separar as responsabilidades em diferentes tipos de beans. Isso mantém seu código organizado e fácil de testar .

| Tipo de Bean | Escopo típico | Responsabilidade | Exemplo de uso |
|--------------|---------------|------------------|----------------|
| **Model Bean** | `@SessionScoped` | Representa os DADOS (entidades) | Um objeto `Usuario` com nome, email, senha |
| **Backing Bean** | `@ViewScoped` | Suporta a VISÃO (lógica de UI) | Controlar se um painel está visível ou não |
| **Controller Bean** | `@RequestScoped` | Executa a LÓGICA DE NEGÓCIO | Método `cadastrarUsuario()` que chama o banco |

**Exemplo prático dos 3 beans**:

```java
// MODEL BEAN - Só os dados
@Named("usuarioModel")
@SessionScoped
public class UsuarioModel implements Serializable {
    private String nome;
    private String email;
    // getters e setters
}

// BACKING BEAN - Controle da tela (ex: abrir/fechar modal)
@Named("cadastroBacking")
@ViewScoped
public class CadastroBacking implements Serializable {
    private boolean exibirModalConfirmacao = false;
    
    public void mostrarModal() {
        this.exibirModalConfirmacao = true;
    }
    // getter/setter
}

// CONTROLLER BEAN - A lógica de negócio
@Named("cadastroController")
@RequestScoped
public class CadastroController implements Serializable {
    
    @Inject
    private UsuarioModel usuario; // Injeta o model
    
    public String salvar() {
        // Aqui você chama o banco de dados, serviços, etc.
        System.out.println("Salvando: " + usuario.getNome());
        return "sucesso?faces-redirect=true"; // Navegação
    }
}
```

**Por que separar assim?**
- Cada bean tem seu escopo correto (economiza memória)
- Facilita testes unitários
- Código mais limpo e organizado 

---

## 4. Funcionamento Interno (O Ciclo de Vida do JSF)

Quando você submete um formulário, o JSF passa por **6 fases**. Entender isso ajuda a debugar e saber onde colocar sua lógica :

```
1. Restore View     → Reconstrói a árvore de componentes da tela
2. Apply Values     → Pega os valores do formulário e coloca nos componentes
3. Process Validations → Executa as validações (ex: campo obrigatório)
4. Update Model     → Copia os valores validados para seu bean (model)
5. Invoke Application → Executa o método do botão (ex: `salvar()`)
6. Render Response  → Gera o HTML e envia para o navegador
```

**Importante**: Se algo falha na validação (fase 3), o JSF pula direto para a fase 6 (Render Response) e mostra os erros na tela, sem nunca chegar no seu método `salvar()` .

---

## 5. Seu Primeiro Projeto JSF (Passo a Passo)

### Pré-requisitos:
- Eclipse/IntelliJ IDEA
- Apache Tomcat 9+ ou WildFly
- Maven (recomendado)

### Passo 1: Criar um projeto web com suporte a JSF

No Eclipse com WTP:
1. File → New → Dynamic Web Project
2. Dê um nome (ex: `MeuPrimeiroJSF`)
3. Na tela "Configuration", escolha "JavaServer Faces v2.3 Project" 

### Passo 2: Adicionar as dependências Maven

No `pom.xml`:

```xml
<dependencies>
    <!-- JSF API -->
    <dependency>
        <groupId>jakarta.faces</groupId>
        <artifactId>jakarta.faces-api</artifactId>
        <version>3.0.0</version>
        <scope>provided</scope>
    </dependency>
    
    <!-- Implementação JSF (Mojarra) -->
    <dependency>
        <groupId>org.glassfish</groupId>
        <artifactId>jakarta.faces</artifactId>
        <version>3.0.0</version>
    </dependency>
    
    <!-- CDI (Contexts and Dependency Injection) -->
    <dependency>
        <groupId>jakarta.enterprise</groupId>
        <artifactId>jakarta.enterprise.cdi-api</artifactId>
        <version>3.0.0</version>
    </dependency>
</dependencies>
```

### Passo 3: Configurar o `web.xml`

No arquivo `src/main/webapp/WEB-INF/web.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee 
         https://jakarta.ee/xml/ns/jakartaee/web-app_5_0.xsd"
         version="5.0">
    
    <!-- Configura o Servlet principal do JSF -->
    <servlet>
        <servlet-name>FacesServlet</servlet-name>
        <servlet-class>jakarta.faces.webapp.FacesServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    
    <!-- Mapeia URLs que terminam com .xhtml para o JSF -->
    <servlet-mapping>
        <servlet-name>FacesServlet</servlet-name>
        <url-pattern>*.xhtml</url-pattern>
    </servlet-mapping>
    
    <!-- Página inicial -->
    <welcome-file-list>
        <welcome-file>index.xhtml</welcome-file>
    </welcome-file-list>
</web-app>
```

### Passo 4: Criar um Bean (Controller)

```java
package br.com.meuapp.bean;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Named;
import java.io.Serializable;

@Named("olaMundoBean")  // Nome que será usado no XHTML
@RequestScoped          // Escopo de requisição
public class OlaMundoBean implements Serializable {
    
    private String nome;
    private String mensagem;
    
    public void dizerOla() {
        this.mensagem = "Olá, " + this.nome + "! Bem-vindo ao JSF!";
    }
    
    // Getters e Setters
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public String getMensagem() {
        return mensagem;
    }
}
```

### Passo 5: Criar a View (página .xhtml)

Em `src/main/webapp/index.xhtml`:

```xml
<?xml version='1.0' encoding='UTF-8' ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:h="http://xmlns.jcp.org/jsf/html"
      xmlns:f="http://xmlns.jcp.org/jsf/core">
      
    <h:head>
        <title>Meu Primeiro JSF</title>
    </h:head>
    
    <h:body>
        <h:form>
            <h2>Digite seu nome:</h2>
            
            <h:inputText value="#{olaMundoBean.nome}" 
                         size="30" />
            <br/><br/>
            
            <h:commandButton value="Enviar" 
                             action="#{olaMundoBean.dizerOla}" />
            <br/><br/>
            
            <h:outputText value="#{olaMundoBean.mensagem}" 
                          style="color: blue; font-weight: bold;" />
        </h:form>
    </h:body>
</html>
```

**Explicação das tags**:
- `<h:form>` → Cria um formulário HTML automaticamente
- `<h:inputText>` → Campo de texto, ligado ao atributo `nome` do bean via `value="#{bean.nome}"`
- `<h:commandButton>` → Botão de submit, executa o método `dizerOla()` quando clicado
- `<h:outputText>` → Exibe texto (pode ser HTML ou puro) 

### Passo 6: Executar

1. Configure o Tomcat no Eclipse
2. Adicione o projeto ao servidor
3. Inicie o servidor
4. Acesse: `http://localhost:8080/MeuPrimeiroJSF/`

---

## 6. Navegação entre páginas (Como mudar de tela)

O JSF gerencia a navegação de forma simples. Seu método pode retornar uma String :

```java
@Named("loginBean")
@RequestScoped
public class LoginBean {
    
    public String fazerLogin() {
        // Verifica credenciais...
        if (usuarioValido) {
            return "home.xhtml?faces-redirect=true";
        } else {
            return "erro.xhtml?faces-redirect=true";
        }
    }
}
```

**O `?faces-redirect=true`** faz o navegador redirecionar (muda a URL). Sem ele, é um forward interno (a URL não muda).

---

## 7. Validação de Dados (Sem escrever JavaScript!)

O JSF tem validação integrada. Você pode usar tags `<f:validateXxx>` dentro dos campos :

```xml
<h:inputText value="#{usuarioBean.idade}" required="true" 
             requiredMessage="Idade é obrigatória">
    <f:validateLongRange minimum="18" maximum="120" />
</h:inputText>

<!-- Exibe mensagens de erro -->
<h:message for="idade" style="color: red;" />
```

**Tipos de validação prontas**:
- `f:validateLength` → tamanho mínimo/máximo de string
- `f:validateLongRange` → intervalo numérico
- `f:validateRegex` → expressão regular
- `f:validateRequired` → campo obrigatório

---

## 8. PrimeFaces: O "Bootstrap do JSF"

Se você quiser interfaces **muito mais bonitas e ricas** sem esforço, use **PrimeFaces**. É a biblioteca de componentes mais popular para JSF .

### Adicionar PrimeFaces ao projeto:

```xml
<dependency>
    <groupId>org.primefaces</groupId>
    <artifactId>primefaces</artifactId>
    <version>13.0.0</version>
</dependency>
```

### Exemplo com componentes do PrimeFaces:

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:h="http://xmlns.jcp.org/jsf/html"
      xmlns:p="http://primefaces.org/ui">
      
    <h:head>
        <title>Com PrimeFaces</title>
    </h:head>
    
    <h:body>
        <h:form>
            <p:panel header="Cadastro" style="width: 400px;">
                <p:outputLabel value="Nome:" for="nome" />
                <p:inputText id="nome" value="#{usuarioBean.nome}" />
                
                <p:outputLabel value="Email:" for="email" />
                <p:inputText id="email" value="#{usuarioBean.email}" />
                
                <p:commandButton value="Salvar" 
                                 action="#{usuarioBean.salvar}"
                                 icon="pi pi-save"
                                 update="@form" />
            </p:panel>
        </h:form>
    </h:body>
</html>
```

**Vantagens do PrimeFaces**:
- Componentes bonitos prontos (datatable, charts, calendars, modals)
- AJAX integrado com o atributo `update`
- Temas prontos (pode usar o ThemeSwitcher)

---

## 9. Próximos Passos (Ordem de Estudo)

Depois desses fundamentos, estude na seguinte ordem:

1. **Escopos de Bean** (`@RequestScoped`, `@ViewScoped`, `@SessionScoped`, `@ApplicationScoped`)
2. **Conversão de tipos** (`<f:convertDateTime>`, `<f:convertNumber>`)
3. **AJAX no JSF** (`<f:ajax>` ou o `update` do PrimeFaces)
4. **Templating com Facelets** (criar um template base com `<ui:composition>`, `<ui:insert>`, `<ui:define>`)
5. **DataTable do PrimeFaces** (listar dados do banco com paginação e ordenação)
6. **Internacionalização (i18n)** (múltiplos idiomas)
7. **Integração com JPA/Hibernate** (seu backend Java com banco de dados)

---

## 🛠️ Projetos práticos (faça na sequência)

1. **Calculadora IMC** (2 campos, validação, exibe resultado) 
2. **Lista de tarefas** (cadastro, listagem em tabela, excluir)
3. **Formulário de cadastro de usuário** (validação, navegação para página de sucesso) 
4. **CRUD completo com PrimeFaces DataTable** (listar, cadastrar, editar, excluir)
5. **Sistema de login** (autenticação simples com session scoped bean)

---

## 📚 Recursos gratuitos

- **PrimeFaces Showcase** (exemplos de todos os componentes)
- **Documentação oficial do Jakarta Faces**
- **BalusC Code** (blog do especialista em JSF - ótimo para dúvidas avançadas)
- **Curso "Getting Started with JavaServer Faces" na Pluralsight** (Jesper de Jong - muito bom) 

---
