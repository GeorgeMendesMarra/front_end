```javascript
// Obtém o formulário através do seu id.
const formulario = document.getElementById("formularioCadastro");

// Obtém o campo de nome.
const nome = document.getElementById("nome");

// Obtém o campo de e-mail.
const email = document.getElementById("email");

// Obtém o campo de telefone.
const telefone = document.getElementById("telefone");

// Obtém o campo de CPF.
const cpf = document.getElementById("cpf");

// Obtém o campo CEP.
const cep = document.getElementById("cep");

// Obtém o campo de senha.
const senha = document.getElementById("senha");

// Obtém o campo de confirmação de senha.
const confirmarSenha = document.getElementById("confirmarSenha");

// Obtém o botão utilizado para mostrar a senha.
const mostrarSenha = document.getElementById("mostrarSenha");

// Obtém o campo de mensagem.
const mensagem = document.getElementById("mensagem");

// Obtém o contador de caracteres.
const contador = document.getElementById("contador");

// Obtém a área onde o JavaScript exibirá mensagens.
const mensagemFormulario =
    document.getElementById("mensagemFormulario");

// Obtém a área de resultado.
const resultado =
    document.getElementById("resultado");

// Obtém a área onde o resumo será exibido.
const resumoCadastro =
    document.getElementById("resumoCadastro");

// Obtém o botão de limpar.
const botaoLimpar =
    document.getElementById("botaoLimpar");


// =====================================================
// MÁSCARA DE TELEFONE
// =====================================================

// Adiciona um evento executado sempre que o usuário digitar.
telefone.addEventListener("input", function () {

    // Remove tudo que não for número.
    let valor = telefone.value.replace(/\D/g, "");

    // Limita o telefone a 11 números.
    valor = valor.substring(0, 11);

    // Aplica a máscara para celular.
    if (valor.length >= 11) {

        telefone.value =
            "(" +
            valor.substring(0, 2) +
            ") " +
            valor.substring(2, 7) +
            "-" +
            valor.substring(7, 11);

    }

    // Aplica a máscara para telefone menor.
    else if (valor.length >= 7) {

        telefone.value =
            "(" +
            valor.substring(0, 2) +
            ") " +
            valor.substring(2, 6) +
            "-" +
            valor.substring(6);

    }

    // Aplica a primeira parte da máscara.
    else if (valor.length >= 3) {

        telefone.value =
            "(" +
            valor.substring(0, 2) +
            ") " +
            valor.substring(2);

    }

});


// =====================================================
// MÁSCARA DE CPF
// =====================================================

cpf.addEventListener("input", function () {

    // Remove caracteres que não são números.
    let valor = cpf.value.replace(/\D/g, "");

    // Limita o valor a 11 números.
    valor = valor.substring(0, 11);

    // Aplica a máscara do CPF.
    if (valor.length > 9) {

        cpf.value =
            valor.substring(0, 3) +
            "." +
            valor.substring(3, 6) +
            "." +
            valor.substring(6, 9) +
            "-" +
            valor.substring(9, 11);

    }

    else if (valor.length > 6) {

        cpf.value =
            valor.substring(0, 3) +
            "." +
            valor.substring(3, 6) +
            "." +
            valor.substring(6);

    }

    else if (valor.length > 3) {

        cpf.value =
            valor.substring(0, 3) +
            "." +
            valor.substring(3);

    }

});


// =====================================================
// MÁSCARA DE CEP
// =====================================================

cep.addEventListener("input", function () {

    // Remove caracteres que não são números.
    let valor = cep.value.replace(/\D/g, "");

    // Limita o valor a oito números.
    valor = valor.substring(0, 8);

    // Aplica o hífen depois dos cinco primeiros números.
    if (valor.length > 5) {

        cep.value =
            valor.substring(0, 5) +
            "-" +
            valor.substring(5);

    }

    else {

        cep.value = valor;

    }

});


// =====================================================
// CONTADOR DE CARACTERES
// =====================================================

mensagem.addEventListener("input", function () {

    // Obtém a quantidade de caracteres digitados.
    const quantidade = mensagem.value.length;

    // Coloca a quantidade dentro do elemento contador.
    contador.textContent = quantidade;

});


// =====================================================
// MOSTRAR E OCULTAR SENHA
// =====================================================

mostrarSenha.addEventListener("click", function () {

    // Verifica se o campo está utilizando password.
    if (senha.type === "password") {

        // Altera o campo para texto.
        senha.type = "text";

        // Altera o texto do botão.
        mostrarSenha.textContent = "Ocultar";

    }

    else {

        // Retorna o campo para password.
        senha.type = "password";

        // Retorna o texto original.
        mostrarSenha.textContent = "Mostrar";

    }

});


// =====================================================
// VERIFICAÇÃO DA SENHA
// =====================================================

senha.addEventListener("input", function () {

    // Obtém a quantidade de caracteres da senha.
    const tamanho = senha.value.length;

    // Obtém o elemento de orientação.
    const forcaSenha =
        document.getElementById("forcaSenha");

    // Verifica se a senha ainda está vazia.
    if (tamanho === 0) {

        forcaSenha.textContent =
            "A senha deve possuir pelo menos 8 caracteres.";

        return;

    }

    // Verifica se possui menos de 8 caracteres.
    if (tamanho < 8) {

        forcaSenha.textContent =
            "Senha fraca: utilize pelo menos 8 caracteres.";

    }

    // Verifica se possui entre 8 e 11 caracteres.
    else if (tamanho < 12) {

        forcaSenha.textContent =
            "Senha razoável.";

    }

    // Considera senhas maiores como fortes.
    else {

        forcaSenha.textContent =
            "Senha forte.";

    }

});


// =====================================================
// FUNÇÃO PARA LIMPAR ERROS
// =====================================================

function limparErros() {

    // Obtém todos os elementos que possuem a classe mensagemErro.
    const erros =
        document.querySelectorAll(".mensagemErro");

    // Percorre todos os elementos encontrados.
    erros.forEach(function (erro) {

        // Remove o texto de erro.
        erro.textContent = "";

    });

}


// =====================================================
// FUNÇÃO PARA MOSTRAR ERRO
// =====================================================

function mostrarErro(id, texto) {

    // Localiza o elemento pelo id recebido.
    const elemento = document.getElementById(id);

    // Coloca a mensagem no elemento.
    elemento.textContent = texto;

}


// =====================================================
// EVENTO DE ENVIO DO FORMULÁRIO
// =====================================================

formulario.addEventListener("submit", function (evento) {

    // Impede o navegador de recarregar a página.
    evento.preventDefault();

    // Remove as mensagens antigas.
    limparErros();

    // Esconde o resultado anterior.
    resultado.classList.add("escondido");

    // Controla se existem erros.
    let valido = true;


    // =================================================
    // VALIDAÇÃO DO NOME
    // =================================================

    if (nome.value.trim().length < 3) {

        mostrarErro(
            "erroNome",
            "Digite seu nome completo."
        );

        valido = false;

    }


    // =================================================
    // VALIDAÇÃO DO E-MAIL
    // =================================================

    const regraEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regraEmail.test(email.value)) {

        mostrarErro(
            "erroEmail",
            "Digite um e-mail válido."
        );

        valido = false;

    }


    // =================================================
    // VALIDAÇÃO DO TELEFONE
    // =================================================

    const telefoneNumeros =
        telefone.value.replace(/\D/g, "");

    if (telefoneNumeros.length < 10) {

        mostrarErro(
            "erroTelefone",
            "Digite um telefone válido."
        );

        valido = false;

    }


    // =================================================
    // VALIDAÇÃO DO CPF
    // =================================================

    const cpfNumeros =
        cpf.value.replace(/\D/g, "");

    if (cpfNumeros.length !== 11) {

        mostrarErro(
            "erroCpf",
            "Digite um CPF com 11 números."
        );

        valido = false;

    }


    // =================================================
    // VALIDAÇÃO DO NASCIMENTO
    // =================================================

    const nascimento =
        document.getElementById("nascimento");

    if (nascimento.value === "") {

        mostrarErro(
            "erroNascimento",
            "Informe sua data de nascimento."
        );

        valido = false;

    }


    // =================================================
    // VALIDAÇÃO DO CURSO
    // =================================================

    const curso =
        document.getElementById("curso");

    if (curso.value === "") {

        mostrarErro(
            "erroCurso",
            "Selecione seu curso."
        );

        valido = false;

    }


    // =================================================
    // VALIDAÇÃO DA SENHA
    // =================================================

    if (senha.value.length < 8) {

        mensagemFormulario.textContent =
            "A senha deve possuir pelo menos 8 caracteres.";

        mensagemFormulario.className =
            "mensagemFormulario erro";

        valido = false;

    }


    // =================================================
    // CONFIRMAÇÃO DA SENHA
    // =================================================

    if (senha.value !== confirmarSenha.value) {

        mostrarErro(
            "erroConfirmarSenha",
            "As senhas não são iguais."
        );

        valido = false;

    }


    // =================================================
    // TERMOS
    // =================================================

    const termos =
        document.getElementById("termos");

    if (!termos.checked) {

        mostrarErro(
            "erroTermos",
            "Você precisa aceitar os termos."
        );

        valido = false;

    }


    // =================================================
    // VERIFICAÇÃO FINAL
    // =================================================

    if (!valido) {

        mensagemFormulario.textContent =
            "Corrija os campos destacados antes de enviar.";

        mensagemFormulario.className =
            "mensagemFormulario erro";

        return;

    }


    // =================================================
    // COLETA DOS DADOS
    // =================================================

    const estado =
        document.getElementById("estado").value;

    const cidade =
        document.getElementById("cidade").value;

    const endereco =
        document.getElementById("endereco").value;

    const numero =
        document.getElementById("numero").value;

    const periodo =
        document.getElementById("periodo").value;


    // Obtém o sexo selecionado.
    const sexoSelecionado =
        document.querySelector(
            'input[name="sexo"]:checked'
        );


    // Obtém a modalidade selecionada.
    const modalidadeSelecionada =
        document.querySelector(
            'input[name="modalidade"]:checked'
        );


    // Obtém todas as tecnologias selecionadas.
    const tecnologiasSelecionadas =
        document.querySelectorAll(
            'input[name="tecnologias"]:checked'
        );


    // Cria um array para armazenar as tecnologias.
    const tecnologias = [];


    // Percorre todas as tecnologias selecionadas.
    tecnologiasSelecionadas.forEach(
        function (tecnologia) {

            tecnologias.push(
                tecnologia.value
            );

        }
    );


    // =================================================
    // MONTAGEM DO RESUMO
    // =================================================

    resumoCadastro.innerHTML = `

        <div class="resumo-item">
            <strong>Nome:</strong>
            ${nome.value}
        </div>

        <div class="resumo-item">
            <strong>E-mail:</strong>
            ${email.value}
        </div>

        <div class="resumo-item">
            <strong>Telefone:</strong>
            ${telefone.value}
        </div>

        <div class="resumo-item">
            <strong>CPF:</strong>
            ${cpf.value}
        </div>

        <div class="resumo-item">
            <strong>Curso:</strong>
            ${curso.options[curso.selectedIndex].text}
        </div>

        <div class="resumo-item">
            <strong>Período:</strong>
            ${periodo}
        </div>

        <div class="resumo-item">
            <strong>Sexo:</strong>
            ${sexoSelecionado ? sexoSelecionado.value : "Não informado"}
        </div>

        <div class="resumo-item">
            <strong>Modalidade:</strong>
            ${modalidadeSelecionada
                ? modalidadeSelecionada.value
                : "Não informado"}
        </div>

        <div class="resumo-item">
            <strong>Endereço:</strong>
            ${endereco}, ${numero} - ${cidade}/${estado}
        </div>

        <div class="resumo-item">
            <strong>CEP:</strong>
            ${cep.value}
        </div>

        <div class="resumo-item">
            <strong>Tecnologias:</strong>
            ${tecnologias.length > 0
                ? tecnologias.join(", ")
                : "Nenhuma selecionada"}
        </div>

        <div class="resumo-item">
            <strong>Mensagem:</strong>
            ${mensagem.value || "Nenhuma mensagem informada"}
        </div>

    `;


    // =================================================
    // MENSAGEM DE SUCESSO
    // =================================================

    mensagemFormulario.textContent =
        "Cadastro realizado com sucesso!";

    mensagemFormulario.className =
        "mensagemFormulario sucesso";


    // Exibe a seção de resultado.
    resultado.classList.remove("escondido");


    // Faz a página rolar até o resultado.
    resultado.scrollIntoView({
        behavior: "smooth"
    });


    // Exibe os dados também no console.
    console.log("Cadastro realizado:", {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cpf: cpf.value,
        curso: curso.value,
        periodo: periodo,
        estado: estado,
        cidade: cidade,
        tecnologias: tecnologias
    });

});


// =====================================================
// BOTÃO LIMPAR
// =====================================================

botaoLimpar.addEventListener("click", function () {

    // Aguarda o reset do formulário.
    setTimeout(function () {

        // Limpa todas as mensagens de erro.
        limparErros();

        // Limpa a mensagem geral.
        mensagemFormulario.textContent = "";

        // Remove as classes da mensagem.
        mensagemFormulario.className =
            "mensagemFormulario";

        // Zera o contador.
        contador.textContent = "0";

        // Esconde o resultado.
        resultado.classList.add("escondido");

        // Volta o botão para "Mostrar".
        mostrarSenha.textContent = "Mostrar";

        // Garante que a senha volte a ser ocultada.
        senha.type = "password";

    }, 0);

});
```
