function cartao(){
        const container = document.getElementById("container");

    dados.forEach(item => {
        const cartao = document.createElement("div");
        cartao.className = "col";

        cartao.innerHTML = `
        
           <div class="col">
            <img src="${dados.imagem}" class="card-img-top" alt="${dados.tituloimg}">
            <h3>${dados.titulo}</h3>
            <div class="card-body">
                <p class="card-text">${dados.descricao}</p>
                <p class="card-title">${dados.conteudo}</p>
            </div>
            </div>
            <a class="botao-cartao" href="detalhes.html" id=${dados.id}">Leia mais</a>
        `;
        container.appendChild(cartao);
    });
}



