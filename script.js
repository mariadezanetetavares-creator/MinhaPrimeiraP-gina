```javascript
// ==========================================
// MUNDO ANIMAL
// JavaScript principal
// ==========================================


// ==========================================
// 1. CURTIDAS E REAÇÕES
// ==========================================

// Seleciona SOMENTE os botões de reação.
// Assim, o botão de modo escuro não será afetado.
const botoesReacao = document.querySelectorAll(".btn-reacao");

botoesReacao.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const contador = botao.querySelector("span");

        if (!contador) {
            return;
        }

        let quantidade = Number(contador.textContent);

        if (curtiu === false) {

            quantidade++;

            contador.textContent = quantidade;

            curtiu = true;

            botao.classList.add("reacao-ativa");

        } else {

            quantidade--;

            contador.textContent = quantidade;

            curtiu = false;

            botao.classList.remove("reacao-ativa");
        }

    });

});


// ==========================================
// 2. MODO ESCURO
// ==========================================

const btnTemaEscuro =
    document.querySelector(".btn-tema-escuro");


// Verifica se existe preferência salva
const temaSalvo =
    localStorage.getItem("tema-mundo-animal");


if (temaSalvo === "escuro") {

    document.body.classList.add("modo-escuro");

    btnTemaEscuro.textContent = "☀️";

}


// Quando clicar no botão
if (btnTemaEscuro) {

    btnTemaEscuro.addEventListener("click", mudaTema);

}


function mudaTema() {

    const corpoPagina = document.body;

    corpoPagina.classList.toggle("modo-escuro");


    // Verifica qual tema está ativo
    if (
        corpoPagina.classList.contains("modo-escuro")
    ) {

        btnTemaEscuro.textContent = "☀️";

        btnTemaEscuro.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

        localStorage.setItem(
            "tema-mundo-animal",
            "escuro"
        );

    } else {

        btnTemaEscuro.textContent = "🌙";

        btnTemaEscuro.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );

        localStorage.setItem(
            "tema-mundo-animal",
            "claro"
        );

    }

}


// ==========================================
// 3. PESQUISA DOS ARTIGOS
// ==========================================

const campoPesquisa =
    document.querySelector("#campo-pesquisa");

const artigos =
    document.querySelectorAll(".artigo-card");


if (campoPesquisa) {

    campoPesquisa.addEventListener(
        "input",
        pesquisarArtigos
    );

}


function pesquisarArtigos() {

    const texto =
        campoPesquisa.value
            .toLowerCase()
            .trim();


    let encontrouArtigo = false;


    artigos.forEach(function (artigo) {

        const conteudo =
            artigo.textContent.toLowerCase();


        if (conteudo.includes(texto)) {

            artigo.style.display = "";

            encontrouArtigo = true;

        } else {

            artigo.style.display = "none";

        }

    });


    mostrarMensagemResultado(
        encontrouArtigo,
        texto
    );

}


// ==========================================
// 4. MENSAGEM DE PESQUISA
// ==========================================

function mostrarMensagemResultado(
    encontrouArtigo,
    texto
) {

    const grade =
        document.querySelector(".artigos-grid");


    if (!grade) {
        return;
    }


    let mensagem =
        document.querySelector(".sem-resultados");


    if (
        !encontrouArtigo &&
        texto !== ""
    ) {

        if (!mensagem) {

            mensagem =
                document.createElement("p");

            mensagem.classList.add(
                "sem-resultados"
            );

            mensagem.textContent =
                "🐾 Nenhum artigo encontrado. Tente pesquisar outro assunto!";

            grade.appendChild(mensagem);

        }

    } else {

        if (mensagem) {

            mensagem.remove();

        }

    }

}


// ==========================================
// 5. ROLAGEM SUAVE
// ==========================================

const links =
    document.querySelectorAll(
        'a[href^="#"]'
    );


links.forEach(function (link) {

    link.addEventListener(
        "click",
        function (evento) {

            const destino =
                document.querySelector(
                    link.getAttribute("href")
                );


            if (destino) {

                evento.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


// ==========================================
// 6. ANIMAÇÃO DOS ARTIGOS
// ==========================================

const observador =
    new IntersectionObserver(
        function (elementos) {

            elementos.forEach(function (elemento) {

                if (elemento.isIntersecting) {

                    elemento.target.classList.add(
                        "card-visivel"
                    );

                    observador.unobserve(
                        elemento.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


artigos.forEach(function (artigo) {

    artigo.classList.add(
        "card-animado"
    );

    observador.observe(artigo);

});


// ==========================================
// 7. ANO AUTOMÁTICO
// ==========================================

const rodape =
    document.querySelector(
        ".rodape-final p"
    );


if (rodape) {

    const ano =
        new Date().getFullYear();

    rodape.textContent =
        `© ${ano} Mundo Animal — Feito com ❤️ por Maria Vitória`;

}


// ==========================================
// 8. MENSAGEM NO CONSOLE
// ==========================================

console.log(
    "🐾 Mundo Animal carregado com sucesso!"
);
```
