## 📦 O que você precisa ter instalado

- **JDK 11 ou superior** — verifique com `java -version`
- **Apache Tomcat 10** — baixe em https://tomcat.apache.org/download-10.cgi
- **Editor de texto** (VS Code, Notepad++, Sublime ou até Bloco de Notas)

---

## 🏗️ Estrutura do Projeto JSF

Diferente do JSP, o JSF precisa de uma estrutura mais organizada. Vamos criar a seguinte pasta:

```
SiteJSF/
├── index.xhtml                    # Página principal (Hello World)
├── WEB-INF/
│   ├── web.xml                    # Configuração do Servlet do JSF
│   ├── faces-config.xml           # Configuração do JSF (managed beans)
│   └── lib/                       # Bibliotecas JSF
│       ├── javax.faces-2.3.14.jar
│       └── (outras dependências)
```

**Crie essa estrutura manualmente** no seu computador:

### Windows (cmd):
```cmd
mkdir SiteJSF
cd SiteJSF
mkdir WEB-INF
mkdir WEB-INF\lib
```

### Linux/Mac (terminal):
```bash
mkdir -p SiteJSF/WEB-INF/lib
cd SiteJSF
```

---

## 📚 Passo 1: Baixar as bibliotecas JSF

O JSF não vem embutido no Tomcat. Você precisa baixar as bibliotecas JSF (implementação de referência) e colocá-las na pasta `WEB-INF/lib/`.

Baixe o **JSF API e Implementation** (Mojarra) do repositório Maven:

- **javax.faces-2.3.14.jar** (ou versão mais recente)
  - Link: https://mvnrepository.com/artifact/org.glassfish/javax.faces/2.3.14

Ou use um único JAR unificado:
- Baixe de: https://repo1.maven.org/maven2/org/glassfish/javax.faces/2.3.14/javax.faces-2.3.14.jar

**Coloque o arquivo `.jar` baixado dentro da pasta** `SiteJSF/WEB-INF/lib/`

> 💡 **Dica:** Você pode baixar direto pelo terminal com `wget` (Linux/Mac) ou baixar manualmente pelo navegador.

---

## ⚙️ Passo 2: Configurar o `web.xml`

Crie o arquivo `WEB-INF/web.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee 
         https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
         version="6.0">

    <display-name>JSF Hello World Application</display-name>

    <!-- Configura o Servlet principal do JSF -->
    <servlet>
        <servlet-name>Faces Servlet</servlet-name>
        <servlet-class>jakarta.faces.webapp.FacesServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <!-- Mapeia todos os arquivos .xhtml para serem processados pelo JSF -->
    <servlet-mapping>
        <servlet-name>Faces Servlet</servlet-name>
        <url-pattern>*.xhtml</url-pattern>
    </servlet-mapping>

    <!-- Página inicial da aplicação -->
    <welcome-file-list>
        <welcome-file>index.xhtml</welcome-file>
    </welcome-file-list>

    <!-- Configuração de encoding para português -->
    <context-param>
        <param-name>javax.faces.DEFAULT_CHARSET</param-name>
        <param-value>UTF-8</param-value>
    </context-param>

    <!-- Para desenvolvimento (mostra mais erros) -->
    <context-param>
        <param-name>javax.faces.PROJECT_STAGE</param-name>
        <param-value>Development</param-value>
    </context-param>
</web-app>
```

---

## ⚙️ Passo 3: Configurar o `faces-config.xml`

O `faces-config.xml` é onde você declara os **managed beans** (componentes Java que o JSF vai gerenciar).

Crie o arquivo `WEB-INF/faces-config.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<faces-config xmlns="https://jakarta.ee/xml/ns/jakartaee"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee 
              https://jakarta.ee/xml/ns/jakartaee/web-facesconfig_4_0.xsd"
              version="4.0">

    <!-- Declaração do Managed Bean para a data/hora -->
    <managed-bean>
        <managed-bean-name>helloWorldBean</managed-bean-name>
        <managed-bean-class>com.example.HelloWorldBean</managed-bean-class>
        <managed-bean-scope>request</managed-bean-scope>
    </managed-bean>

</faces-config>
```

> **Observação:** Se você estiver usando JSF com CDI (recomendado para versões mais recentes), usará anotações como `@Named` e `@RequestScoped` no código Java em vez de configurar no XML. Para manter o exemplo sem IDE, usaremos o XML mesmo, que funciona em versões mais antigas e não requer bibliotecas adicionais.

---

## ☕ Passo 4: Criar a classe Java (Managed Bean)

Crie a estrutura de pastas para as classes Java:

### Windows:
```cmd
mkdir src\com\example
```

### Linux/Mac:
```bash
mkdir -p src/com/example
```

Agora crie o arquivo `src/com/example/HelloWorldBean.java`:

```java
package com.example;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class HelloWorldBean {
    
    private String mensagem;
    private String dataHora;
    private String nome;
    
    public HelloWorldBean() {
        // Construtor padrão - será chamado pelo JSF
        atualizarDataHora();
        this.mensagem = "Bem-vindo ao JSF!";
    }
    
    public void atualizarDataHora() {
        LocalDateTime agora = LocalDateTime.now();
        DateTimeFormatter formatterData = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter formatterHora = DateTimeFormatter.ofPattern("HH:mm:ss");
        DateTimeFormatter formatterDia = DateTimeFormatter.ofPattern("EEEE", new Locale("pt", "BR"));
        
        String diaSemana = formatterDia.format(agora);
        diaSemana = diaSemana.substring(0, 1).toUpperCase() + diaSemana.substring(1);
        
        this.dataHora = String.format("%s, %s às %s", 
            diaSemana, 
            agora.format(formatterData), 
            agora.format(formatterHora));
    }
    
    // Método que será chamado pelo botão do JSF
    public String dizerOla() {
        if (nome != null && !nome.trim().isEmpty()) {
            this.mensagem = "Olá, " + nome + "! Seja bem-vindo ao JSF!";
        } else {
            this.mensagem = "Por favor, digite seu nome!";
        }
        atualizarDataHora();
        return null; // null = permanece na mesma página
    }
    
    // Getters e Setters (obrigatórios para o JSF)
    public String getMensagem() {
        return mensagem;
    }
    
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
    
    public String getDataHora() {
        return dataHora;
    }
    
    public void setDataHora(String dataHora) {
        this.dataHora = dataHora;
    }
    
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
}
```

---

## 🖼️ Passo 5: Compilar a classe Java

Antes de implantar, você precisa compilar o código Java para gerar o arquivo `.class`.

### Windows:
```cmd
javac -cp "WEB-INF\lib\*.jar" -d WEB-INF\classes src\com\example\HelloWorldBean.java
```

### Linux/Mac:
```bash
javac -cp "WEB-INF/lib/*.jar" -d WEB-INF/classes src/com/example/HelloWorldBean.java
```

> **Se o comando acima falhar** com erro de "package javax.faces not found", significa que o arquivo JAR não está no lugar certo. Verifique se o `javax.faces-*.jar` está dentro de `WEB-INF/lib/`.

Se você não quiser se preocupar com compilação no momento, pode pular este passo por enquanto — a página JSF vai funcionar com a data/hora diretamente na view (próximo passo).

---

## 🖼️ Passo 6: Criar a página XHTML (index.xhtml)

Crie o arquivo `index.xhtml` na raiz da pasta `SiteJSF/`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:h="http://xmlns.jcp.org/jsf/html"
      xmlns:f="http://xmlns.jcp.org/jsf/core">
      
<h:head>
    <title>Hello World JSF com Data e Hora</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
        }
        h1 { color: #667eea; margin-bottom: 10px; }
        .datetime {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
            font-size: 1.1em;
        }
        input[type="text"] {
            padding: 10px;
            width: 80%;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 1em;
            margin: 10px 0;
        }
        button {
            background: #667eea;
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
        }
        button:hover { background: #5a67d8; }
        .message {
            margin-top: 20px;
            padding: 15px;
            background: #f0f0f0;
            border-radius: 10px;
            color: #333;
        }
        footer {
            margin-top: 20px;
            font-size: 0.8em;
            color: #999;
        }
    </style>
</h:head>

<h:body>
    <div class="container">
        <h1>🌍 Hello World JSF</h1>
        
        <!-- Exibindo data e hora sem precisar de Bean -->
        <div class="datetime">
            📅 <h:outputText value="#{now}">
                   <f:convertDateTime pattern="dd 'de' MMMM 'de' yyyy" />
               </h:outputText>
            <br/>
            ⏰ <h:outputText value="#{now}">
                   <f:convertDateTime pattern="HH:mm:ss" />
               </h:outputText>
        </div>
        
        <!-- Formulário JSF -->
        <h:form>
            <h:outputText value="Digite seu nome:" />
            <br/>
            <h:inputText value="#{helloWorldBean.nome}" 
                         style="padding:10px; width:80%; margin:10px 0;" />
            <br/>
            <h:commandButton value="Enviar" 
                             action="#{helloWorldBean.dizerOla}"
                             style="background:#667eea; color:white; border:none; padding:10px 30px; border-radius:5px; cursor:pointer;" />
        </h:form>
        
        <div class="message">
            <strong>💬 Mensagem:</strong><br/>
            <h:outputText value="#{helloWorldBean.mensagem}" />
        </div>
        
        <footer>
            Executado no servidor: <%= application.getServerInfo() %>
        </footer>
    </div>
</h:body>
</html>
```

> **Importante sobre a data/hora:** O código acima usa `#{now}` com `f:convertDateTime` para exibir a data atual. O JSF precisa que um objeto `java.util.Date` esteja disponível como managed bean. Se você quiser usar esta abordagem sem criar um bean específico para data, pode declarar o bean `currentDate` no `faces-config.xml` — veja o Passo 7 abaixo.

---

## ⚙️ Passo 7: Configurar data/hora sem bean extra (alternativa)

Se você não quer compilar nada e quer que a data funcione imediatamente, **adicione esta configuração** ao seu `faces-config.xml` (junto com a configuração do `helloWorldBean`):

```xml
<!-- Bean para a data/hora atual (usando a classe java.util.Date) -->
<managed-bean>
    <managed-bean-name>now</managed-bean-name>
    <managed-bean-class>java.util.Date</managed-bean-class>
    <managed-bean-scope>request</managed-bean-scope>
</managed-bean>
```

**Assim você pode usar** `#{now}` na sua página XHTML e formatar com `<f:convertDateTime>`.

---

## 🚀 Passo 8: Implantar no Tomcat

### Método 1: Copiar a pasta inteira

1. Copie toda a pasta `SiteJSF` para a pasta `webapps` do Tomcat:

   **Windows:**
   ```cmd
   xcopy /E SiteJSF C:\apache-tomcat-10\webapps\SiteJSF\
   ```

   **Linux/Mac:**
   ```bash
   cp -r SiteJSF /opt/apache-tomcat-10/webapps/
   ```

2. Inicie o Tomcat:

   **Windows:**
   ```cmd
   cd C:\apache-tomcat-10\bin
   startup.bat
   ```

   **Linux/Mac:**
   ```bash
   cd /opt/apache-tomcat-10/bin
   ./startup.sh
   ```

3. Acesse no navegador: `http://localhost:8080/SiteJSF/index.xhtml`

### Método 2: Criar arquivo WAR

```bash
cd SiteJSF
jar -cvf SiteJSF.war *
copy SiteJSF.war C:\apache-tomcat-10\webapps\
```

---

## ✅ Estrutura final do projeto (após compilação)

```
SiteJSF/
├── index.xhtml
├── WEB-INF/
│   ├── web.xml
│   ├── faces-config.xml
│   ├── classes/
│   │   └── com/
│   │       └── example/
│   │           └── HelloWorldBean.class
│   └── lib/
│       └── javax.faces-2.3.14.jar
```

---

## 🔧 Solução de problemas comuns

### Erro 404 — Página não encontrada
- Verifique se o Tomcat está rodando (`http://localhost:8080`)
- Confirme se a pasta está em `webapps/SiteJSF/`
- Use a URL correta com `.xhtml`: `http://localhost:8080/SiteJSF/index.xhtml`

### Erro 500 — "javax.faces.webapp.FacesServlet not found"
- O arquivo JAR do JSF não está em `WEB-INF/lib/`
- Verifique se o caminho está correto

### A data não aparece / aparece vazia
- Certifique-se de que o bean `now` está declarado no `faces-config.xml`
- Ou use a abordagem com `helloWorldBean` já incluindo a data

### Erro de compilação Java
- Use a versão simplificada da página XHTML que não depende do bean compilado (apenas com `#{now}` para data/hora)

---

## 📌 Resumo: JSF vs JSP (para você entender a diferença)

| Característica | JSP | JSF |
|----------------|-----|-----|
| Complexidade | Baixa | Média/alta |
| Arquivos | `.jsp` | `.xhtml` |
| Bibliotecas | Nenhuma extra | Precisa de JARs JSF |
| Configuração | `web.xml` básico | `web.xml` + `faces-config.xml` |
| Modelo | Scriptlets (`<% %>`) | Componentes (`<h:inputText>`, `<h:commandButton>`) |
| Padrão | Servlet puro | MVC com managed beans |

---
