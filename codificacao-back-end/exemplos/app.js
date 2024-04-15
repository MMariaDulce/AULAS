const candidatos = []
const acertos = []

//entrada de dados
const inNomes = document.getElementById('inNome')

//ações
const btnAdicionar = document.getElementById('btnAdicionar')
const btnFiltrar = document.getElementById('btnFiltrar')

//saída de dados
const outLista = document.getElementById('outLista')


const listarNomes = () => {
    if(nomes.length === 0){
        alert('Não existe nomes no sitema')
        return
    }
    
    let lista = ''
    nomes.forEach((nome)=>{
        return lista += `${nome.candidatos} = ${nome.acertos} `
    })
    //console.log(lista)
    outLista.textContent = lista
};
btnAdicionar.addEventListener("click", listarNomes);

const filtrarPorNotas = () => {
    const notaMaior = Number(prompt('Digite a maior nota'))
    if(notaMaior=== 0 || isNaN(notaMaior)){
        alert('Preencha o campo corretamente')
        return;
    }
    const notasFiltros = nomes.filter((nome) => nome.acertos <= notaMaior)
    
    console.log(notasFiltros)

    let lista = ''
    notasFiltros.forEach((nome) => {
        return (lista += `${nome.candidatos} - R$${nome.acertos} \n`);
    });
    outLista.textContent = lista;
};
btnFiltrar.addEventListener("click", filtrarPorNotas);