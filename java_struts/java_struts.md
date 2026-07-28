Struts é um framework open-source para criar aplicações web em Java, desenhado para organizar o código seguindo o padrão **MVC (Model-View-Controller)**. Para um iniciante, a ideia central é que o Struts ajuda a separar a lógica de negócio, a apresentação e o controle da aplicação, tornando-a mais fácil de manter e escalar .

---

### O que é o Padrão MVC?

A principal função do Struts é implementar o padrão MVC, que divide a aplicação em três partes interconectadas :

*   **Model (Modelo):** Representa os dados e a lógica de negócio da aplicação. É a camada que se comunica com o banco de dados e contém as regras de negócio. No Struts, os `JavaBeans` e as classes de acesso a dados (como DAOs) geralmente desempenham esse papel.
*   **View (Visão):** É a interface com o usuário, ou seja, o que ele vê. No Struts, as Views são tipicamente páginas JSP (JavaServer Pages) que utilizam tags específicas do framework para exibir dados dinâmicos .
*   **Controller (Controlador):** É o cérebro da aplicação. Ele recebe as requisições do usuário, decide qual lógica de negócio (Model) deve ser executada e, em seguida, escolhe qual View deve ser exibida como resposta. No Struts, o `ActionServlet` atua como o controlador principal, e as classes `Action` que você escreve são os controladores para ações específicas .

O objetivo principal do Struts é, portanto, organizar sua aplicação seguindo essa arquitetura, evitando que você misture código Java, lógica de navegação e HTML em um único arquivo, o que tornaria o projeto difícil de gerenciar .

---

### Os 4 Pilares do Struts 2

Para começar, você precisa entender os quatro principais componentes que usará em qualquer aplicação Struts 2 :

1.  **Action (Ação):** É o "controlador" que responde a uma ação do usuário (como clicar em um link ou enviar um formulário). Uma classe `Action` processa a requisição, interage com o Model (por exemplo, salvando dados em um banco) e retorna um resultado (como `"success"` ou `"error"`) para indicar qual View deve ser mostrada .

2.  **Result (Resultado):** É a View (geralmente uma página JSP) que será exibida ao usuário após a execução de uma `Action`. O mapeamento entre o nome do resultado (ex: `"success"`) e o caminho da página JSP (ex: `/Welcome.jsp`) é feito no arquivo de configuração .

3.  **Configuration (Configuração):** Você precisa "ligar" tudo. Essa ligação é feita, principalmente, através do arquivo `struts.xml`. Nele, você define que uma determinada URL (ex: `/hello.action`) deve ser tratada por uma classe `Action` específica e, dependendo do resultado retornado, qual página JSP deve ser renderizada .

4.  **Tags (Tags):** Para criar suas Views (páginas JSP), o Struts oferece uma biblioteca de tags próprias. Essas tags, como `<s:property>`, ajudam a exibir dados das `Actions` na página, e `<s:form>` auxilia na criação de formulários que se comunicam diretamente com o framework .

---

### Guia Passo a Passo para seu Primeiro "Hello World"

Agora, vamos construir uma aplicação simples. O objetivo é criar uma página que mostre uma mensagem quando você clicar em um link. Este tutorial é baseado no guia oficial do Apache Struts .

#### 1. Configurando o Projeto com Maven

Assumindo que você tem o Maven instalado, crie um projeto web Java com a estrutura de diretórios padrão do Maven .

No arquivo `pom.xml`, adicione a dependência principal do Struts 2:

```xml
<dependency>
    <groupId>org.apache.struts</groupId>
    <artifactId>struts2-core</artifactId>
    <version>2.5.30</version> 
</dependency>
```

#### 2. Configurando o `web.xml`

No arquivo `src/main/webapp/WEB-INF/web.xml`, você precisa registrar o filtro principal do Struts. Esse filtro é o responsável por interceptar todas as requisições e direcioná-las para o framework .

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <filter>
        <filter-name>struts2</filter-name>
        <filter-class>org.apache.struts2.dispatcher.filter.StrutsPrepareAndExecuteFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>struts2</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>
```

#### 3. Criando o Model (Modelo)

Crie uma classe Java simples para armazenar a mensagem, seguindo o padrão `JavaBean` .

**`src/main/java/org/example/model/MessageStore.java`**

```java
package org.example.model;

public class MessageStore {
    private String message;

    public MessageStore() {
        this.message = "Hello World! Bem-vindo ao Struts 2!";
    }

    public String getMessage() {
        return message;
    }
}
```

#### 4. Criando o Controller (Action)

Agora, crie a classe `Action`. Ela será o controlador que instancia o Model e retorna o resultado .

**`src/main/java/org/example/action/HelloWorldAction.java`**

```java
package org.example.action;

import org.example.model.MessageStore;
import com.opensymphony.xwork2.ActionSupport;

public class HelloWorldAction extends ActionSupport {

    private MessageStore messageStore;

    public String execute() {
        messageStore = new MessageStore();
        return SUCCESS; // Retorna "success"
    }

    public MessageStore getMessageStore() {
        return messageStore;
    }
}
```

#### 5. Criando a View (Página JSP)

Crie a página JSP que exibirá a mensagem. Use a tag `<s:property>` para acessar o dado do Model .

**`src/main/webapp/HelloWorld.jsp`**

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <h2><s:property value="messageStore.message" /></h2>
</body>
</html>
```

> **Entendendo o código:** A expressão `<s:property value="messageStore.message" />` instrui o Struts a chamar o método `getMessageStore()` da `Action` e, em seguida, o método `getMessage()` do objeto retornado, exibindo o resultado na página .

#### 6. Configurando tudo no `struts.xml`

O último passo é criar o arquivo de configuração do Struts para mapear a URL `/hello` para a sua `Action` e a View .

**`src/main/resources/struts.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE struts PUBLIC
        "-//Apache Software Foundation//DTD Struts Configuration 2.5//EN"
        "http://struts.apache.org/dtds/struts-2.5.dtd">
<struts>
    <constant name="struts.devMode" value="true" />

    <package name="basicstruts2" extends="struts-default">
        <action name="hello" class="org.example.action.HelloWorldAction" method="execute">
            <result name="success">/HelloWorld.jsp</result>
        </action>
    </package>
</struts>
```

#### 7. Criando um link para acessar

Por fim, adicione um link na página inicial (`index.jsp`) para chamar sua `Action` usando a tag `<s:url>` .

**`src/main/webapp/index.jsp`**

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Aplicação Struts 2</title>
</head>
<body>
    <h1>Bem-vindo ao Struts 2!</h1>
    <p><a href="<s:url action='hello' />">Clique para ver a mensagem Hello World</a></p>
</body>
</html>
```

#### 8. Executando a Aplicação

No terminal, navegue até a raiz do seu projeto e execute:
```bash
mvn jetty:run
```

Acesse `http://localhost:8080/nome-do-seu-projeto/` (ou o contexto que você definiu) e clique no link.

### Resumo do Fluxo

1.  Você acessa `index.jsp` e clica no link.
2.  O link gera uma URL para a `action` chamada `hello`.
3.  O Struts, através do filtro configurado no `web.xml`, intercepta a requisição e, olhando no `struts.xml`, sabe que a classe `HelloWorldAction` deve ser executada.
4.  O método `execute()` da Action é chamado, que cria um objeto `MessageStore` com a mensagem "Hello World!" e retorna `"success"`.
5.  O Struts, novamente consultando o `struts.xml`, vê que o resultado `"success"` está mapeado para a página `/HelloWorld.jsp`.
6.  A JSP é renderizada, e a tag `<s:property ... />` pega a mensagem do `MessageStore` (que está disponível através da Action) e a exibe na tela.

Com isso, você já tem as bases para começar a explorar o Struts e entender seu funcionamento fundamental.
