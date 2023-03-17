
const vitrinePrincipal = new Vitrine('.containerListaProdutos ul',DataBase)

vitrinePrincipal.ListaProdutos()

const ulCarrinho = document.querySelector('.containerCarrinho ul')
const ul         = document.querySelector(".containerListaProdutos ul")
const divInfo    = document.querySelector('.containerPrecoTotal')

ul.addEventListener("click", interceptarEventoVitrine)

const vitrineCarrinhoVazio = new Vitrine('.containerCarrinho ul')

vitrineCarrinhoVazio.ListaCarrinhoVazio()

function interceptarEventoVitrine(event) {

    console.log('Estou Ouvindo')
    const buttonCompra = event.target

    if (buttonCompra.className == 'buttonCarrinho') {

        const idProduto       = buttonCompra.id
        console.log('ID: '+ idProduto)
        const produto         = DataBase.find((produto) => produto.id == idProduto);
        const listaCarrinho   = carrinhoController.adicionarProduto(produto)
        carrinhoController.precoTotal()
        carrinhoController.qtdTotal()

        const carrinhoInfoExtras = new Vitrine('.containerCarrinho section')
        const vitrineCarrinho    = new Vitrine('.containerCarrinho ul',listaCarrinho)

        vitrineCarrinho.listaProdutosCarrinho()

        if (listaCarrinho.length != 0) {
            ulCarrinho.className = 'containerCarrinhoItem'
            divInfo.className    = 'containerPrecoTotalTwo'
        }
        carrinhoInfoExtras.listaInfo()
    }
   
}

ulCarrinho.addEventListener("click", interceptarEventoCarrinho)

function interceptarEventoCarrinho(event) {
    console.log('Estou Ouvindo')

    const buttonRemover = event.target

    
    if (buttonRemover.className == 'buttonRemove') {
        
        const idProduto = buttonRemover.id
        console.log('ID: '+ idProduto)
        const listaCarrinho   = carrinhoController.removerProduto(idProduto)  
        carrinhoController.precoTotal()
        carrinhoController.qtdTotal()
        const carrinhoInfoExtras = new Vitrine('.containerCarrinho section')
        const vitrineCarrinho = new Vitrine('.containerCarrinho ul',listaCarrinho)

        vitrineCarrinho.listaProdutosCarrinho()
        if (listaCarrinho.length == 0) {
            ulCarrinho.className = 'containerCarrinhoVazio'
            divInfo.className    = 'containerPrecoTotal'
            const vitrineCarrinhoVazio = new Vitrine('.containerCarrinho ul')
            vitrineCarrinhoVazio.ListaCarrinhoVazio()
        }
        carrinhoInfoExtras.listaInfo()
    }
}

ul.addEventListener("click", FiltraPorTipoButton)

function FiltraPorTipoButton(event) {
    
    const buttonFilter = event.target

    if (buttonFilter.className == 'buttonType') {
        const tipo = buttonFilter.id
        const listaVitrine = DataBase.filter((produto) => {
           return  produto.tipo == tipo
        })
        const novaVitrinePrincipal = new Vitrine('.containerListaProdutos ul',listaVitrine)
        novaVitrinePrincipal.ListaProdutos()
    }
}

const ulHeader = document.querySelector('.mainHeader ul')
ulHeader.addEventListener("click", FiltraPorTipoHeader)

function FiltraPorTipoHeader(event) {

    const linkFilter = event.target

    if (linkFilter.tagName == 'A') {
        console.log('Oi sou um Link :)')
        const tipo = linkFilter.className

        if  (tipo == 'Todos') {
            return vitrinePrincipal.ListaProdutos()
        }

        const listaVitrine = DataBase.filter((produto) => {
            return produto.tipo == tipo
        })

        const novaVitrinePrincipal = new Vitrine('.containerListaProdutos ul',listaVitrine)
        novaVitrinePrincipal.ListaProdutos()
    }
}