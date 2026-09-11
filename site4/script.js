// Usa o atalho $(document).ready() do jQuery.
// Ele espera o HTML terminar de carregar antes de executar o código,
// assim como o "DOMContentLoaded" utilizado nos Sites 1, 2 e 3 em JavaScript puro.
$(document).ready(function () {

    // ---------------------------------------------------------------
    // MENU RESPONSIVO (mesma função do Site 3, agora escrita em jQuery)
    // ---------------------------------------------------------------

    // $("#id") seleciona um elemento pelo id, assim como getElementById() faria.
    const $botaoMenu = $("#botaoMenu");

    // Seleciona o menu de navegação.
    const $menu = $("#menu");

    // Seleciona todos os links do menu de uma só vez.
    const $linksMenu = $(".link-menu");

    // .on("click", ...) registra um evento de clique no botão do menu.
    $botaoMenu.on("click", function () {

        // .toggleClass() adiciona a classe se ela não existir e remove se já existir.
        $menu.toggleClass("aberto");

        // .hasClass() verifica se o menu está com a classe "aberto" no momento.
        const menuAberto = $menu.hasClass("aberto");

        // .attr() lê ou altera um atributo do elemento; aqui atualiza a acessibilidade.
        $botaoMenu.attr("aria-expanded", menuAberto);

        // .text() substitui o conteúdo de texto do botão pelo símbolo correspondente.
        $botaoMenu.text(menuAberto ? "✕" : "☰");
    });

    // .each() percorre cada link do menu, um por um.
    $linksMenu.each(function (indice, elemento) {

        // Dentro do each(), $(this) ou $(elemento) representa o link atual da vez.
        $(elemento).on("click", function () {

            // Remove a classe "ativo" de todos os links antes de marcar um novo.
            $linksMenu.removeClass("ativo");

            // Adiciona a classe "ativo" apenas ao link que foi clicado.
            $(this).addClass("ativo");

            // Fecha o menu móvel depois que o usuário escolhe uma seção.
            $menu.removeClass("aberto");

            // Atualiza o estado de acessibilidade do botão do menu.
            $botaoMenu.attr("aria-expanded", "false");

            // Retorna o símbolo do menu para o estado fechado.
            $botaoMenu.text("☰");
        });
    });

    // Destaca o link do menu correspondente à seção visível durante a rolagem.
    $(window).on("scroll", function () {

        // Guarda a posição atual da rolagem, somando um pequeno ajuste.
        const posicaoAtual = $(window).scrollTop() + 120;

        // Percorre todas as seções que possuem id dentro do <main>.
        $("main section[id]").each(function () {

            // .offset().top retorna a distância do topo da seção até o topo da página.
            const topoSecao = $(this).offset().top;

            // Calcula o final da seção somando sua altura.
            const fimSecao = topoSecao + $(this).outerHeight();

            // Verifica se a posição da rolagem está dentro da seção atual.
            if (posicaoAtual >= topoSecao && posicaoAtual < fimSecao) {

                // Recupera o id da seção visível.
                const idSecao = $(this).attr("id");

                // Remove o destaque de todos os links.
                $linksMenu.removeClass("ativo");

                // Adiciona o destaque somente ao link que aponta para essa seção.
                $('.link-menu[href="#' + idSecao + '"]').addClass("ativo");
            }
        });
    });


    // ---------------------------------------------------------------
    // EXEMPLO 1 — Selecionar elemento e alternar texto com fadeOut()/fadeIn()
    // ---------------------------------------------------------------

    // Seleciona o botão e o parágrafo usados neste exemplo.
    const $botaoMensagem = $("#botaoMensagem");
    const $mensagemJquery = $("#mensagemJquery");

    // Registra o clique no botão.
    $botaoMensagem.on("click", function () {

        // .fadeOut() esconde o elemento suavemente; ao terminar, executa a função recebida.
        $mensagemJquery.fadeOut(150, function () {

            // Dentro do callback, o texto é trocado enquanto o elemento está invisível.
            $mensagemJquery.text("O jQuery encontrou o parágrafo pelo id e trocou este texto!");

            // .fadeIn() exibe o elemento novamente, também de forma suave.
            $mensagemJquery.fadeIn(150);
        });
    });


    // ---------------------------------------------------------------
    // EXEMPLO 2 — Curtir com toggleClass() e contador simples
    // ---------------------------------------------------------------

    // Seleciona o botão de curtir e o elemento que mostra o total.
    const $botaoCurtir = $("#botaoCurtir");
    const $contador = $("#contadorCurtidas");

    // Registra o clique no botão de curtir.
    $botaoCurtir.on("click", function () {

        // Alterna a classe "curtido", que muda a cor do botão via CSS.
        $(this).toggleClass("curtido");

        // Lê o valor atual do contador e transforma o texto em número.
        let total = parseInt($contador.text(), 10);

        // .hasClass() verifica se o botão está marcado como curtido depois do toggle.
        if ($(this).hasClass("curtido")) {

            // Soma uma curtida quando o botão foi ativado.
            total = total + 1;

            // Atualiza o atributo de acessibilidade indicando que o botão está pressionado.
            $(this).attr("aria-pressed", "true");
        } else {

            // Remove uma curtida quando o botão foi desativado.
            total = total - 1;

            // Atualiza o atributo de acessibilidade para o estado não pressionado.
            $(this).attr("aria-pressed", "false");
        }

        // Escreve o novo total de volta no elemento, novamente usando .text().
        $contador.text(total);
    });


    // ---------------------------------------------------------------
    // EXEMPLO 3 — Alternar tema (claro/escuro) com toggleClass() no body
    // ---------------------------------------------------------------

    // Seleciona o botão responsável por trocar o tema.
    const $botaoTema = $("#botaoTema");

    // Registra o clique no botão de tema.
    $botaoTema.on("click", function () {

        // Alterna a classe "modo-escuro" diretamente na tag <body>.
        $("body").toggleClass("modo-escuro");

        // Verifica se o modo escuro ficou ativo após o toggle.
        const escuroAtivo = $("body").hasClass("modo-escuro");

        // Atualiza o texto do botão conforme o estado atual do tema.
        $(this).text(escuroAtivo ? "Desativar modo escuro" : "Ativar modo escuro");
    });


    // ---------------------------------------------------------------
    // ACORDEÃO DE PERGUNTAS FREQUENTES — slideToggle() + next()
    // ---------------------------------------------------------------

    // Seleciona todos os botões de pergunta do acordeão.
    const $perguntas = $(".pergunta");

    // Usa .each() para dar um id único a cada pergunta (bom para acessibilidade e testes).
    $perguntas.each(function (indice) {
        $(this).attr("id", "pergunta-" + (indice + 1));
    });

    // Registra o clique em cada pergunta.
    $perguntas.on("click", function () {

        // .next() seleciona o elemento irmão logo em seguida, que é a resposta.
        const $resposta = $(this).next(".resposta");

        // .slideToggle() abre a resposta com uma animação de deslizar caso esteja fechada,
        // e fecha da mesma forma caso já esteja aberta.
        $resposta.slideToggle(200);

        // Alterna uma classe na pergunta para permitir estilizar o estado "aberta" via CSS, se desejado.
        $(this).toggleClass("aberta");
    });

});
