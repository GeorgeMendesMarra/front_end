# CDN (Content Delivery Network): explicação detalhada

## O que é

Uma **CDN (Rede de Distribuição de Conteúdo)** é um conjunto de servidores espalhados geograficamente, chamados de **pontos de presença (PoPs)** ou **edge servers**, que armazenam cópias do conteúdo de um site e o entregam ao usuário a partir do servidor mais próximo dele.

A ideia central é simples: **a distância física importa**. Um usuário em Goiânia acessando um servidor nos EUA enfrenta uma latência bem maior do que se acessasse uma cópia do mesmo conteúdo em São Paulo ou Brasília.

## O problema que ela resolve

Sem CDN, todo acesso vai ao **servidor de origem** (origin), o que causa:

- **Latência alta** para usuários distantes (os pacotes percorrem milhares de quilômetros)
- **Sobrecarga** no servidor de origem em picos de acesso
- **Gargalos de banda** e custos elevados de tráfego
- **Ponto único de falha**: se a origem cai, o site inteiro cai
- Vulnerabilidade maior a **ataques DDoS**

## Como funciona, passo a passo

1. O usuário digita `www.exemplo.com.br`.
2. A consulta **DNS** não devolve o IP do servidor de origem, e sim o de um servidor da CDN (geralmente via CNAME ou roteamento **anycast**, que direciona para o PoP mais próximo).
3. O usuário se conecta ao **edge server** mais próximo.
4. O edge verifica se tem o conteúdo em **cache**:
   - **Cache HIT**: o conteúdo está lá e é entregue imediatamente.
   - **Cache MISS**: o edge busca o conteúdo na origem, entrega ao usuário **e guarda uma cópia** para as próximas requisições.
5. Os próximos usuários da região recebem o conteúdo direto do cache.

## Componentes principais

| Componente | Função |
|---|---|
| **Origin server** | Servidor original que hospeda o conteúdo "verdadeiro" |
| **Edge server / PoP** | Servidor da CDN próximo ao usuário, que guarda o cache |
| **Cache** | Armazenamento temporário das cópias do conteúdo |
| **DNS / Anycast** | Mecanismo que direciona o usuário ao melhor PoP |
| **Origin shield** (opcional) | Camada intermediária que reduz requisições à origem |

## Tipos de conteúdo

**Conteúdo estático** (o caso clássico): imagens, CSS, JavaScript, fontes, vídeos, PDFs, downloads. Muda raramente, então é ótimo para cache.

**Conteúdo dinâmico**: páginas personalizadas, respostas de API, carrinhos de compra. É mais difícil de cachear, mas CDNs modernas ajudam com otimização de rotas, conexões persistentes com a origem, cache de curta duração e até execução de código na borda (edge computing).

**Streaming de vídeo**: CDNs segmentam o vídeo (HLS, DASH) e distribuem os pedaços, sendo essenciais para Netflix, YouTube, Twitch etc.

## Controle de cache

A CDN decide por quanto tempo guardar um conteúdo com base em:

- **Cabeçalhos HTTP**: `Cache-Control` (ex.: `max-age=86400`, `s-maxage`, `no-store`), `Expires`, `ETag`, `Last-Modified`
- **TTL (Time To Live)**: tempo que o objeto vale no cache
- **Regras configuradas** no painel da CDN (por caminho, extensão, etc.)

Quando você atualiza um arquivo, há duas estratégias:

- **Purge / invalidação**: pedir à CDN que apague o objeto do cache
- **Versionamento de arquivo** (cache busting): trocar o nome, como `app.v2.js` ou `app.a1b2c3.js`, forçando um novo download. É a abordagem mais confiável.

## Modelos de distribuição

- **Pull CDN**: a CDN busca o conteúdo na origem sob demanda (no primeiro cache miss). É o mais comum e simples de configurar.
- **Push CDN**: você envia o conteúdo para a CDN antecipadamente. Dá mais controle, mas exige mais gestão. Útil para arquivos grandes e raramente alterados.

## Benefícios

1. **Desempenho**: menor latência e carregamento mais rápido
2. **Escalabilidade**: absorve picos de tráfego sem derrubar a origem
3. **Disponibilidade**: se um PoP falha, outro assume; algumas CDNs servem conteúdo em cache mesmo com a origem fora do ar
4. **Segurança**: proteção contra DDoS, WAF (firewall de aplicação web), mitigação de bots, terminação TLS/HTTPS
5. **Economia**: reduz o tráfego e a carga na origem
6. **SEO**: velocidade é fator de ranqueamento (Core Web Vitals)
7. **Otimizações automáticas**: compressão (Gzip/Brotli), minificação, conversão de imagens para WebP/AVIF, HTTP/2 e HTTP/3

## Desvantagens e cuidados

- **Custo** adicional (embora muitas vezes compense pela economia de banda)
- **Complexidade** na invalidação de cache e em conteúdo dinâmico
- **Risco de servir conteúdo desatualizado** se o TTL for mal configurado
- **Dependência de terceiros**: uma falha na própria CDN pode afetar muitos sites ao mesmo tempo (já aconteceu com grandes provedores)
- **Privacidade e conformidade** (LGPD/GDPR): dados passam por servidores de terceiros em várias regiões

## Principais provedores

- **Cloudflare**: plano gratuito generoso, forte em segurança
- **Amazon CloudFront** (AWS)
- **Akamai**: um dos pioneiros, muito usado por grandes empresas
- **Fastly**: foco em configuração programável e purge instantâneo
- **Google Cloud CDN** e **Azure CDN**
- **Bunny.net**: econômico e simples

## Exemplo prático

Um e-commerce brasileiro com servidor em São Paulo:

- Sem CDN: um cliente em Manaus carrega todas as imagens dos produtos direto de São Paulo, e na Black Friday o servidor sofre com milhões de requisições.
- Com CDN: as imagens, CSS e JS ficam em PoPs espalhados pelo país. O cliente em Manaus recebe tudo de um servidor regional, e o servidor de origem só cuida do que é realmente dinâmico (login, checkout, estoque).

## Conceitos relacionados que valem conhecer

- **Edge computing / Edge functions**: executar código na borda (Cloudflare Workers, Lambda@Edge)
- **Anycast**: técnica de roteamento em que vários servidores compartilham o mesmo IP e a rede encaminha ao mais próximo
- **Cache hit ratio**: porcentagem de requisições atendidas pelo cache; quanto maior, melhor
- **TTFB (Time To First Byte)**: métrica de tempo até o primeiro byte, que a CDN costuma reduzir bastante

## Resumo

Uma CDN **aproxima o conteúdo do usuário**, **protege e alivia a origem** e **acelera a entrega**. Hoje, praticamente todo site de médio ou grande porte usa uma, e para sites pequenos o plano gratuito de alguns provedores já traz ganhos visíveis.
