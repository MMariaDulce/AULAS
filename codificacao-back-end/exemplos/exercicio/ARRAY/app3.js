const noticias = []

//entrada de dados
const inNoticias = document.getElementById('inNoticia')

//ações
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListarUltimas = document.getElementById('btnListarUltimas')


const qtNoticia = document.getElementById('qtNoticia')
const qtSelecionada = document.getElementById('qtSelecionada')
const outLista = document.getElementById('outLista')

const adcionarNoticia = () => {
    const noticia = inNoticia.value
    if (noticia === '') {
        alert('invalido')
        return
    }
    noticias.push(noticia)
    qtNoticia.textContent = noticias.length

    inNoticia.value = ''
    inNoticia.focus
}
btnAdicionar.addEventListener('click', adcionarNoticia)

const listarUltimas = () => {
    const quantidadeNoticia = Number(prompt('Quantas notícias você deseja visualizar'))

    if (quantidadeNoticia === 0 || isNaN(quantidadeNoticia)) {
        alert('Digite um valor válido')
        return
    }

    const novasNoticias = noticias.reverse()

    let lista = ''
    novasNoticias.forEach((noticia, index) => {
        if (index == quantidadeNoticia) {
            return
        }
        return lista += `${index} ${noticia} \n`
    })

    outLista.textContent = lista
    qtSelecionada.textContent = quantidadeNoticia
}
btnListarUltimas.addEventListener('click', listarUltimas)

