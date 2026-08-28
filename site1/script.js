// Espera até que todo o documento HTML tenha sido carregado.
document.addEventListener("DOMContentLoaded", function () {
    // Localiza no HTML o elemento que possui id="botaoMensagem".
    const botao = document.getElementById("botaoMensagem");

    // Localiza no HTML o elemento que possui id="mensagem".
    const mensagem = document.getElementById("mensagem");

    // Adiciona um evento de clique ao botão.
    botao.addEventListener("click", function () {
        // Altera o texto do elemento que possui id="mensagem".
        mensagem.textContent = "JavaScript encontrou o HTML pelo id e alterou a página!";

        // Exibe uma mensagem no console do navegador.
        console.log("Evento de clique executado pelo JavaScript.");
    });
});
