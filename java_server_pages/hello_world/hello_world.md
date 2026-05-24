## 📦 Pré-requisitos (instale antes de começar)

1. **JDK 11 ou superior**
   - Baixe em: https://adoptium.net/ ou https://www.oracle.com/java/technologies/downloads/
   - Verifique a instalação:
   ```cmd
   java -version
   javac -version
   ```

2. **Apache Tomcat 10**
   - Baixe em: https://tomcat.apache.org/download-10.cgi
   - Escolha: "64-bit Windows zip" (Windows) ou "tar.gz" (Linux/Mac)
   - Extraia para uma pasta (ex: `C:\apache-tomcat-10`)

---

## PASSO 1: Criar a estrutura de pastas manualmente

Abra o **Prompt de Comando (cmd)** ou **Terminal** e execute:

### Windows:
```cmd
mkdir SiteDataHora
cd SiteDataHora
mkdir WEB-INF
cd WEB-INF
mkdir lib
cd ..
```

### Linux/Mac:
```bash
mkdir -p SiteDataHora/WEB-INF/lib
cd SiteDataHora
```

A estrutura criada:
```
SiteDataHora/
└── WEB-INF/
    └── lib/
```

---

## PASSO 2: Criar o arquivo JSP

Crie um arquivo chamado `index.jsp` dentro da pasta `SiteDataHora` (fora da pasta WEB-INF).

Use qualquer editor de texto (Bloco de Notas, VS Code, Notepad++).

**Arquivo: `SiteDataHora/index.jsp`**

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ page import="java.time.format.DateTimeFormatter" %>
<%@ page import="java.util.Locale" %>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World - JSP com Data e Hora</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
        }
        
        h1 {
            color: #667eea;
            font-size: 2.5em;
            margin-bottom: 20px;
        }
        
        .hello {
            font-size: 1.2em;
            color: #333;
            margin-bottom: 30px;
            padding: 15px;
            background: #f0f0f0;
            border-radius: 10px;
        }
        
        .info-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 15px;
            margin: 20px 0;
        }
        
        .info-item {
            margin: 15px 0;
            font-size: 1.1em;
        }
        
        .label {
            font-weight: bold;
            display: inline-block;
            width: 120px;
        }
        
        .value {
            font-family: 'Courier New', monospace;
            font-size: 1.2em;
        }
        
        .badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 5px 10px;
            border-radius: 5px;
            margin-top: 10px;
            font-size: 0.9em;
        }
        
        footer {
            margin-top: 30px;
            font-size: 0.8em;
            color: #999;
        }
        
        .server-info {
            background: #f9f9f9;
            padding: 10px;
            border-radius: 10px;
            margin-top: 20px;
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌍 Hello World JSP</h1>
        
        <div class="hello">
            ✨ Bem-vindo ao JavaServer Pages! ✨
        </div>
        
        <div class="info-box">
            <div class="info-item">
                <span class="label">📅 Data atual:</span>
                <span class="value">
                    <%
                        LocalDateTime agora = LocalDateTime.now();
                        DateTimeFormatter formatterData = DateTimeFormatter.ofPattern("dd/MM/yyyy");
                        String dataFormatada = agora.format(formatterData);
                        out.print(dataFormatada);
                    %>
                </span>
            </div>
            
            <div class="info-item">
                <span class="label">⏰ Hora atual:</span>
                <span class="value">
                    <%
                        DateTimeFormatter formatterHora = DateTimeFormatter.ofPattern("HH:mm:ss");
                        String horaFormatada = agora.format(formatterHora);
                        out.print(horaFormatada);
                    %>
                </span>
            </div>
            
            <div class="info-item">
                <span class="label">📆 Dia da semana:</span>
                <span class="value">
                    <%
                        DateTimeFormatter formatterDia = DateTimeFormatter.ofPattern("EEEE", new Locale("pt", "BR"));
                        String diaSemana = agora.format(formatterDia);
                        String diaCapitalizado = diaSemana.substring(0, 1).toUpperCase() + diaSemana.substring(1);
                        out.print(diaCapitalizado);
                    %>
                </span>
            </div>
            
            <div class="badge">
                🌟 Servidor processou esta página em tempo real
            </div>
        </div>
        
        <div class="server-info">
            <strong>ℹ️ Informações do Servidor:</strong><br/>
            <%
                String serverInfo = application.getServerInfo();
                String protocol = request.getProtocol();
                String remoteAddr = request.getRemoteAddr();
            %>
            Container: <%= serverInfo %><br/>
            Protocolo: <%= protocol %><br/>
            Seu IP: <%= remoteAddr %>
        </div>
        
        <footer>
            <p>Executado em: <%= new java.util.Date() %></p>
            <p>Powered by Java Server Pages & Apache Tomcat</p>
        </footer>
    </div>
</body>
</html>
```

---

## PASSO 3: Criar o arquivo web.xml (opcional, mas recomendado)

Crie a pasta `WEB-INF` (se ainda não existe) e dentro dela o arquivo `web.xml`.

**Arquivo: `SiteDataHora/WEB-INF/web.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee 
         https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
         version="6.0">
    
    <display-name>Site Data e Hora JSP</display-name>
    
    <description>
        Aplicação JSP simples que exibe Hello World com data e hora atual
    </description>
    
    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
    
    <session-config>
        <session-timeout>30</session-timeout>
    </session-config>
</web-app>
```

---

## PASSO 4: Hospedar no Tomcat (3 métodos)

### Método 1: Copiar a pasta inteira (mais simples)

1. **Copie toda a pasta `SiteDataHora`** para dentro da pasta `webapps` do Tomcat

   **Windows:**
   ```cmd
   xcopy /E SiteDataHora C:\apache-tomcat-10\webapps\SiteDataHora\
   ```
   
   **Linux/Mac:**
   ```bash
   cp -r SiteDataHora /opt/apache-tomcat-10/webapps/
   ```

2. **Inicie o Tomcat**

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

3. **Acesse no navegador:**
   ```
   http://localhost:8080/SiteDataHora/
   ```

### Método 2: Criar arquivo WAR (empacotado)

1. **Crie o arquivo WAR usando o comando jar**

   **Windows/Linux/Mac:**
   ```bash
   cd SiteDataHora
   jar -cvf SiteDataHora.war *
   ```

2. **Copie o WAR para o Tomcat**
   ```bash
   copy SiteDataHora.war C:\apache-tomcat-10\webapps\
   ```

3. **Inicie o Tomcat** (ele vai descompactar automaticamente)

4. **Acesse:**
   ```
   http://localhost:8080/SiteDataHora/
   ```

### Método 3: Usar contexto do Tomcat (sem copiar arquivos)

1. **Crie um arquivo de contexto**

   Crie o arquivo: `C:\apache-tomcat-10\conf\Catalina\localhost\SiteDataHora.xml`

   Conteúdo:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <Context path="/SiteDataHora" docBase="C:\caminho\completo\para\SiteDataHora" />
   ```

2. **Inicie o Tomcat**

3. **Acesse:**
   ```
   http://localhost:8080/SiteDataHora/
   ```

---

## PASSO 5: Versão ultra-simplificada (apenas para teste rápido)

Se você quer o mínimo possível para testar, crie este arquivo `index.jsp`:

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World JSP</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Data e hora atual: <%= new java.util.Date() %></p>
    <hr/>
    <p>Servidor: <%= application.getServerInfo() %></p>
</body>
</html>
```

E a estrutura mínima:
```
SiteDataHora/
└── index.jsp
```

(Nem precisa do WEB-INF para este exemplo simples!)

---

## 🔧 Scripts automáticos para facilitar

### Windows: Criar script `criar_projeto.bat`

```batch
@echo off
echo Criando projeto JSP...

mkdir SiteDataHora
cd SiteDataHora

(
echo ^<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"^%>
echo ^<!DOCTYPE html^>
echo ^<html^>
echo ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<title^>Hello World JSP^</title^>
echo ^</head^>
echo ^<body^>
echo     ^<h1^>Hello World!^</h1^>
echo     ^<p^>Data e hora: ^<%= new java.util.Date() %^>^</p^>
echo ^</body^>
echo ^</html^>
) > index.jsp

echo Projeto criado com sucesso!
echo Copie a pasta SiteDataHora para o Tomcat/webapps/
pause
```

### Linux/Mac: Criar script `criar_projeto.sh`

```bash
#!/bin/bash

mkdir -p SiteDataHora

cat > SiteDataHora/index.jsp << 'EOF'
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World JSP</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Data e hora: <%= new java.util.Date() %></p>
</body>
</html>
EOF

echo "Projeto criado em SiteDataHora/"
echo "Copie a pasta para o Tomcat/webapps/"
```

Dê permissão de execução:
```bash
chmod +x criar_projeto.sh
./criar_projeto.sh
```

---

## ✅ Verificando se o Tomcat está rodando

Antes de implantar seu projeto, verifique se o Tomcat está funcionando:

1. **Inicie o Tomcat**
2. **Acesse:**
   ```
   http://localhost:8080
   ```
3. Você deve ver a página padrão do Apache Tomcat

Se não funcionar:
- Verifique se a porta 8080 está livre
- Verifique se o Java está instalado (`java -version`)
- Veja os logs em: `apache-tomcat-10/logs/catalina.out`

---

## 📁 Estrutura final (após implantação)

Após copiar para o Tomcat, a estrutura fica:

```
apache-tomcat-10/
├── bin/                 (scripts de inicialização)
├── conf/                (configurações)
├── lib/                 (bibliotecas)
├── logs/                (arquivos de log)
├── webapps/             (suas aplicações AQUI!)
│   ├── SiteDataHora/    (SEU PROJETO)
│   │   ├── index.jsp
│   │   └── WEB-INF/
│   │       └── web.xml
│   ├── ROOT/            (página padrão)
│   └── examples/        (exemplos do Tomcat)
└── work/                (arquivos compilados)
```

---

## 🚀 Comandos rápidos para gerenciar o Tomcat

### Windows:
```cmd
# Iniciar
C:\apache-tomcat-10\bin\startup.bat

# Parar
C:\apache-tomcat-10\bin\shutdown.bat

# Ver processos Java
tasklist | findstr java
```

### Linux/Mac:
```bash
# Iniciar
/opt/apache-tomcat-10/bin/startup.sh

# Parar
/opt/apache-tomcat-10/bin/shutdown.sh

# Ver logs em tempo real
tail -f /opt/apache-tomcat-10/logs/catalina.out

# Matar processo Tomcat (se necessário)
ps aux | grep tomcat
kill -9 [PID]
```

---

## 🔍 Troubleshooting (sem IDE)

### Problema: "java não é reconhecido"

**Solução:** Adicione o Java ao PATH

**Windows:**
```cmd
setx PATH "%PATH%;C:\Program Files\Java\jdk-11\bin"
```

**Linux/Mac:**
```bash
export PATH=$PATH:/usr/lib/jvm/java-11/bin
```

### Problema: Porta 8080 em uso

**Solução:** Mude a porta do Tomcat

Edite `apache-tomcat-10/conf/server.xml`:

```xml
<Connector port="8081" protocol="HTTP/1.1" .../>
```

### Problema: A página não atualiza

**Solução:** Limpe o cache do Tomcat

```bash
# Delete a pasta work
rm -rf apache-tomcat-10/work/*
```

### Problema: Erro 500 - Classe não encontrada

**Causa:** Versão do Tomcat incompatível com o Java
- Tomcat 10 requer Java 11 ou superior
- Verifique no console do Tomcat os erros

---

## 📝 Resumo dos comandos (colinha)

```bash
# 1. Criar projeto
mkdir SiteDataHora
cd SiteDataHora

# 2. Criar arquivo JSP (usando echo ou editor)
echo "<%@ page language=""java""%><h1>Hello</h1>" > index.jsp

# 3. Copiar para Tomcat (Windows)
xcopy /E SiteDataHora C:\apache-tomcat-10\webapps\

# 4. Iniciar Tomcat (Windows)
C:\apache-tomcat-10\bin\startup.bat

# 5. Acessar
# Abra o navegador: http://localhost:8080/SiteDataHora/
```

---

## ✅ Checklist de verificação

- [ ] Java instalado (`java -version` funciona)
- [ ] Tomcat descompactado em uma pasta
- [ ] Tomcat inicia sem erros (`startup.bat` e acessar `localhost:8080`)
- [ ] Pasta `SiteDataHora` criada
- [ ] Arquivo `index.jsp` criado dentro da pasta
- [ ] Pasta copiada para `webapps`
- [ ] Navegador acessa `http://localhost:8080/SiteDataHora/`
- [ ] Data e hora aparecem corretamente
- [ ] Refresh atualiza a hora

---
