# Tutorial de Java Struts para Iniciantes

## O que é Java Struts?

Java Struts é um framework open-source para desenvolvimento de aplicações web em Java que implementa o padrão de arquitetura **MVC (Model-View-Controller)**. Foi criado pela Apache Software Foundation e é amplamente utilizado em projetos corporativos, especialmente em sistemas legados que ainda estão em manutenção e evolução.

---

## Por que usar o Struts?

O Struts surgiu para resolver um problema comum no desenvolvimento web Java: a mistura de código Java com HTML nas páginas JSP. Antes do Struts, era comum ver scripts Java embutidos nas páginas, o que dificultava a manutenção e os testes.

**Principais benefícios do Struts:**

- **Separação clara de responsabilidades:** O framework força a separação entre a lógica de negócio (Model), a apresentação (View) e o controle de fluxo (Controller)
- **Configuração declarativa:** O fluxo da aplicação é definido em arquivos XML, facilitando alterações sem recompilar o código
- **Validação integrada:** Oferece mecanismos para validar dados de formulários de forma declarativa
- **Internacionalização:** Suporte nativo para múltiplos idiomas
- **Reutilização de código:** As Actions podem ser reutilizadas em diferentes partes da aplicação

---

## Entendendo a Arquitetura MVC no Struts

### Model (Modelo)

O Model representa os dados e a lógica de negócio da aplicação. No Struts, o Model é composto por:

- **JavaBeans:** Classes simples com atributos privados e métodos getters/setters que representam os dados
- **Classes de serviço:** Contêm a lógica de negócio (validações complexas, cálculos, regras de negócio)
- **DAO (Data Access Objects):** Classes responsáveis pela comunicação com o banco de dados
- **Objetos de transferência:** DTOs (Data Transfer Objects) que transportam dados entre camadas

**Características importantes do Model:**
- É completamente independente do Struts - você pode testar essas classes sem o framework
- Não deve conter nenhuma lógica de apresentação ou navegação
- Deve ser reutilizável em diferentes contextos

### View (Visão)

A View é a camada de apresentação, ou seja, o que o usuário vê. No Struts, as Views são implementadas como:

- **JSP (JavaServer Pages):** Páginas HTML com tags especiais do Struts
- **Tags Struts:** Biblioteca de tags que facilitam a exibição de dados e a criação de formulários
- **Arquivos de propriedades:** Para internacionalização (mensagens em diferentes idiomas)

**Observações técnicas sobre a View:**
- As páginas JSP não devem conter lógica de negócio - apenas exibição de dados
- As tags do Struts (prefixo `s:`) são processadas no servidor antes de enviar HTML ao cliente
- As tags possibilitam a renderização condicional, loops e formatação de dados

### Controller (Controlador)

O Controller gerencia o fluxo da aplicação. No Struts, o Controller é composto por:

- **Filtro Principal:** O `StrutsPrepareAndExecuteFilter` intercepta todas as requisições HTTP
- **Action Classes:** São os controladores específicos que processam cada ação do usuário
- **Result Types:** Definem como a resposta será entregue (JSP, redirect, JSON, etc.)
- **Interceptors:** São filtros que executam ações antes e depois da Action (validação, log, segurança)

**Detalhes técnicos do Controller:**
- O filtro principal é configurado no `web.xml` e mapeado para interceptar todas as URLs
- Cada Action é uma classe que estende `ActionSupport` (ou implementa a interface `Action`)
- O método `execute()` é o ponto de entrada padrão, mas você pode definir outros métodos
- A Action retorna uma String que indica o resultado (ex: "success", "error", "input")

---

## Componentes Fundamentais do Struts 2

### 1. Action Context

O Action Context é um contêiner que armazena todos os dados da requisição atual. Ele permite que diferentes componentes da aplicação compartilhem informações:

- **Value Stack:** Pilha onde os objetos (Actions, Models) são armazenados, permitindo acesso fácil aos seus atributos
- **Parâmetros da requisição:** Dados enviados pelo formulário ou via URL
- **Sessão e aplicação:** Dados persistentes entre requisições ou para toda a aplicação
- **Request e Response:** Objetos HTTP originais, quando necessário

**Tecnicamente falando:** O Struts usa o padrão ThreadLocal para garantir que cada requisição tenha seu próprio contexto, tornando a aplicação thread-safe.

### 2. Interceptors (Interceptadores)

Os interceptadores são uma das características mais poderosas do Struts 2. Eles funcionam como "filtros" que executam código antes e depois da Action:

**Exemplos de interceptadores padrão:**
- **params:** Injeta parâmetros da requisição nos atributos da Action
- **validation:** Executa validações definidas em XML ou anotações
- **workflow:** Gerencia o fluxo de validação (redireciona para página de erro se falhar)
- **i18n:** Suporte a internacionalização
- **fileUpload:** Processa upload de arquivos

**Funcionamento técnico:** Os interceptadores são executados em uma cadeia (chain). A ordem de execução é definida na configuração e pode ser personalizada. Cada interceptador pode:
- Executar código antes da Action
- Chamar o próximo interceptador ou a Action
- Executar código depois da Action
- Interromper a cadeia (redirecionar para outra página)

### 3. Configuration (Configuração)

O Struts utiliza arquivos XML para configuração declarativa. O principal é o `struts.xml`, que define:

**Package (Pacote):** Agrupa Actions relacionadas. Pode herdar configurações de outros packages.
- `namespace`: Organiza URLs em grupos (ex: `/admin/*` para ações administrativas)
- `extends`: Herda interceptadores e configurações de outro package (geralmente `struts-default`)

**Action:** Mapeia uma URL para uma classe Java.
- `name`: Nome da ação (parte da URL)
- `class`: Classe Java que implementa a Action
- `method`: Método a ser executado (padrão é `execute`)

**Result:** Mapeia o retorno da Action para uma View.
- `name`: Nome do resultado (ex: "success", "error")
- `type`: Como entregar o resultado (dispatcher, redirect, chain, etc.)
- O conteúdo é o caminho da página ou URL

### 4. Value Stack e OGNL

OGNL (Object-Graph Navigation Language) é a linguagem de expressão usada pelo Struts 2 para navegar em objetos e acessar propriedades.

**Conceitos importantes:**
- **Value Stack:** Uma pilha onde os objetos são empilhados na ordem: Action, Model, objetos temporários
- **Acesso a propriedades:** Usando notação ponto (ex: `usuario.nome`, `lista[0].descricao`)
- **Métodos:** É possível chamar métodos da Action (ex: `metodoQueCalculaAlgo()`)
- **Coleções:** Suporte a iteração, filtro e projeção em coleções

**Observações técnicas:**
- O Struts procura propriedades na Value Stack em ordem (de cima para baixo)
- Isso significa que se você tiver uma propriedade com o mesmo nome em diferentes objetos, a do topo será usada
- O OGNL permite expressões complexas nas tags JSP, mas é recomendado manter a lógica na Action

---

## Fluxo de Execução Completo

### 1. Inicialização da Aplicação

Quando o servidor (Tomcat, Jetty) inicia a aplicação web:

1. **Carregamento do web.xml:** O servidor lê o arquivo `web.xml` e identifica o filtro do Struts (`StrutsPrepareAndExecuteFilter`)
2. **Inicialização do Filtro:** O filtro é instanciado e seu método `init()` é executado
3. **Carregamento da Configuração:** O filtro carrega o `struts.xml` e outros arquivos de configuração
4. **Construção do Bean Container:** O Struts cria um contêiner de dependências (como um mini-Spring) para gerenciar as Actions e outros componentes
5. **Configuração dos Interceptors:** A cadeia de interceptadores padrão é montada

### 2. Ciclo de uma Requisição HTTP

Quando um usuário faz uma requisição (ex: clica em um link ou envia um formulário):

1. **Interceptação:** O filtro `StrutsPrepareAndExecuteFilter` captura a requisição HTTP

2. **Determinação da Action:** O filtro analisa a URL e consulta o `struts.xml` para encontrar qual Action deve processar a requisição

3. **Criação da Action:** O Struts instancia a classe Action correspondente (usando o contêiner de dependências)

4. **Preparação:** A cadeia de interceptadores é executada (em ordem):
   - **Antes da Action:** Parâmetros são injetados, validação é executada, arquivos são processados
   - **Se interrompido:** Se algum interceptador retornar um resultado (ex: validação falhou), o fluxo vai diretamente para o Result
   - **Execução:** O método da Action é chamado (ex: `execute()`)

5. **Processamento da Action:** A Action executa sua lógica de negócio, interage com o Model, e retorna uma String (ex: "success")

6. **Pós-processamento:** Os interceptadores executam sua parte "depois" da Action

7. **Determinação do Result:** O Struts consulta o `struts.xml` para encontrar qual Result corresponde à String retornada

8. **Renderização:** O Result (geralmente uma JSP) é processado, gerando HTML
   - As tags Struts são avaliadas usando a Value Stack
   - O HTML final é enviado ao navegador do usuário

9. **Finalização:** O filtro libera a requisição e o contexto é limpo

### 3. O Papel do ActionSupport

Todas as Actions geralmente estendem `ActionSupport`, que fornece:

- **Constantes de Resultado:** `SUCCESS`, `ERROR`, `INPUT`, `LOGIN`, `NONE`
- **Validação:** Método `validate()` que é executado automaticamente antes da Action
- **Internacionalização:** Métodos para acessar mensagens localizadas
- **Gerenciamento de Erros:** Adição de mensagens de erro e campo

**Padrão comum de uso:**
```java
// Na Action
public String execute() {
    try {
        // Faz algo
        return SUCCESS;
    } catch (Exception e) {
        addActionError("Erro ao processar: " + e.getMessage());
        return ERROR;
    }
}
```

---

## Estratégias de Navegação e Resultados

### Tipos de Result

O Struts oferece vários tipos de resultados para diferentes necessidades:

1. **dispatcher (padrão):** Encaminha para uma JSP (forward interno). É a opção mais comum.

2. **redirect:** Redireciona para outra URL. Cria uma nova requisição, perdendo o contexto atual.

3. **redirectAction:** Redireciona para outra Action. Útil para evitar reenvio de formulário.

4. **chain:** Encadeia para outra Action, mantendo o contexto. Menos comum e pode causar problemas de performance.

5. **stream:** Envia um stream binário (ex: download de arquivo, geração de PDF).

6. **json:** Retorna dados em formato JSON (útil para APIs REST).

7. **freemarker/velocity:** Usa outros motores de template.

### Gerenciamento de Sessão

O Struts oferece várias formas de acessar a sessão HTTP:

1. **SessionAware Interface:** A Action implementa a interface e recebe um Map da sessão
2. **ActionContext:** Acesso direto através de `ActionContext.getContext().getSession()`
3. **ServletActionContext:** Para acesso aos objetos Servlet originais

**Boa prática:** Evite armazenar objetos grandes na sessão. Use a sessão apenas para dados de autenticação e preferências do usuário.

---

## Estratégias de Validação

### Validação de Dados

O Struts oferece dois mecanismos principais para validação:

1. **Validação Programática:** Sobrescrever o método `validate()` na Action
   ```java
   @Override
   public void validate() {
       if (nome == null || nome.trim().isEmpty()) {
           addFieldError("nome", "Nome é obrigatório");
       }
   }
   ```

2. **Validação Declarativa:** Usar arquivos XML (ex: `ActionName-validation.xml`) ou anotações (ex: `@RequiredStringValidator`)

**Funcionamento:**
- A validação é executada automaticamente pelos interceptadores
- Erros de validação são armazenados no Action Context
- A presença de erros faz o fluxo retornar para o Result chamado "input"
- As tags JSP podem exibir os erros automaticamente

### Mensagens de Erro e Internacionalização

**Arquivos de Propriedades:**
- `MessageResources.properties`: Mensagens padrão
- `MessageResources_pt_BR.properties`: Mensagens em português
- `MessageResources_en_US.properties`: Mensagens em inglês

**Uso nas Actions:**
```java
addActionError(getText("error.generic"));
addFieldError("campo", getText("error.campo.obrigatorio"));
```

**Uso nas JSP:**
```jsp
<s:actionerror />
<s:fielderror fieldName="nome" />
<s:text name="mensagem.sucesso" />
```

---

## Considerações de Performance

### O que afeta a performance no Struts?

1. **Criação de Actions:** Cada requisição cria uma nova instância da Action (padrão). Isso é seguro, mas pode ser custoso. Use **Singleton** com cuidado (apenas para Actions sem estado).

2. **Value Stack:** O acesso repetido à Value Stack em loops pode ser lento. Pré-calcule valores na Action.

3. **Interceptadores:** Cadeias longas de interceptadores adicionam overhead. Use apenas os necessários.

4. **Tags JSP:** Tags complexas (ex: `<s:iterator>` com aninhamento) podem ser lentas. Considere pré-processar dados.

### Boas Práticas

1. **Use o modo de desenvolvimento com cautela:** `struts.devMode=true` é ótimo para desenvolvimento, mas NUNCA em produção (causa recarregamento constante de configurações).

2. **Configure um pool de conexões:** Para acesso a banco de dados.

3. **Considere cache:** Armazene dados que mudam pouco em cache (ex: usando EhCache).

4. **Evite objetos grandes na sessão:** Prefira armazenar identificadores e buscar dados novamente quando necessário.

5. **Use o padrão Command para operações complexas:** Deixe a Action apenas orquestrar, não executar lógica pesada.

6. **Profiling:** Monitore o tempo de execução das Actions e identifique gargalos.

---

## Estrutura de Diretórios e Organização

### Projeto Maven Padrão

```
src/main/java/          # Código Java
├── com/exemplo/action/ # Classes Action
├── com/exemplo/model/  # JavaBeans, DTOs
├── com/exemplo/service/# Lógica de negócio
├── com/exemplo/dao/    # Acesso a dados
└── com/exemplo/util/   # Classes utilitárias

src/main/resources/     # Arquivos de configuração
├── struts.xml          # Configuração principal
├── struts-*.xml        # Configurações específicas
├── *.properties        # Internacionalização
└── validation.xml      # Validações declarativas

src/main/webapp/        # Artefatos web
├── WEB-INF/            # Seguro (não acessível diretamente)
│   ├── web.xml         # Configuração do servlet
│   └── lib/            # Dependências (se não usar Maven)
├── css/                # Arquivos CSS
├── js/                 # JavaScript
├── images/             # Imagens
└── WEB-INF/content/    # JSPs (protegidas)
```

### Organização de Packages

**Recomendação:** Organize por módulos/funcionalidades, não por camadas técnicas.

```
com.exemplo.app.gerenciamento.usuarios
com.exemplo.app.gerenciamento.produtos
com.exemplo.app.relatorios
```

**Justificativa:** Facilita a manutenção e o entendimento do que cada parte do sistema faz. Você pode ter múltiplas Actions, Models e JSPs relacionadas no mesmo package.

---

## Logging e Debugging

### Configuração de Log

Use Log4j ou SLF4J para logging:

```xml
<!-- log4j2.xml -->
<Configuration>
    <Appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
        </Console>
    </Appenders>
    <Loggers>
        <Logger name="com.opensymphony.xwork2" level="DEBUG"/>
        <Root level="INFO">
            <AppenderRef ref="Console"/>
        </Root>
    </Loggers>
</Configuration>
```

### Dicas de Debug

1. **Habilite o modo de desenvolvimento:** `struts.devMode=true` no `struts.xml`

2. **Use logs da Action:** Adicione `logger.debug()` nos pontos-chave

3. **Inspecione a Value Stack:** Adicione a tag `<s:debug />` em páginas de teste para ver o conteúdo da pilha

4. **Use o ferramentas do navegador:** Console do desenvolvedor para verificar requisições e respostas

5. **Configure logs detalhados do Struts:** Para problemas de configuração

---

## Considerações de Segurança

### XSS (Cross-Site Scripting)

Por padrão, o Struts escapa automaticamente o HTML nas saídas:

- **safe:** `<s:property value="dados" escape="true"/>` (padrão)
- **perigoso:** `<s:property value="dados" escape="false"/>` (NUNCA use com dados do usuário)

### CSRF (Cross-Site Request Forgery)

Use tokens para evitar CSRF:

```jsp
<s:token />
```
O interceptador `token` valida automaticamente.

### Injeção SQL

- NUNCA concatene strings para construir SQL
- Use PreparedStatement ou frameworks como Hibernate/MyBatis

### Validação de Dados

- Valide TUDO que vem do cliente, mesmo com validação no frontend
- Use tanto validação declarativa quanto programática

---

## Testes no Struts

### Testando Actions

Use o Struts 2 JUnit Plugin ou o próprio JUnit com o `StrutsTestCase`:

```java
public class HelloWorldActionTest {
    @Test
    public void testExecute() throws Exception {
        HelloWorldAction action = new HelloWorldAction();
        String result = action.execute();
        assertEquals("success", result);
        assertNotNull(action.getMessageStore());
        assertTrue(action.getMessageStore().getMessage().contains("Hello"));
    }
}
```

### Testes de Integração

Use frameworks como Selenium para testar a interface completa.

### Mocking

O Struts funciona bem com Mockito para simular dependências nas Actions.

---

## Migração e Compatibilidade

### Struts 1 vs Struts 2

São frameworks diferentes, com filosofia distinta. Principais diferenças:

**Struts 1 (legado):**
- Actions são singletons (uma instância para toda aplicação)
- Thread-safe e complexo
- Configuração em XML de forma extensa
- Baseado em ActionForms

**Struts 2 (moderno):**
- Actions são instanciadas por requisição (thread-safe)
- Mais simples e desacoplado
- Configuração flexível (XML, anotações, convenções)
- Integração com outras tecnologias (Spring, Hibernate)

### Migração de Aplicações Legado

Se você está mantendo uma aplicação Struts 1:
1. Considere uma migração gradual para Struts 2 (é trabalhoso)
2. Ou mantenha como está e apenas faça manutenções necessárias
3. Avalie migrar para Spring MVC como alternativa moderna

---

## Considerações Finais

### Quando usar Struts?

**Vantagens do Struts:**
- Excelente para aplicações corporativas com muitos formulários
- Curva de aprendizado razoável para quem já conhece Java EE
- Documentação extensa e comunidade ativa
- Bom para sistemas legados que precisam de manutenção

**Desvantagens:**
- Considerado "antigo" comparado a frameworks modernos como Spring MVC
- Menos adequado para APIs REST (embora possível com plugins)
- Configuração XML pode ser verbosa
- Menos integração com frontend moderno (React, Vue, etc.)

### Alternativas Modernas

Para novos projetos, considere:

- **Spring MVC/Spring Boot:** Mais flexível, integração com ecossistema Spring
- **JSF (JavaServer Faces):** Framework oficial Java, component-based
- **Vaadin:** Framework Java para UI moderna com foco em produtividade
- **Micronaut:** Framework moderno para microserviços

### Boas Práticas Recomendadas

1. **Mantenha Actions enxutas:** Delegate lógica complexa para serviços

2. **Use injeção de dependências:** Integre com Spring ou use o próprio contêiner do Struts

3. **Padronize naming conventions:** Facilita a manutenção e o entendimento

4. **Documente:** Especialmente a configuração do `struts.xml` e fluxos complexos

5. **Versionamento de configuração:** Mantenha o `struts.xml` em VCS e faça revisões

6. **Monitore performance:** Em produção, use ferramentas como JProfiler ou VisualVM

7. **Atualize o framework:** Mantenha-se atualizado com patches de segurança

---

Este tutorial cobre os fundamentos do Struts 2 para iniciantes, com ênfase nos aspectos técnicos e arquiteturais. A prática e a experimentação são essenciais para consolidar o aprendizado. Recomenda-se iniciar com projetos pequenos e gradualmente incorporar recursos mais avançados conforme a familiaridade com o framework aumenta.
