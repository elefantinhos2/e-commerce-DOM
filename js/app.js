
const vitrinePrincipal = new Vitrine('.containerListaProdutos ul',DataBase)

vitrinePrincipal.ListaProdutos()

const ulCarrinho = document.querySelector('.containerCarrinho ul')
const ul         = document.querySelector(".containerListaProdutos ul")

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
        const vitrineCarrinho = new Vitrine('.containerCarrinho ul',listaCarrinho)

        vitrineCarrinho.listaProdutosCarrinho()

        if (listaCarrinho.length != 0) {
            ulCarrinho.className = 'containerCarrinhoItem'
        }
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
        const vitrineCarrinho = new Vitrine('.containerCarrinho ul',listaCarrinho)
        vitrineCarrinho.listaProdutosCarrinho()
        if (listaCarrinho.length == 0) {
            ulCarrinho.className = 'containerCarrinhoVazio'
            const vitrineCarrinhoVazio = new Vitrine('.containerCarrinho ul')
            vitrineCarrinhoVazio.ListaCarrinhoVazio()
        }
    }
}
