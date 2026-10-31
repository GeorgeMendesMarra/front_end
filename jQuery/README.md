# jQuery: exemplos didáticos

Exemplos em ordem crescente de dificuldade para Programação Web I. Basta abrir cada arquivo `.html` no navegador (é preciso internet, pois o jQuery e o Bootstrap vêm de um CDN).

| Arquivo                      | O que ensina                                                                    |
|------------------------------|---------------------------------------------------------------------------------|
| `01-primeiros-passos.html`   | Instalação via CDN, `$(document).ready`, seletores, `.text()`, `.html()`, `.css()` e classes |
| `02-eventos-e-efeitos.html`  | `.click()`, `.on()`, `hover`, `.hide()`, `.show()`, `.fadeToggle()`, `.slideToggle()` e `.animate()` |
| `03-dom-e-formulario.html`   | `.val()`, `.append()`, `.remove()`, `.each()`, lista de tarefas e validação de formulário |
| `04-ajax-projeto-completo.html` | Projeto completo juntando tudo: `$.getJSON`, `$.ajax`, busca em tempo real e cards gerados dinamicamente |

## Atividades sugeridas

1. No exemplo 1, troque o seletor `.destaque` por `#titulo` e observe qual elemento muda.
2. No exemplo 2, altere o tempo do `slideToggle` de `400` para `1500` e compare.
3. No exemplo 3, adicione um botão "Limpar tudo" que remova todas as tarefas da lista.
4. No exemplo 4, mude a URL para `/albums` e adapte os cards para mostrar o título do álbum.

## Dica de depuração

Abra o console do navegador (`F12`) e digite `$` para confirmar que o jQuery foi carregado. Se aparecer `$ is not defined`, o `<script>` do jQuery está faltando ou está depois do seu código.

Documentação oficial: [https://api.jquery.com](https://api.jquery.com)
