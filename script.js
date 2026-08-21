```javascript
// =========================================
// MUNDO ANIMAL
// SCRIPT.JS
// =========================================


// =========================================
// CURTIDAS
// =========================================

const botoesReacao =
    document.querySelectorAll(".btn-reacao");


botoesReacao.forEach(function (botao) {

    let curtiu = false;


    botao.addEventListener("click", function () {

        const contador =
            botao.querySelector("span");


        if (!contador) {
            return;
        }


        let quantidade =
            Number(contador.textContent);


        if (curtiu === false) {

            quantidade++;

            curtiu = true;

            botao.classList.add("reacao-ativa");

        } else {

            quantidade--;

            curtiu = false;

            botao.classList.remove("reacao-ativa");

        }


        contador.textContent = quantidade;

    });

});


// =========================================
// MODO ESCURO
// =========================================

const btnTemaEscuro =
    document.querySelector(".btn-tema-escuro");


const temaSalvo =
    localStorage.getItem("tema-mundo-animal");


if (temaSalvo === "escuro") {

    document.body.classList.add("modo-escuro");

    btnTemaEscuro.textContent = "☀️";

}


if (btnTemaEscuro) {

    btnTemaEscuro.addEventListener(
        "click",
        mudaTema
    );

}


function mudaTema() {

    const corpoPagina =
        document.body;


    corpoPagina.classList.toggle(
        "modo-escuro"
    );


    const modoEscuro =
        corpoPagina.classList.contains(
            "modo-escuro"
        );


    if (modoEscuro) {

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


// =========================================
// ROLAGEM SUAVE
// =========================================

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


// =========================================
// ANO AUTOMÁTICO
// =========================================

const ano =
    document.querySelector("#ano");


if (ano) {

    ano.textContent =
        new Date().getFullYear();

}


// =========================================
// MENSAGEM NO CONSOLE
// =========================================

console.log(
    "🐾 Mundo Animal carregado com sucesso!"
);
```
