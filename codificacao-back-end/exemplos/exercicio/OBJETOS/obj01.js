function formatarProduto(obj){
    return `Produto ${obj.name} - Preço: R$${obj.valor}`
}

const produtos = {
    name: 'livro',
    valor: 32.30
}
const qualquer = 3
console.log(formatarProduto(produtos))