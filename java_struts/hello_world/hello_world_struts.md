Exemplo simples e completo de uma aplicação **Hello World** usando Java Struts 2:

## Estrutura do Projeto

```
hello-struts/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── exemplo/
│       │           └── HelloWorldAction.java
│       ├── resources/
│       │   └── struts.xml
│       └── webapp/
│           ├── WEB-INF/
│           │   └── web.xml
│           └── hello.jsp
└── pom.xml (se usar Maven)
```

## 1. Action Class (HelloWorldAction.java)

```java
package com.exemplo;

import com.opensymphony.xwork2.ActionSupport;

public class HelloWorldAction extends ActionSupport {
    
    private String mensagem;
    
    public String execute() {
        mensagem = "Hello World! Bem-vindo ao Struts 2!";
        return SUCCESS;
    }
    
    public String getMensagem() {
        return mensagem;
    }
    
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
}
```

## 2. Configuração do Struts (struts.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE struts PUBLIC
    "-//Apache Software Foundation//DTD Struts Configuration 2.3//EN"
    "http://struts.apache.org/dtds/struts-2.3.dtd">

<struts>
    <constant name="struts.devMode" value="true" />
    
    <package name="default" extends="struts-default">
        <action name="hello" class="com.exemplo.HelloWorldAction">
            <result name="success">/hello.jsp</result>
        </action>
    </package>
</struts>
```

## 3. Configuração Web (web.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee 
         http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">
    
    <display-name>Hello World Struts</display-name>
    
    <filter>
        <filter-name>struts2</filter-name>
        <filter-class>org.apache.struts2.dispatcher.filter.StrutsPrepareAndExecuteFilter</filter-class>
    </filter>
    
    <filter-mapping>
        <filter-name>struts2</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
    
    <welcome-file-list>
        <welcome-file>hello.action</welcome-file>
    </welcome-file-list>
</web-app>
```

## 4. Página JSP (hello.jsp)

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World Struts</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 50px;
            background-color: #f0f0f0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        h1 {
            color: #2c3e50;
        }
        .mensagem {
            font-size: 24px;
            color: #3498db;
            padding: 20px;
            border: 2px solid #3498db;
            border-radius: 5px;
            background-color: #ecf0f1;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Struts 2 - Hello World</h1>
        <div class="mensagem">
            <s:property value="mensagem" />
        </div>
        <p><a href="hello.action">Recarregar</a></p>
    </div>
</body>
</html>
```

## 5. Dependências Maven (pom.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.exemplo</groupId>
    <artifactId>hello-struts</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <!-- Struts 2 Core -->
        <dependency>
            <groupId>org.apache.struts</groupId>
            <artifactId>struts2-core</artifactId>
            <version>2.5.30</version>
        </dependency>
        
        <!-- Servlet API -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.1</version>
            <scope>provided</scope>
        </dependency>
        
        <!-- JSP API -->
        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>javax.servlet.jsp-api</artifactId>
            <version>2.3.3</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>

    <build>
        <finalName>hello-struts</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.3.2</version>
            </plugin>
        </plugins>
    </build>
</project>
```

## Como Executar

1. **Com Maven:**
```bash
mvn clean package
```

2. **Deploy no Tomcat:**
   - Copie o arquivo `target/hello-struts.war` para a pasta `webapps` do Tomcat
   - Inicie o Tomcat

3. **Acesse no navegador:**
   ```
   http://localhost:8080/hello-struts/hello.action
   ```

## Explicação do Fluxo

1. **Requisição:** O usuário acessa `/hello.action`
2. **Filtro Struts:** Intercepta a requisição
3. **Action:** Mapeia para `HelloWorldAction.execute()`
4. **Resultado:** Retorna `SUCCESS` → renderiza `/hello.jsp`
5. **Exibição:** A JSP exibe a mensagem usando `<s:property value="mensagem" />`

## Teste Rápido

Se preferir um teste mais simples, pode usar apenas:

```jsp
<!-- hello.jsp simplificado -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<body>
    <h1><s:property value="mensagem" /></h1>
</body>
</html>
```

Este exemplo é funcional e pode ser executado em qualquer servidor Servlet compatível (Tomcat, Jetty, etc.).
