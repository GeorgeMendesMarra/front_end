# Projeto: implementação de CDN em um site genérico

## 1. Visão geral

**Objetivo:** reduzir a latência, aumentar a disponibilidade e proteger o site, entregando o conteúdo a partir de servidores próximos ao usuário.

**Metas mensuráveis** (ajuste aos números do seu site):

| Indicador | Como medir | Meta sugerida |
|---|---|---|
| TTFB de estáticos | WebPageTest, `curl` | Redução de 40% ou mais |
| LCP (Core Web Vitals) | PageSpeed Insights, Search Console | Abaixo de 2,5 s |
| Cache hit ratio | Painel da CDN | Acima de 85% nos estáticos |
| Tráfego servido pela origem | Logs da origem | Redução de 50% ou mais |
| Disponibilidade | Monitor externo | Mínimo de 99,9% |
| Erros 5xx | Painel da CDN e logs | Sem aumento após a migração |

**Fora do escopo:** reescrita da aplicação, migração de hospedagem e mudanças de design.

## 2. Papéis e responsabilidades

| Papel | Responsabilidade |
|---|---|
| **Dono do projeto** | Aprova escopo, orçamento e data de virada |
| **Responsável técnico (infra/DevOps)** | DNS, TLS, configuração da CDN e firewall da origem |
| **Desenvolvedor** | Cabeçalhos de cache, URLs de assets e versionamento de arquivos |
| **Responsável por conteúdo/negócio** | Define o que pode ou não ser cacheado e valida o site pós-virada |
| **Segurança/jurídico** (se aplicável) | Revisa LGPD e contrato com o provedor |

Em um site pequeno, uma única pessoa pode acumular todos os papéis.

## 3. Fases e cronograma

Prazo de referência para um site de pequeno a médio porte: **2 a 4 semanas**. Sites maiores ou com muitas integrações podem precisar de mais tempo.

### Fase 1: Diagnóstico (2 a 3 dias)

**Atividades**
- Inventariar o site: plataforma, hospedagem, domínios e subdomínios.
- Classificar o conteúdo: estático, dinâmico público, dinâmico privado e APIs.
- Levantar o perfil do tráfego: origem geográfica dos usuários, horários de pico e volume mensal.
- Registrar a linha de base de desempenho (veja a seção de KPIs).
- Mapear dependências: pagamentos, webhooks, integrações com IP fixo, e-mail do domínio.

**Entregáveis:** inventário, mapa de conteúdo e relatório de linha de base.

### Fase 2: Seleção do provedor (2 a 3 dias)

**Critérios de avaliação**

| Critério | Pergunta-chave |
|---|---|
| Cobertura | Há PoPs perto dos seus usuários? |
| Custo | Qual é a cobrança: por GB, por requisição, plano fixo? E por região? |
| Segurança | Oferece WAF, DDoS e TLS gerenciado? |
| Operação | Há purge por API, logs, regras flexíveis? |
| Compatibilidade | Funciona com sua plataforma e origem? |
| Contrato | Há mínimo contratual, SLA, limites de uso aceitável? |
| Conformidade | Onde os dados são processados? Isso é compatível com a LGPD? |

Faça uma **prova de conceito** com 2 candidatas em um subdomínio de teste e compare os resultados reais, em vez de decidir só por tabela de preços.

**Entregável:** decisão documentada com justificativa.

### Fase 3: Projeto técnico (2 a 3 dias)

Defina por escrito:

1. **Modelo de integração**
   - Proxy total (todo o domínio passa pela CDN), ou
   - Subdomínio de assets (`cdn.seusite.com`), ou
   - Plugin/integração nativa da plataforma.
2. **Política de cache por tipo de conteúdo**

| Conteúdo | Cache na CDN | Cache no navegador |
|---|---|---|
| CSS/JS/fontes com versão no nome | 1 ano, `immutable` | 1 ano |
| Imagens e mídia | 30 dias a 1 ano | Igual |
| HTML público | Curto (ex.: 5 min) com purge | Mínimo |
| Áreas logadas, carrinho, checkout, admin | **Não cachear** | `no-store` |
| APIs | Caso a caso | Caso a caso |

3. **TLS:** ponta a ponta (CDN → origem em HTTPS com certificado válido).
4. **DNS:** quem gerencia, TTLs e plano de troca.
5. **Segurança da origem:** firewall restrito aos IPs da CDN ou autenticação entre CDN e origem.
6. **Estratégia de invalidação:** versionamento no nome dos arquivos como padrão, purge por URL ou tag como exceção.
7. **Observabilidade:** logs, alertas e painéis.

**Entregável:** documento de arquitetura (uma a duas páginas).

### Fase 4: Preparação da origem (2 a 4 dias)

- Configurar os cabeçalhos `Cache-Control`, `ETag`, `Vary` e `Content-Type` conforme a política.
- Implantar versionamento de assets (hash no nome do arquivo).
- Remover `Set-Cookie` das respostas estáticas.
- Habilitar CORS para fontes e scripts entre domínios, se necessário.
- Configurar a leitura do IP real do visitante (`X-Forwarded-For` ou cabeçalho do provedor).
- Corrigir links `http://` fixos no código (evita conteúdo misto).
- Se houver subdomínio de assets, atualizar as URLs no código ou habilitar o plugin.

**Entregável:** origem pronta, com testes manuais de cabeçalhos.

### Fase 5: Implantação em homologação (2 a 3 dias)

1. Criar a configuração da CDN no ambiente de teste (subdomínio como `teste.seusite.com`).
2. Executar a **bateria de testes**:
   - Navegação completa em desktop e celular.
   - Login, formulários, carrinho, pagamentos e envio de e-mail.
   - Cabeçalhos de cache (`HIT` e `MISS`) em cada tipo de recurso.
   - Páginas privadas **nunca** cacheadas (teste com duas contas diferentes).
   - Redirecionamentos, HTTPS e certificados.
   - Upload e atualização de conteúdo (purge funcionando).
3. Medir o desempenho e comparar com a linha de base.

**Critério de aprovação:** todos os testes passam, sem vazamento de conteúdo privado e com ganho de desempenho confirmado.

### Fase 6: Virada para produção (1 dia, em horário de baixo tráfego)

**Preparação (24 a 48 horas antes)**
- Reduzir o TTL do DNS para 300 s.
- Exportar e guardar a configuração atual do DNS.
- Avisar os envolvidos da janela de mudança.

**Execução**
1. Aplicar a configuração da CDN.
2. Alterar o DNS (CNAME ou nameservers).
3. Acompanhar a propagação.
4. Rodar um roteiro de testes rápidos (home, login, checkout, busca, uma página de conteúdo).
5. Monitorar erros e latência por pelo menos 2 horas.

**Plano de reversão:** restaurar o registro DNS anterior (por isso o TTL baixo). Defina com antecedência o limite que aciona a reversão, por exemplo "aumento de erros 5xx acima de X%" ou "falha em qualquer fluxo crítico".

### Fase 7: Estabilização e otimização (1 a 2 semanas)

- Acompanhar o *cache hit ratio* e ajustar regras que estejam deixando passar tráfego evitável.
- Verificar URLs com parâmetros variáveis que fragmentam o cache.
- Ativar otimizações: compressão Brotli, conversão para WebP/AVIF, HTTP/3.
- Habilitar regras de segurança (WAF, limite de requisições, bloqueio de bots) em modo de observação antes de bloquear.
- Elevar o TTL do DNS de volta ao normal.
- Restringir o acesso direto à origem.

**Entregável:** relatório comparativo antes e depois.

## 4. Gestão de riscos

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Cache de conteúdo privado exposto a outro usuário | Média | **Crítico** | Excluir áreas logadas do cache; testar com duas contas; `private, no-store` |
| Conteúdo desatualizado em produção | Alta | Médio | Versionamento de arquivos, purge automatizado no deploy, TTL curto no HTML |
| Loop de redirecionamento HTTPS | Média | Alto | Usar TLS ponta a ponta, não o modo flexível |
| Perda do e-mail do domínio na troca de DNS | Baixa | Alto | Copiar todos os registros antes; manter MX, SPF e DKIM sem proxy |
| Origem atacada diretamente pelo IP | Média | Alto | Firewall restrito à CDN; evitar exposição do IP em DNS antigos |
| Custos acima do previsto | Média | Médio | Estimar por região, definir alertas de gasto, entender cobrança por requisição |
| Queda do provedor de CDN | Baixa | Alto | Plano de contingência: manter o caminho para apontar o DNS direto à origem |
| Incompatibilidade com a aplicação | Média | Médio | Homologação completa antes da virada |
| Violação de limites de uso do provedor | Baixa | Médio | Ler a política de uso aceitável, principalmente para vídeo e arquivos grandes |

## 5. Orçamento

Para estimar, levante estes componentes:

1. **Custo da CDN:** plano fixo ou volume de GB multiplicado pelo preço da região, mais requisições. Considere que o preço "a partir de" costuma valer para América do Norte e Europa, e a América do Sul pode custar mais.
2. **Custos adicionais:** WAF, bot management, logs, streaming de vídeo, domínios adicionais.
3. **Horas de trabalho** da equipe ao longo das fases.
4. **Economia esperada:** menos tráfego e menos carga na origem, o que pode permitir reduzir o plano de hospedagem.
5. **Câmbio e impostos**, se a cobrança for em dólar.

Confirme os preços atuais nas páginas oficiais dos provedores, pois mudam com frequência.

## 6. Plano de monitoramento (após a virada)

| O que acompanhar | Ferramenta | Frequência |
|---|---|---|
| Cache hit ratio, banda, erros 4xx/5xx | Painel da CDN | Diária na 1ª semana, depois semanal |
| Disponibilidade e tempo de resposta | Monitor externo (UptimeRobot, Better Stack etc.) | Contínua, com alerta |
| Core Web Vitals | Search Console, PageSpeed Insights | Semanal |
| Custos | Fatura e alertas do provedor | Semanal |
| Segurança | Logs de WAF e bloqueios | Semanal |

## 7. Critérios de aceite do projeto

- [ ] Metas de desempenho atingidas ou justificadas
- [ ] Nenhum fluxo crítico quebrado (login, compra, formulários, e-mail)
- [ ] Nenhuma ocorrência de conteúdo privado cacheado
- [ ] HTTPS ponta a ponta com certificados válidos e renovação automática
- [ ] Origem protegida contra acesso direto
- [ ] Purge e versionamento funcionando no processo de deploy
- [ ] Monitoramento e alertas ativos
- [ ] Documentação entregue (arquitetura, regras de cache, procedimento de reversão)
- [ ] Equipe treinada para operar e atualizar o conteúdo

## 8. Documentação a manter

1. Arquitetura e diagrama do fluxo (usuário → CDN → origem).
2. Tabela de regras de cache.
3. Procedimento de purge e de deploy.
4. Procedimento de reversão e contatos de suporte do provedor.
5. Inventário de domínios, registros DNS e certificados.

## 9. Resumo do cronograma

| Fase | Duração |
|---|---|
| 1. Diagnóstico | 2 a 3 dias |
| 2. Seleção do provedor | 2 a 3 dias |
| 3. Projeto técnico | 2 a 3 dias |
| 4. Preparação da origem | 2 a 4 dias |
| 5. Homologação | 2 a 3 dias |
| 6. Virada | 1 dia |
| 7. Estabilização | 1 a 2 semanas |

Quer que eu transforme este projeto em um documento editável, com cronograma e checklists prontos para preencher?
