function teste(){
        const container = document.getElementById("container");

    dados.forEach(item => {
        const cartao = document.createElement("div");
        cartao.className = "col";

        cartao.innerHTML = `
        
           <div class="card">
            <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
            <div class="card-body">
                <h5 class="card-title">${item.conteudo}</h5>
                <p class="card-text">${item.descricao}</p>
            </div>
            </div>
        `;

        container.appendChild(cartao);
    });
}



