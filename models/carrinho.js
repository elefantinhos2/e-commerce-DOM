class carrinhoController {

    static carrinho = {
        produtos: [],
    
        precoTotal: 0,
        
        qtdProdutos: 0,
    }
    
    static adicionarProduto(objetoProduto) {
    
        console.log('Adicionar') //Testando saida do ação adicionar**
        console.log(objetoProduto)
        console.log(this.carrinho.produtos)
        this.carrinho.produtos.push(objetoProduto)
        console.log(this.carrinho.produtos)
        return this.carrinho.produtos

    }
    
    static removerProduto(idProduto) {
        
        console.log('remove') //Testando saida da ação remover**
        const produto = this.carrinho.produtos.findIndex((produto) => produto.id == idProduto)
        this.carrinho.produtos.splice(produto,1)
        console.log(this.carrinho.produtos)
        return this.carrinho.produtos
    }
    
    static removerTodosProdutos() {
    
        console.log('removerTodos') //Testando saida da açaõ removerTodos**
    
    }

    static precoTotal() {
        this.carrinho.precoTotal = 0
        const preco = this.carrinho.produtos.forEach((produto) => {
            const arrayPreco = produto.preco.split(' ')
            console.log('preço:'+arrayPreco[1])
            this.carrinho.precoTotal += Number(arrayPreco[1])
            console.log(this.carrinho.precoTotal)
        })

        // this.carrinho.precoTotal += Number(preco)
    }

    static qtdTotal() {

        this.carrinho.qtdProdutos = this.carrinho.produtos.length
        console.log(this.carrinho.qtdProdutos)
    }
    
}
