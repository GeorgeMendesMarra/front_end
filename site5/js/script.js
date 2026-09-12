/* ==========================================================================
   Painel de Controle de Estoque
   Lógica em jQuery: consumo da "base de dados" (data/estoque.json),
   filtros, ordenação de tabela e gráfico simples com <div>.
   ========================================================================== */

$(function () {

  // ------------------------------------------------------------------
  // 1) ESTADO DA APLICAÇÃO
  // ------------------------------------------------------------------
  let baseDeDados = [];
  let ordenacao = { campo: null, direcao: "asc" };

  const $buscaInput       = $("#filtro-busca");
  const $selectCategoria  = $("#filtro-categoria");
  const $selectFornecedor = $("#filtro-fornecedor");
  const $selectStatus     = $("#filtro-status");
  const $corpoTabela      = $("#corpo-tabela");
  const $contagem         = $("#contagem-resultados");
  const $graficoBarras    = $("#grafico-barras");
  const $listaAlertas     = $("#lista-alertas");
  const $cabecalhos       = $(".tabela-estoque thead th");

  // ------------------------------------------------------------------
  // 2) CARREGANDO A "BASE DE DADOS"
  //    Os dados ficam embutidos em uma tag <script type="application/
  //    json" id="base-dados"> dentro do próprio index.html. Lemos o
  //    texto dessa tag com jQuery ($("#base-dados").text()) e
  //    convertemos para um array de objetos com JSON.parse — o mesmo
  //    formato que receberíamos de uma API.
  //
  //    Por quê não usar $.getJSON("data/estoque.json") aqui? Porque o
  //    navegador bloqueia essa chamada (AJAX) quando a página é aberta
  //    direto do disco (file://), por política de CORS. Em um projeto
  //    publicado num servidor (GitHub Pages, Vercel, etc.) as duas
  //    abordagens funcionam; para rodar com um simples duplo clique,
  //    embutir os dados é a alternativa mais simples.
  // ------------------------------------------------------------------
  try {
    const textoJson = $("#base-dados").text();
    const dados = JSON.parse(textoJson);
    baseDeDados = dados.map(calcularStatus);
    preencherFiltros(baseDeDados);
    atualizarDashboard();
  } catch (erro) {
    $corpoTabela.html(
      '<tr class="sem-resultados"><td colspan="7">Não foi possível ler a base de dados embutida no HTML.</td></tr>'
    );
  }

  // ------------------------------------------------------------------
  // 3) REGRA DE NEGÓCIO: status do item a partir da quantidade
  // ------------------------------------------------------------------
  function calcularStatus(registro) {
    let status;
    if (registro.quantidade < registro.estoque_minimo) {
      status = "Baixo";
    } else if (registro.quantidade <= registro.estoque_minimo * 1.5) {
      status = "Atenção";
    } else {
      status = "Normal";
    }
    return $.extend({}, registro, { status: status });
  }

  // ------------------------------------------------------------------
  // 4) PREENCHER OS <select> DE CATEGORIA E FORNECEDOR
  // ------------------------------------------------------------------
  function preencherFiltros(dados) {
    $.each(valoresUnicos(dados, "categoria"), function (i, categoria) {
      $selectCategoria.append($("<option>").val(categoria).text(categoria));
    });
    $.each(valoresUnicos(dados, "fornecedor"), function (i, fornecedor) {
      $selectFornecedor.append($("<option>").val(fornecedor).text(fornecedor));
    });
  }

  function valoresUnicos(lista, campo) {
    const vistos = {};
    const resultado = [];
    $.each(lista, function (i, registro) {
      const valor = registro[campo];
      if (!vistos[valor]) {
        vistos[valor] = true;
        resultado.push(valor);
      }
    });
    return resultado.sort();
  }

  // ------------------------------------------------------------------
  // 5) FILTROS
  // ------------------------------------------------------------------
  function aplicarFiltros() {
    const termo = $buscaInput.val().trim().toLowerCase();
    const categoria = $selectCategoria.val();
    const fornecedor = $selectFornecedor.val();
    const status = $selectStatus.val();

    return baseDeDados.filter(function (registro) {
      const combinaBusca = registro.produto.toLowerCase().indexOf(termo) !== -1;
      const combinaCategoria = !categoria || registro.categoria === categoria;
      const combinaFornecedor = !fornecedor || registro.fornecedor === fornecedor;
      const combinaStatus = !status || registro.status === status;
      return combinaBusca && combinaCategoria && combinaFornecedor && combinaStatus;
    });
  }

  // ------------------------------------------------------------------
  // 6) ORDENAÇÃO DA TABELA
  // ------------------------------------------------------------------
  function aplicarOrdenacao(lista) {
    if (!ordenacao.campo) return lista;

    const campo = ordenacao.campo;
    const multiplicador = ordenacao.direcao === "asc" ? 1 : -1;

    return lista.slice().sort(function (a, b) {
      const valorA = a[campo];
      const valorB = b[campo];
      if (typeof valorA === "number") {
        return (valorA - valorB) * multiplicador;
      }
      return String(valorA).localeCompare(String(valorB)) * multiplicador;
    });
  }

  $cabecalhos.on("click", function () {
    const campo = $(this).data("campo");

    if (ordenacao.campo === campo) {
      ordenacao.direcao = ordenacao.direcao === "asc" ? "desc" : "asc";
    } else {
      ordenacao.campo = campo;
      ordenacao.direcao = "asc";
    }

    $cabecalhos.removeClass("ordenado-asc ordenado-desc");
    $(this).addClass(ordenacao.direcao === "asc" ? "ordenado-asc" : "ordenado-desc");

    atualizarDashboard();
  });

  // ------------------------------------------------------------------
  // 7) RENDERIZAÇÃO — TABELA
  // ------------------------------------------------------------------
  function renderizarTabela(lista) {
    $corpoTabela.empty();

    if (lista.length === 0) {
      $corpoTabela.html(
        '<tr class="sem-resultados"><td colspan="7">Nenhum item encontrado para os filtros selecionados.</td></tr>'
      );
      return;
    }

    $.each(lista, function (i, registro) {
      const classeBadge = registro.status === "Normal" ? "normal"
                         : registro.status === "Atenção" ? "atencao"
                         : "baixo";

      const $linha = $("<tr>").append(
        $("<td>").text(registro.produto),
        $("<td>").text(registro.categoria),
        $("<td>").text(registro.quantidade),
        $("<td>").text(registro.estoque_minimo),
        $("<td>").text(formatarMoeda(registro.preco_unitario)),
        $("<td>").text(registro.fornecedor),
        $("<td>").append($("<span>").addClass("badge " + classeBadge).text(registro.status))
      );

      $corpoTabela.append($linha);
    });
  }

  function formatarMoeda(valor) {
    return "R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  // ------------------------------------------------------------------
  // 8) RENDERIZAÇÃO — INDICADORES (KPIs)
  // ------------------------------------------------------------------
  function renderizarKPIs(lista) {
    $("#kpi-total").text(lista.length);

    if (lista.length === 0) {
      $("#kpi-valor").text("—");
      $("#kpi-baixo").text("—");
      $("#kpi-destaque").text("—");
      return;
    }

    const valorTotal = lista.reduce(function (soma, r) {
      return soma + r.quantidade * r.preco_unitario;
    }, 0);
    $("#kpi-valor").text(formatarMoeda(valorTotal));

    const baixos = lista.filter(function (r) { return r.status === "Baixo"; }).length;
    $("#kpi-baixo").text(baixos);

    const valores = valorPorCategoria(lista);
    const destaque = valores[0];
    $("#kpi-destaque").text(destaque ? destaque.categoria : "—");
  }

  // ------------------------------------------------------------------
  // 9) RENDERIZAÇÃO — GRÁFICO DE BARRAS (sem biblioteca de gráficos)
  // ------------------------------------------------------------------
  function valorPorCategoria(lista) {
    const grupos = {};
    $.each(lista, function (i, registro) {
      const valorItem = registro.quantidade * registro.preco_unitario;
      if (!grupos[registro.categoria]) grupos[registro.categoria] = 0;
      grupos[registro.categoria] += valorItem;
    });

    const resultado = [];
    $.each(grupos, function (categoria, valor) {
      resultado.push({ categoria: categoria, valor: valor });
    });

    resultado.sort(function (a, b) { return b.valor - a.valor; });
    return resultado;
  }

  function renderizarGrafico(lista) {
    $graficoBarras.empty();

    const valores = valorPorCategoria(lista);
    if (valores.length === 0) {
      $graficoBarras.append('<p class="vazio">Sem dados para exibir.</p>');
      return;
    }

    const maiorValor = valores[0].valor;

    $.each(valores, function (i, item) {
      const larguraPercentual = maiorValor > 0 ? (item.valor / maiorValor) * 100 : 0;

      const $linha = $("<div>").addClass("linha-barra").append(
        $("<span>").addClass("nome-categoria").text(item.categoria),
        $("<div>").addClass("trilha").append(
          $("<div>").addClass("barra").css("width", "0%")
        ),
        $("<span>").addClass("valor-barra").text(formatarMoeda(item.valor))
      );

      $graficoBarras.append($linha);
      $linha.find(".barra").animate({ width: larguraPercentual + "%" }, 400);
    });
  }

  // ------------------------------------------------------------------
  // 10) RENDERIZAÇÃO — ITENS ABAIXO DO ESTOQUE MÍNIMO
  // ------------------------------------------------------------------
  function renderizarAlertas(lista) {
    $listaAlertas.empty();

    const criticos = lista.filter(function (r) { return r.status === "Baixo"; });

    if (criticos.length === 0) {
      $listaAlertas.append('<li class="vazio" style="border:none; background:none; padding:0;">Nenhum item abaixo do mínimo nos filtros atuais.</li>');
      return;
    }

    $.each(criticos, function (i, registro) {
      const $item = $("<li>").append(
        $("<span>").text(registro.produto + " (" + registro.fornecedor + ")"),
        $("<span>").addClass("motivo").text(registro.quantidade + " / mín. " + registro.estoque_minimo)
      );
      $listaAlertas.append($item);
    });
  }

  // ------------------------------------------------------------------
  // 11) FUNÇÃO CENTRAL
  // ------------------------------------------------------------------
  function atualizarDashboard() {
    const filtrados = aplicarFiltros();
    const ordenados = aplicarOrdenacao(filtrados);

    renderizarTabela(ordenados);
    renderizarKPIs(filtrados);
    renderizarGrafico(filtrados);
    renderizarAlertas(filtrados);

    $contagem.text(filtrados.length + " de " + baseDeDados.length + " itens");
  }

  // ------------------------------------------------------------------
  // 12) EVENTOS DOS FILTROS
  // ------------------------------------------------------------------
  $buscaInput.on("input", atualizarDashboard);
  $selectCategoria.on("change", atualizarDashboard);
  $selectFornecedor.on("change", atualizarDashboard);
  $selectStatus.on("change", atualizarDashboard);

  $("#btn-limpar-filtros").on("click", function () {
    $buscaInput.val("");
    $selectCategoria.val("");
    $selectFornecedor.val("");
    $selectStatus.val("");
    ordenacao = { campo: null, direcao: "asc" };
    $cabecalhos.removeClass("ordenado-asc ordenado-desc");
    atualizarDashboard();
  });

});
