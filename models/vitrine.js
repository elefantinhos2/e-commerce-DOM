class Vitrine  {
    
    constructor(querySelector,ListaProduto) {
        this._querySelector = document.querySelector(querySelector),
        this._ListaProduto  = ListaProduto
    }

    ListaProdutos() {
        const corpoLista = document.querySelector('.containerListaProdutos ul')
    
        this._querySelector.innerHTML = ' '
        const teste = this._ListaProduto.forEach((produto) => {
            const card = this.CardProduto(produto)
            console.log(card)
            this._querySelector.appendChild(card)
            return card
        })
        return teste

    }

    CardProduto = ({id, nome, tipo, img, descricao, preco}) => {
       
        const li = document.createElement('li')

        li.innerHTML = `
            <figure>
                <img src="${img}" alt="${nome}">
            </figure>
            <div class="${'cardDescricao'}">
                <button class=${'buttonType'} id=${tipo}>${tipo}</button>
                <h3>${nome}</h3>
                <p>${descricao}</p>
                <p>${preco}</p>
                <button class="buttonCarrinho" id=${id}>Adicionar ao Carrinho</button>
            </div>
        `

        return li
    }
}
