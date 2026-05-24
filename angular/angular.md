## 🧠 O que é Angular?

**Angular** é um framework desenvolvido pelo Google para criar **aplicações web modernas, dinâmicas e de página única (SPA)**.

### Diferente do que você já viu:

| Tecnologia | O que faz | Onde roda |
|------------|-----------|-----------|
| **JSP/JSF** | Gera HTML no servidor | Backend (Java) |
| **Angular** | Gera HTML no navegador | Frontend (JavaScript/TypeScript) |

**Ou seja:** Com Angular, o servidor só envia dados (JSON). O navegador monta a tela sozinho.

---

## 📦 Pré-requisitos (instale antes de começar)

### 1. Node.js (obrigatório)
O Angular precisa do Node.js para funcionar.

- Baixe em: https://nodejs.org/
- Escolha a versão **LTS** (Long Term Support)
- Instale normalmente (próximo, próximo, finalizar)

**Verifique se instalou:**
```bash
node --version   # Ex: v20.11.0
npm --version    # Ex: 10.2.4
```

### 2. Angular CLI (ferramenta de linha de comando)
O Angular CLI é o programa que cria projetos, gera componentes e sobe servidor.

```bash
npm install -g @angular/cli
```

**Verifique:**
```bash
ng version
```

---

## 🚀 Seu Primeiro Projeto Angular

### Passo 1: Criar o projeto

Abra o terminal (cmd, PowerShell, bash) e execute:

```bash
ng new meu-primeiro-angular
```

O Angular vai perguntar:

1. **Would you like to add Angular routing?** → Digite `y` (yes) e Enter
2. **Which stylesheet format?** → Escolha `CSS` (seta para baixo, Enter)

**Aguarde alguns minutos** enquanto o Angular baixa todas as dependências.

### Passo 2: Entrar na pasta do projeto

```bash
cd meu-primeiro-angular
```

### Passo 3: Rodar o servidor de desenvolvimento

```bash
ng serve
```

Você verá algo como:
```
✔ Compiled successfully.
✔ Browser application bundle generation complete.

Initial chunk files | Names         |  Raw size
vendor.js           | vendor        |   2.35 MB
polyfills.js        | polyfills     | 318.67 kB
styles.css          | styles        |  95.71 kB
main.js             | main          |  49.97 kB

✔ Application is running at http://localhost:4200
```

### Passo 4: Abrir no navegador

Acesse: **http://localhost:4200**

Você verá a página padrão do Angular!

---

## 🎨 Passo 2: Criar seu Hello World personalizado

Agora vamos modificar o projeto para mostrar "Hello World" com data e hora.

### Entendendo a estrutura do projeto:

```
meu-primeiro-angular/
├── src/
│   ├── app/              ← Seu código principal fica aqui
│   │   ├── app.component.ts     ← Componente principal
│   │   ├── app.component.html   ← Template (HTML)
│   │   ├── app.component.css    ← Estilos
│   │   └── app.component.spec.ts ← Testes
│   ├── index.html        ← Página principal (não mexa ainda)
│   └── styles.css        ← Estilos globais
├── angular.json          ← Configurações do projeto
└── package.json          ← Dependências
```

### Abra o arquivo `src/app/app.component.ts`

Substitua todo o conteúdo por:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propriedades (variáveis que vão para o HTML)
  titulo = 'Hello World Angular!';
  nome = '';
  mensagem = '';
  dataHora = new Date();

  // Método chamado quando o botão for clicado
  dizerOla() {
    if (this.nome.trim()) {
      this.mensagem = `Olá, ${this.nome}! Seja bem-vindo ao Angular!`;
    } else {
      this.mensagem = 'Por favor, digite seu nome!';
    }
    // Atualiza a data/hora no momento do clique
    this.dataHora = new Date();
  }

  // Método para atualizar a data/hora a cada segundo
  atualizarRelogio() {
    setInterval(() => {
      this.dataHora = new Date();
    }, 1000);
  }

  // Método executado quando o componente é criado
  ngOnInit() {
    this.atualizarRelogio();
  }
}
```

### Abra o arquivo `src/app/app.component.html`

Substitua todo o conteúdo por:

```html
<div class="container">
  <h1>{{ titulo }}</h1>

  <div class="relogio">
    <div class="data">
      📅 {{ dataHora | date:'dd/MM/yyyy' }}
    </div>
    <div class="hora">
      ⏰ {{ dataHora | date:'HH:mm:ss' }}
    </div>
    <div class="dia">
      📆 {{ dataHora | date:'EEEE' | titlecase }}
    </div>
  </div>

  <div class="formulario">
    <input 
      type="text" 
      [(ngModel)]="nome" 
      placeholder="Digite seu nome"
      (keyup.enter)="dizerOla()"
    >
    <button (click)="dizerOla()">Enviar</button>
  </div>

  <div class="mensagem" *ngIf="mensagem">
    💬 {{ mensagem }}
  </div>

  <footer>
    Servidor: Angular {{ mensagem }}
  </footer>
</div>
```

### Abra o arquivo `src/app/app.component.css`

Adicione os estilos:

```css
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  text-align: center;
  color: white;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: white;
}

.relogio {
  background: rgba(255,255,255,0.2);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
}

.data, .hora, .dia {
  font-size: 1.2em;
  margin: 10px 0;
}

.hora {
  font-size: 1.8em;
  font-weight: bold;
  font-family: 'Courier New', monospace;
}

.formulario {
  margin: 20px 0;
}

input {
  padding: 12px;
  width: 70%;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  margin-right: 10px;
}

button {
  padding: 12px 24px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
}

.mensagem {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255,255,255,0.2);
  border-radius: 10px;
  font-size: 1.1em;
}

footer {
  margin-top: 30px;
  font-size: 0.8em;
  opacity: 0.8;
}
```

### Abra o arquivo `src/app/app.module.ts`

Você precisa importar o `FormsModule` para usar o `[(ngModel)]`. Atualize o arquivo:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // ← ADICIONE ESTA LINHA

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // ← ADICIONE ESTA LINHA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

## ▶️ Passo 3: Testar sua aplicação

Se o servidor ainda estiver rodando (de quando você fez `ng serve`), ele vai detectar as mudanças automaticamente e recarregar a página.

Se parou, execute novamente:

```bash
ng serve
```

Acesse: **http://localhost:4200**

---

## 🎯 O que você vai ver:

- ✅ Título "Hello World Angular!"
- ✅ Relógio digital atualizando a cada segundo
- ✅ Data formatada (dd/MM/yyyy)
- ✅ Hora com segundos
- ✅ Um campo para digitar seu nome
- ✅ Botão que exibe mensagem personalizada

---

## 📚 Explicação do código (o que cada coisa faz)

### TypeScript (`app.component.ts`)

```typescript
export class AppComponent {
  titulo = 'Hello World Angular!';  // ← Variável pública
  nome = '';                        // ← Ligada ao input
  mensagem = '';                    // ← Exibida na tela
  dataHora = new Date();            // ← Data/hora atual
```

### HTML com Angular (`app.component.html`)

| Sintaxe | O que faz |
|---------|-----------|
| `{{ titulo }}` | Exibe o valor da variável `titulo` |
| `[(ngModel)]="nome"` | Liga o input à variável `nome` (two-way binding) |
| `(click)="dizerOla()"` | Executa o método quando clicar |
| `*ngIf="mensagem"` | Só mostra se `mensagem` não estiver vazia |
| `{{ dataHora \| date:'dd/MM/yyyy' }}` | Filtro para formatar data |

### Datas e pipes

O Angular tem **pipes** (filtros) para formatar dados:

```html
{{ dataHora | date:'dd/MM/yyyy' }}   <!-- 25/05/2026 -->
{{ dataHora | date:'HH:mm:ss' }}     <!-- 14:30:25 -->
{{ dataHora | date:'EEEE' }}         <!-- segunda-feira -->
{{ dataHora | date:'fullDate' }}     <!-- Monday, May 25, 2026 -->
```

---

## 🔧 Comandos úteis do Angular CLI

```bash
# Criar novo projeto
ng new nome-do-projeto

# Rodar servidor de desenvolvimento
ng serve
# ou com porta específica
ng serve --port 3000

# Criar um novo componente
ng generate component nome-componente
# ou versão abreviada
ng g c nome-componente

# Criar um serviço
ng generate service nome-servico

# Build para produção (gera arquivos otimizados)
ng build --prod

# Executar testes
ng test

# Atualizar Angular
ng update @angular/cli @angular/core
```

---

## 📁 Estrutura de um componente Angular

Todo componente tem 4 arquivos (você pode gerar com `ng g c nome`):

```
meu-componente/
├── meu-componente.component.ts     ← Lógica (TypeScript)
├── meu-componente.component.html   ← Template (HTML)
├── meu-componente.component.css    ← Estilos
└── meu-componente.component.spec.ts ← Testes
```

**Exemplo mínimo de componente:**

```typescript
// meu-componente.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente',  // Nome da tag HTML
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent {
  mensagem = 'Olá do meu componente!';
}
```

```html
<!-- meu-componente.component.html -->
<h2>{{ mensagem }}</h2>
```

Para usar em outro lugar:
```html
<app-meu-componente></app-meu-componente>
```

---

## 🎨 Versão ultra-simplificada (apenas Hello World)

Se você quer o mínimo para testar e entender, faça isso:

1. Crie projeto: `ng new hello-minimo`
2. Entre na pasta: `cd hello-minimo`
3. Substitua `src/app/app.component.html` por:

```html
<h1>Hello World!</h1>
<p>Data e hora: {{ dataHora | date:'dd/MM/yyyy HH:mm:ss' }}</p>
<button (click)="atualizar()">Atualizar</button>
```

4. Substitua `src/app/app.component.ts` por:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataHora = new Date();

  atualizar() {
    this.dataHora = new Date();
  }
}
```

5. Rode: `ng serve`

---

## 🌐 Como hospedar em produção (não apenas desenvolvimento)

### 1. Gerar os arquivos estáticos

```bash
ng build --prod
```

Isso cria a pasta `dist/meu-primeiro-angular/` com arquivos HTML, CSS e JS.

### 2. Hospedar em qualquer servidor web

**Opção A: Servir com Node.js (http-server)**
```bash
npm install -g http-server
cd dist/meu-primeiro-angular
http-server -p 8080
```

**Opção B: Copiar para Tomcat/Nginx/Apache**
- Copie o conteúdo da pasta `dist` para o servidor web
- Qualquer servidor HTTP consegue servir Angular

**Opção C: Usar GitHub Pages**
```bash
ng build --prod --base-href "https://seu-usuario.github.io/seu-repositorio/"
npx angular-cli-ghpages --dir=dist/meu-primeiro-angular
```

---

## ✅ Checklist de verificação

- [ ] Node.js instalado (`node --version`)
- [ ] Angular CLI instalado (`ng version`)
- [ ] Projeto criado (`ng new meu-app`)
- [ ] Servidor rodando (`ng serve`)
- [ ] Acessou `http://localhost:4200`
- [ ] Modificou o HTML e viu as mudanças ao vivo
- [ ] O relógio atualiza sozinho a cada segundo
- [ ] O botão mostra a mensagem personalizada

---

## 📚 Próximos passos depois do Hello World

1. **Componentes** (criar e reutilizar)
2. **Data binding** (interpolação, property binding, event binding)
3. **Diretivas** (`*ngIf`, `*ngFor`, `ngClass`, `ngStyle`)
4. **Serviços** (compartilhar dados entre componentes)
5. **Injeção de dependência**
6. **Rotas** (múltiplas páginas)
7. **Requisições HTTP** (consumir APIs)
8. **Formulários reativos** (formulários complexos)
9. **RxJS** (programação reativa)
10. **Pipes personalizados**

---

## 🔍 Diferenças importantes que você precisa saber

| Conceito | O que significa |
|----------|-----------------|
| **Componente** | Parte da tela (cabeçalho, lista, botão) |
| **Módulo** | Agrupa componentes relacionados |
| **Serviço** | Compartilha dados/funções entre componentes |
| **Template** | HTML do componente |
| **Diretiva** | Modifica o comportamento do HTML |
| **Pipe** | Formata dados (datas, números, textos) |
| **Router** | Gerencia navegação entre páginas |

---

## 💡 Dicas para iniciantes

1. **Sempre use `ng serve`** para desenvolvimento — ele recarrega automaticamente
2. **TypeScript é obrigatório** — mas é parecido com Java (tipos, classes)
3. **Aprenda a ler erros no console do navegador** (F12 → Console)
4. **Use `console.log()`** para debuggar
5. **A documentação oficial é excelente**: https://angular.io/docs

---

## 🚨 Problemas comuns e soluções

### Erro: "ng não é reconhecido"
**Solução:** Instale o Angular CLI globalmente
```bash
npm install -g @angular/cli
```

### Erro: "Porta 4200 já em uso"
**Solução:** Use outra porta
```bash
ng serve --port 4201
```

### As mudanças não aparecem no navegador
**Solução:** Recarregue com Ctrl+F5 (limpa cache)

### Erro sobre "FormsModule"
**Solução:** Certifique-se de importar `FormsModule` no `app.module.ts`

---
