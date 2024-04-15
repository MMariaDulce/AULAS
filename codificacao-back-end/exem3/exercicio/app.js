const candidatos = []

//entrada de dados
const inNotas = document.getElementById('inNotas')
const inNomes = document.getElementById('inNome')

//ações
const btnAdicionar = document.getElementById('btnAdicionar')
const btnFiltrar = document.getElementById('btnFiltrar')

//saída de dados
const outLista = document.getElementById('outLista')


const adicionarNomes = () => {
    const nome = inNomes.value
    const notas = Number(inNotas.value)
    if(nome === ''){
        alert('Preencha os dados corretamente')
        return
    }
    candidatos.push({nome: nome, notas: notas})

    let lista = ''

    candidatos.forEach((nom) => {
        return lista += ` Nome: ${nom.nome} Nota: ${nom.notas} \n` 
    })

    outLista.textContent = lista

    console.log(candidatos)
    inNomes.value = ''
};

btnAdicionar.addEventListener('click', adicionarNomes);

const filtrarPorNotas = () => {
    const notaMaior = Number(prompt('Digite a nota minima'))
    if(notas < 0 || notas > 11){
        alert('Preencha o campo corretamente')
        return;
    }    
    const notasFiltros = notas.filter((notas) => notas.notas <= notaMaior)
    
    console.log(notasFiltros)

    let lista = ''
    notasFiltros.forEach((notas) => {
        return (lista += `${notas.notas} - ${notas.acertos} \n`);
    });
    outLista.textContent = lista;
};

btnFiltrar.addEventListener("click", filtrarPorNotas);