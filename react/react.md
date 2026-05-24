React é uma **biblioteca JavaScript para criar interfaces de usuário**. Antes de mergulhar, é bom já saber:

- **HTML básico** (o que são tags, atributos)
- **CSS básico** (como estilizar)
- **JavaScript moderno** (variáveis, funções, arrays, objetos, `map`, `filter`, arrow functions, desestruturação, import/export)

Se você não domina JavaScript ainda, recomendo dar uma estudada primeiro. Mas vamos seguir com o essencial.

---

## 1. O que é React?

React foi criado pelo Facebook (hoje Meta) e é usado para construir **aplicações de página única (SPA)** e interfaces interativas.

Principais ideias do React:

- **Componentes**: você divide a UI em pedaços independentes e reutilizáveis.
- **JSX**: uma sintaxe que parece HTML, mas é JavaScript puro.
- **Estado (state)**: dados que podem mudar ao longo do tempo e fazem a tela atualizar automaticamente.
- **Props**: informações que um componente pai passa para um componente filho.
- **Virtual DOM**: React atualiza só o que precisa mudar na tela, de forma eficiente.

---

## 2. Configurando o ambiente

A maneira mais simples de começar é com o **Vite** (mais rápido e moderno que o antigo `create-react-app`).

```bash
npm create vite@latest meu-app -- --template react
cd meu-app
npm install
npm run dev
```

Acesse `http://localhost:5173` e você verá seu projeto rodando.

Estrutura principal:

```
meu-app/
  src/
    App.jsx       # Componente principal
    main.jsx      # Ponto de entrada
  index.html
```

---

## 3. Seu primeiro componente

Em React, componentes são funções que retornam JSX.

**App.jsx** (exemplo simples):

```jsx
function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
      <p>Meu primeiro componente.</p>
    </div>
  );
}

export default App;
```

**JSX** parece HTML, mas:
- Use `className` em vez de `class`
- Use `htmlFor` em vez de `for` (em labels)
- Todo elemento precisa ser fechado: `<img />`, `<input />`, etc.
- Só pode retornar **um elemento pai** (use `<div>` ou `<> </>` – chamado Fragment)

---

## 4. Renderizando variáveis e lógica

Dentro do JSX, você pode usar **{}** para colocar expressões JavaScript:

```jsx
function App() {
  const nome = "João";
  const idade = 25;
  const isLogado = true;

  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p>Você tem {idade} anos.</p>
      <p>Status: {isLogado ? "Logado" : "Deslogado"}</p>
    </div>
  );
}
```

---

## 5. Props (propriedades)

Props são como argumentos que você passa para um componente.

**Componente filho (Saudacao.jsx):**

```jsx
function Saudacao({ nome, sobrenome }) {
  return <h1>Olá, {nome} {sobrenome}!</h1>;
}

export default Saudacao;
```

**Componente pai (App.jsx):**

```jsx
import Saudacao from './Saudacao';

function App() {
  return (
    <div>
      <Saudacao nome="Maria" sobrenome="Silva" />
      <Saudacao nome="José" sobrenome="Santos" />
    </div>
  );
}
```

---

## 6. Estado (useState)

Estado é a memória do componente. Quando o estado muda, o componente re-renderiza.

```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0); // valor inicial 0

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
```

**Regras do useState:**
- Use dentro do componente
- Nunca use condicionalmente (sempre na mesma ordem)
- `setContador` atualiza e dispara re-renderização

---

## 7. Renderizando listas (use map)

```jsx
function ListaTarefas() {
  const tarefas = ["Estudar React", "Praticar JS", "Fazer projeto"];

  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
}
```

**Importante:** sempre use `key` com um valor único (evite usar índice se a lista for dinâmica).

---

## 8. Eventos

Eventos no React são escritos em camelCase: `onClick`, `onChange`, `onSubmit`

```jsx
function Formulario() {
  const [nome, setNome] = useState('');

  function handleChange(event) {
    setNome(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Enviado: ${nome}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

---

## 9. Efeitos colaterais (useEffect)

`useEffect` executa código quando o componente monta ou quando certas variáveis mudam.

```jsx
import { useState, useEffect } from 'react';

function Exemplo() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Executa uma vez quando o componente montar
    fetch('https://api.exemplo.com/dados')
      .then(res => res.json())
      .then(data => setDados(data));
  }, []); // Array vazio = executa só na montagem

  return <div>{dados.map(d => <p key={d.id}>{d.nome}</p>)}</div>;
}
```

---

## 10. Próximos passos (o que estudar depois)

Depois desses fundamentos, estude:

- **Comunicação entre componentes** (lifting state up)
- **React Router** (para múltiplas páginas/rotas)
- **Context API** (para estado global simples)
- **useReducer** (para estados mais complexos)
- **useRef** (para referências a elementos DOM)
- **Styled Components ou CSS Modules** (estilização)
- **React Hook Form** (formulários avançados)
- **TanStack Query (React Query)** (gerenciamento de dados assíncronos)
- **Zustand ou Redux** (estado global avançado)

---

## 🛠️ Projetos práticos (faça na sequência)

1. **To-do list** (useState, eventos, listas)
2. **Cronômetro** (useState, useEffect com setInterval)
3. **Buscador de CEP** (fetch, useEffect)
4. **Galeria de fotos** (props, renderização condicional)
5. **Blog simples com rotas** (React Router)

---

## 📚 Onde estudar mais

- **Documentação oficial do React** (ótima e atualizada)
- **React beta docs** (react.dev)
- **Curso gratuito "The Road to React"** (texto)
- **Canais no YouTube**: Matheus Battisti, Felipe Rocha (Dicas para Devs), Rocketseat

---
