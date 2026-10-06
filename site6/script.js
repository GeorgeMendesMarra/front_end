/* Painel de Controle de Estoque — versão Bootstrap.
   A lógica (jQuery) é a mesma do site5; o que muda é o HTML gerado:
   agora ele usa classes do Bootstrap (badge, progress, list-group...). */
$(function () {
  let ord = { campo: null, dir: "asc" };

  const $busca = $("#filtro-busca"), $cat = $("#filtro-categoria"),
        $forn = $("#filtro-fornecedor"), $status = $("#filtro-status"),
        $th = $(".table thead th");

  // 1) Lê os dados embutidos no HTML (mesma técnica do site5) e calcula o status
  const base = JSON.parse($("#base-dados").text()).map(function (r) {
    const s = r.quantidade < r.estoque_minimo ? "Baixo"
            : r.quantidade <= r.estoque_minimo * 1.5 ? "Atenção" : "Normal";
    return $.extend({}, r, { status: s });
  });

  // 2) Preenche os <select> com valores únicos
  [["categoria", $cat], ["fornecedor", $forn]].forEach(function (par) {
    $.each([...new Set(base.map(r => r[par[0]]))].sort(), function (i, v) {
      par[1].append($("<option>").val(v).text(v));
    });
  });

  const moeda = v => "R$ " + v.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  // Cor de badge do Bootstrap para cada status
  const corStatus = { "Normal": "success", "Atenção": "warning", "Baixo": "danger" };

  function filtrar() {
    const t = $busca.val().trim().toLowerCase();
    return base.filter(r =>
      r.produto.toLowerCase().includes(t) &&
      (!$cat.val() || r.categoria === $cat.val()) &&
      (!$forn.val() || r.fornecedor === $forn.val()) &&
      (!$status.val() || r.status === $status.val()));
  }

  function ordenar(lista) {
    if (!ord.campo) return lista;
    const m = ord.dir === "asc" ? 1 : -1;
    return lista.slice().sort((a, b) =>
      typeof a[ord.campo] === "number"
        ? (a[ord.campo] - b[ord.campo]) * m
        : String(a[ord.campo]).localeCompare(String(b[ord.campo])) * m);
  }

  function valorPorCategoria(lista) {
    const g = {};
    lista.forEach(r => g[r.categoria] = (g[r.categoria] || 0) + r.quantidade * r.preco_unitario);
    return Object.entries(g).map(([categoria, valor]) => ({ categoria, valor }))
                 .sort((a, b) => b.valor - a.valor);
  }

  function tabela(lista) {
    const $c = $("#corpo-tabela").empty();
    if (!lista.length) {
      $c.html('<tr><td colspan="7" class="text-center text-body-secondary py-4">Nenhum item encontrado.</td></tr>');
      return;
    }
    $.each(lista, function (i, r) {
      $c.append($("<tr>").append(
        $("<td>").text(r.produto), $("<td>").text(r.categoria),
        $("<td>").text(r.quantidade), $("<td>").text(r.estoque_minimo),
        $("<td>").text(moeda(r.preco_unitario)), $("<td>").text(r.fornecedor),
        $("<td>").append($("<span>").addClass("badge text-bg-" + corStatus[r.status]).text(r.status))));
    });
  }

  function kpis(lista) {
    const vazio = !lista.length;
    $("#kpi-total").text(lista.length);
    $("#kpi-valor").text(vazio ? "—" : moeda(lista.reduce((s, r) => s + r.quantidade * r.preco_unitario, 0)));
    $("#kpi-baixo").text(vazio ? "—" : lista.filter(r => r.status === "Baixo").length);
    $("#kpi-destaque").text(vazio ? "—" : valorPorCategoria(lista)[0].categoria);
  }

  // Gráfico feito com a barra de progresso do Bootstrap (.progress)
  function grafico(lista) {
    const $g = $("#grafico").empty(), v = valorPorCategoria(lista);
    if (!v.length) { $g.html('<p class="text-body-secondary mb-0">Sem dados para exibir.</p>'); return; }
    $.each(v, function (i, it) {
      const pct = (it.valor / v[0].valor) * 100;
      $g.append(
        '<div class="mb-3"><div class="d-flex justify-content-between small mb-1"><span>' +
        it.categoria + '</span><span class="text-body-secondary">' + moeda(it.valor) +
        '</span></div><div class="progress"><div class="progress-bar" style="width:' + pct + '%"></div></div></div>');
    });
  }

  // Alertas com a lista do Bootstrap (.list-group)
  function alertas(lista) {
    const $l = $("#alertas").empty(), b = lista.filter(r => r.status === "Baixo");
    if (!b.length) { $l.append('<li class="list-group-item text-body-secondary">Nenhum item abaixo do mínimo.</li>'); return; }
    $.each(b, function (i, r) {
      $l.append($("<li>").addClass("list-group-item d-flex justify-content-between align-items-center").append(
        $("<span>").text(r.produto),
        $("<span>").addClass("badge text-bg-danger").text(r.quantidade + " / mín. " + r.estoque_minimo)));
    });
  }

  function atualizar() {
    const f = filtrar();
    tabela(ordenar(f)); kpis(f); grafico(f); alertas(f);
    $("#contagem").text(f.length + " de " + base.length + " itens");
  }

  $busca.on("input", atualizar);
  $cat.add($forn).add($status).on("change", atualizar);

  $th.on("click", function () {
    const campo = $(this).data("campo");
    ord = { campo: campo, dir: ord.campo === campo && ord.dir === "asc" ? "desc" : "asc" };
    $th.removeClass("ordenado-asc ordenado-desc");
    $(this).addClass("ordenado-" + ord.dir);
    atualizar();
  });

  $("#btn-limpar").on("click", function () {
    $busca.val(""); $cat.val(""); $forn.val(""); $status.val("");
    ord = { campo: null, dir: "asc" };
    $th.removeClass("ordenado-asc ordenado-desc");
    atualizar();
  });

  // Tema claro/escuro: o Bootstrap 5.3 troca as cores só com data-bs-theme
  $("#btn-tema").on("click", function () {
    const html = document.documentElement;
    html.setAttribute("data-bs-theme", html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark");
  });

  atualizar();
});
