# Comparação entre provedores de CDN (outubro de 2026)

Preços e planos mudam com frequência, então confirme sempre nas páginas oficiais antes de contratar. Boa parte das fontes que encontrei são blogs de CDNs concorrentes, que tendem a favorecer os próprios produtos nas comparações. Usei os números de tabelas de preços e documentações, mas vale conferir os valores finais.

## Visão geral

| Provedor | Modelo de preço | Entrada | Ponto forte |
|---|---|---|---|
| **Cloudflare** | Plano fixo por site | Free ($0), Pro ($20/mês), Business ($200/mês) e Enterprise sob consulta | Segurança e plano gratuito |
| **Amazon CloudFront** | Por uso ou plano fixo | Free ($0), Pro ($15), Business ($200) e Premium ($1.000) | Integração com AWS |
| **Bunny.net** | Por GB, por região | Sem plano gratuito, mínimo de $1/mês | Menor custo por GB |
| **Fastly** | Por uso | Cerca de $50/mês (ver observação abaixo) | Purge instantâneo e edge programável |
| **Akamai** | Contrato negociado | Sem tabela de preços pública; tudo é negociado | Escala e requisitos corporativos |

## Cloudflare

- Não cobra por GB em nenhum plano, inclusive o gratuito, e a banda da CDN é ilimitada. Isso muda totalmente a conta para sites com muito tráfego.
- O Pro custa $20/mês no plano anual e $25/mês no mensal.
- Há uma restrição importante: a CDN padrão dos planos Free, Pro e Business não deve ser usada para streaming de vídeo nem para tráfego desproporcional de arquivos grandes. Esses casos exigem serviços pagos à parte, como Stream ou R2.
- O plano Business adiciona regras de WAF personalizadas e SLA de 100% de uptime.

**Indicado para:** sites e blogs, e-commerces pequenos e médios, e quem quer segurança e DNS no mesmo lugar.

## Amazon CloudFront

Desde novembro de 2025, ela tem dois modelos:

- **Planos fixos:** o Free inclui 1 milhão de requisições e 100 GB; o Pro, 10 milhões e 50 TB; o Business, 125 milhões e 50 TB. Eles agrupam entrega, WAF, proteção DDoS, DNS e edge compute. Não há cobrança de excedente, mas o desempenho pode ser reduzido se você passar do limite.
- **Pay-as-you-go:** 1 TB de saída e 10 milhões de requisições por mês são gratuitos de forma permanente, e a partir daí o preço fica em torno de $0,085/GB na América do Norte e Europa.

Para quem atende o Brasil, o preço regional pesa. O valor vai de $0,085/GB até $0,170/GB na América do Sul, embora outra fonte cite $0,110/GB para a região. As fontes divergem, então consulte a calculadora oficial da AWS. Os Price Classes permitem excluir regiões caras, mas excluir a América do Sul prejudicaria usuários brasileiros.

**Indicado para:** quem já tem origem na AWS, como S3, EC2 ou ALB. A transferência da origem AWS para a CloudFront é gratuita.

## Bunny.net

Os preços da rede Standard variam por região: $0,01/GB na Europa e América do Norte, $0,03 na Ásia e Oceania, $0,045 na América do Sul e $0,06 no Oriente Médio e África.

A rede Volume tem apenas 10 PoPs e cobra $0,005/GB nos primeiros 500 TB, com taxas menores acima disso.

O custo por GB é muito mais baixo que o dos grandes provedores, mas há um ponto de atenção para o Brasil: a presença de PoPs na África e em partes da América do Sul é considerada reduzida, o que pode significar latência maior. Teste com usuários reais antes de migrar.

**Indicado para:** vídeo, downloads, imagens e projetos sensíveis a custo.

## Fastly

- Usa cobrança por uso. A primeira faixa na América do Norte e Europa custa $0,12/GB, o valor mais alto entre os provedores comparados em uma das fontes.
- As fontes divergem sobre o mínimo. Uma diz que não há compromisso mensal mínimo, outra cita plano de uso a partir de $50/mês. Confirme na página oficial.
- Diferenciais: purge instantâneo e streaming de logs em tempo real incluídos na oferta base, além de edge compute com WebAssembly.
- Pontos fracos citados: sem plano gratuito, PoPs em menor número que Cloudflare e Akamai e curva de aprendizado maior com VCL.

**Indicado para:** equipes técnicas que precisam de controle fino de cache, invalidação imediata e lógica na borda, como portais de notícias e APIs.

## Akamai

- Não publica preços; tudo é negociado por contrato.
- Se o tráfego ficar abaixo do volume contratado, você paga pelo que não usou. Alguns recursos, como streaming de logs e purge instantâneo, podem ser cobrados à parte.
- É a opção tradicional para grandes empresas, bancos, governo e mídia, onde escala, certificações e suporte dedicado contam mais que o preço.

**Indicado para:** grandes corporações com tráfego previsível e alto, que aceitam contratos longos.

## Quando escolher cada uma

| Seu cenário | Melhor candidata |
|---|---|
| Site pequeno ou médio, orçamento mínimo | Cloudflare (Free ou Pro) |
| Infraestrutura já na AWS | CloudFront |
| Muito tráfego de vídeo ou download | Bunny.net (Volume) ou CloudFront, após testar a latência no Brasil |
| Precisa de purge instantâneo e lógica na borda | Fastly (ou Cloudflare Workers) |
| Grande empresa com exigências de contrato e suporte | Akamai |
| Público majoritariamente brasileiro | Teste qualquer opção com usuários reais antes de decidir |

## Antes de decidir, verifique

1. **Presença de PoPs no Brasil.** Cada provedor lista seus locais na página de rede.
2. **Custo regional.** O preço "a partir de" quase sempre vale para a América do Norte e Europa, não para a América do Sul.
3. **Cobrança por requisições.** Além da banda, CloudFront e Fastly cobram por volume de requisições.
4. **Limites de uso aceitável**, principalmente em planos gratuitos com vídeo.
5. **Valores em dólar.** O câmbio e o IOF podem alterar bastante o custo final.

Se quiser, posso montar uma estimativa de custo mensal para o seu caso. Basta me dizer o volume de tráfego, o tipo de conteúdo e onde ficam seus usuários.
