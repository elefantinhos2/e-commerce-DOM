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
    
}
