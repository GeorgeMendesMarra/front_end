// Aguarda o carregamento completo do documento HTML.
document.addEventListener("DOMContentLoaded", function () {

    // Localiza o botão responsável por abrir e fechar o menu.
    const botaoMenu = document.getElementById("botaoMenu");

    // Localiza o elemento nav que contém os links do menu.
    const menu = document.getElementById("menu");

    // Localiza todos os links existentes no menu.
    const linksMenu = document.querySelectorAll(".link-menu");

    // Localiza o botão utilizado para demonstrar uma ação JavaScript.
    const botaoMensagem = document.getElementById("botaoMensagem");

    // Localiza o elemento que receberá a mensagem dinâmica.
    const mensagem = document.getElementById("mensagem");

    // Adiciona um evento de clique ao botão do menu.
    botaoMenu.addEventListener("click", function () {

        // Adiciona ou remove a classe "aberto" do menu.
        menu.classList.toggle("aberto");

        // Verifica se o menu está atualmente aberto.
        const menuAberto = menu.classList.contains("aberto");

        // Atualiza o atributo de acessibilidade aria-expanded.
        botaoMenu.setAttribute("aria-expanded", menuAberto);

        // Altera o símbolo do botão conforme o estado do menu.
        botaoMenu.textContent = menuAberto ? "✕" : "☰";
    });

    // Percorre todos os links do menu.
    linksMenu.forEach(function (link) {

        // Adiciona um evento de clique a cada link.
        link.addEventListener("click", function () {

            // Remove a classe "ativo" de todos os links.
            linksMenu.forEach(function (item) {
                item.classList.remove("ativo");
            });

            // Adiciona a classe "ativo" ao link que foi clicado.
            link.classList.add("ativo");

            // Fecha o menu móvel depois que o usuário escolhe uma seção.
            menu.classList.remove("aberto");

            // Atualiza o estado de acessibilidade do botão.
            botaoMenu.setAttribute("aria-expanded", "false");

            // Retorna o símbolo do menu para o estado fechado.
            botaoMenu.textContent = "☰";
        });
    });

    // Adiciona um evento de clique ao botão de demonstração.
    botaoMensagem.addEventListener("click", function () {

        // Escreve uma mensagem no elemento identificado por "mensagem".
        mensagem.textContent = "JavaScript encontrou o elemento HTML pelo id e modificou o conteúdo da página!";

        // Registra uma informação no console do navegador.
        console.log("Evento de clique executado no Site 3.");

        // Muda temporariamente o texto do botão.
        botaoMensagem.textContent = "JavaScript executado!";

        // Cria um temporizador para restaurar o texto original.
        setTimeout(function () {

            // Retorna o texto original do botão.
            botaoMensagem.textContent = "Executar JavaScript";

        }, 2000);
    });

    // Localiza todas as seções que possuem id.
    const secoes = document.querySelectorAll("main section[id]");

    // Cria um observador para detectar a seção atualmente visível.
    const observador = new IntersectionObserver(function (entradas) {

        // Percorre as entradas observadas.
        entradas.forEach(function (entrada) {

            // Verifica se a seção está suficientemente visível.
            if (entrada.isIntersecting) {

                // Procura o link do menu correspondente ao id da seção.
                const linkAtual = document.querySelector('.link-menu[href="#' + entrada.target.id + '"]');

                // Verifica se o link foi encontrado.
                if (linkAtual) {

                    // Remove o destaque dos demais links.
                    linksMenu.forEach(function (item) {
                        item.classList.remove("ativo");
                    });

                    // Destaca o link da seção atualmente visível.
                    linkAtual.classList.add("ativo");
                }
            }
        });
    }, {
        threshold: 0.45
    });

    // Registra todas as seções no observador.
    secoes.forEach(function (secao) {
        observador.observe(secao);
    });
});
