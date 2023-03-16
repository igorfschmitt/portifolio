alert("Possívelmente o site não funcionará corretamente devido a falta de conexão com o banco de dados")


fetch("http://localhost:3000/tranquility")
    .then((response) => { return response.json(); })
    .then((tranquilityJSON) => {
        /* let cardapio = document.getElementById("cardapio"); */
        for (tranquility of tranquilityJSON) {
            let tranquilityHTML = document.createElement("h2");
            tranquilityHTML.innerText = tranquility.nome + tranquility.duracao;
            cardapio.appendChild(tranquilityHTML);
        }
    });