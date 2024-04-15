
const modelo = []

//entrada de dados
const inPaciente = document.getElementById('inModelo')

//ações
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnFiltrar = document.getElementById('btnFiltrar')

//saída de dados
const outLista = document.getElementById('outLista')


const listarCarro = () => {
    if(carros.length == 0){
        alert('Não carro no sistema')
        return
    }
    
    let lista = ''
    carros.forEach((carro)=>{
        return lista += `${carro.modelo} = ${carro.preco} `
    })
    //console.log(lista)
    outLista.textContent = lista
};
btnListar.addEventListener("click", listarCarro);

const filtrarPorPreco = () => {
    const valorMaximo = Number(prompt('Digite o valor máximo'))
    if(valorMaximo === 0 || isNaN(valorMaximo)){
        alert('Preencha o campo corretamente')
        return;
    }
    const carrosFiltros = carros.filter((carro) => carro.preco <= valorMaximo)
    
    console.log(carrosFiltros)

    let lista = ''
    carrosFiltros.forEach((carro) => {
        return (lista += `${carro.modelo} - R$${carro.preco} \n`);
    });
    outLista.textContent = lista;
};
btnFiltrar.addEventListener("click", filtrarPorPreco);
