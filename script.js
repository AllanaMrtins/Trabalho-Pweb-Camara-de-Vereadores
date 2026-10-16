

const vereadores = [
    { nome: "Antonio Ribeiro", partido: "PT", iniciais: "AR" },
    { nome: "Edivaldo Fontes", partido: "PT", iniciais: "EF" },
    { nome: "Francisco Márcio", partido: "MDB", iniciais: "FM" },
    { nome: "Henrique Leal", partido: "PT", iniciais: "HL" },
    { nome: "Jofran Lopes", partido: "PT", iniciais: "JL" },
    { nome: "Paulo Cortez", partido: "MDB", iniciais: "PC" },
    { nome: "Peterson Barbosa", partido: "PSD", iniciais: "PB" },
    { nome: "João Olimpio", partido: "MDB", iniciais: "JO" },
    { nome: "Tiago Leal", partido: "PSD", iniciais: "TL" }
];


const sessoes = [
    {
        data: "21/09/2026",
        horario: "19:30h",
        tipo: "Ordinária",
        local: "Edifício Vereador Luis Ramos"
    },
    {
        data: "28/09/2026",
        horario: "19:30h",
        tipo: "Ordinária",
        local: "Edifício Vereador Luis Ramos"
    },
    {
        data: "05/10/2026",
        horario: "19:30h",
        tipo: "Ordinária",
        local: "Edifício Vereador Luis Ramos"
    }
];


const listaVereadores = document.getElementById("listaVereadores");
const campoBusca = document.getElementById("buscarVereador");
const resultadoBusca = document.getElementById("resultadoBusca");

function mostrarVereadores(lista) {
    listaVereadores.innerHTML = "";

    if (lista.length === 0) {
        resultadoBusca.textContent = "Nenhum vereador encontrado.";
        return;
    }

    resultadoBusca.textContent =
        lista.length + (lista.length === 1
            ? " vereador encontrado."
            : " vereadores encontrados.");

    lista.forEach(function (vereador) {
        const cartao = document.createElement("article");

        const avatar = document.createElement("div");
        avatar.classList.add("avatar");
        avatar.textContent = vereador.iniciais;
        avatar.setAttribute("aria-hidden", "true");

        const nome = document.createElement("h3");
        nome.textContent = vereador.nome;

        const partido = document.createElement("p");
        partido.textContent = vereador.partido;

        cartao.appendChild(avatar);
        cartao.appendChild(nome);
        cartao.appendChild(partido);

        listaVereadores.appendChild(cartao);
    });
}


mostrarVereadores(vereadores);

campoBusca.addEventListener("input", function () {
    const termo = campoBusca.value
        .trim()
        .toLowerCase();

    const encontrados = vereadores.filter(function (vereador) {
        return vereador.nome.toLowerCase().includes(termo) ||
               vereador.partido.toLowerCase().includes(termo);
    });

    mostrarVereadores(encontrados);
});


const listaSessoes = document.getElementById("listaSessoes");

function mostrarSessoes() {
    listaSessoes.innerHTML = "";

    sessoes.forEach(function (sessao) {
        const linha = document.createElement("tr");

        const data = document.createElement("td");
        data.textContent = sessao.data;

        const horario = document.createElement("td");
        horario.textContent = sessao.horario;

        const tipo = document.createElement("td");
        tipo.textContent = sessao.tipo;

        const local = document.createElement("td");
        local.textContent = sessao.local;

        linha.appendChild(data);
        linha.appendChild(horario);
        linha.appendChild(tipo);
        linha.appendChild(local);

        listaSessoes.appendChild(linha);
    });
}

mostrarSessoes();


const linksMenu = document.querySelectorAll(".nav a");
const secoes = document.querySelectorAll("main section");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        linksMenu.forEach(function (item) {
            item.classList.remove("ativo");
        });

        link.classList.add("ativo");
    });
});

function atualizarMenu() {
    let secaoAtual = "";

    secoes.forEach(function (secao) {
        const posicao = secao.getBoundingClientRect();

        if (posicao.top <= 150 && posicao.bottom > 150) {
            secaoAtual = secao.id;
        }
    });

    linksMenu.forEach(function (link) {
        link.classList.toggle(
            "ativo",
            link.getAttribute("href") === "#" + secaoAtual
        );
    });
}


const botaoTopo = document.getElementById("voltarTopo");

function verificarRolagem() {
    botaoTopo.classList.toggle("visivel", window.scrollY > 300);
    atualizarMenu();
}

window.addEventListener("scroll", verificarRolagem);

botaoTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const formulario = document.querySelector("#contato form");
const retornoFormulario = document.getElementById("retornoFormulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        retornoFormulario.textContent =
            "Preencha todos os campos obrigatórios.";
        retornoFormulario.className = "mensagem-erro";
        return;
    }

    const contato = {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
    };

    console.log("Dados do formulário:", contato);

    retornoFormulario.textContent = "Formulário enviado com sucesso! ";

    retornoFormulario.className = "mensagem-sucesso";

    formulario.reset();
});
