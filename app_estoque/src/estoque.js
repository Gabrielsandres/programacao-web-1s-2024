let produtos = []

function criarProduto(id, nome, qtd) {
    
    let p = {

        id:id,
        nome: nome,
        qtd: qtd
    };
    adicionarProduto(p)
    return p;
}

function adicionarProduto(p) {
    produtos.push(p)
}

function listarProdutos() {
    return produtos
}

function removerProduto(id) {
    produtos = produtos.filter(function (p) {
        return p.id != id;
    })
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto
}