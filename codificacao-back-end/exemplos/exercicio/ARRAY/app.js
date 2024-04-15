const candidatos = []
const acertos = []

//entrada de dados
const inNomes = document.getElementById('inNome')
const inAcertos = document.getElementById('inAcertos')

//ações
const btnAdicionar = document.getElementById('btnAdicionar')
const btnAprovados = document.getElementById('btnListartodos')

//saída de dados
const outLista = document.getElementById('outLista')


const adicionarCandidatos = () => {
    const nome = inNome.value
    const acertos = Number(inAcertos.value)
    if(nomes === '' || acertos === 0 || isNaN(acertos)){
        alert('Preencha os dados corretamente')
        return
    }

    candidatos.push({nome:nome, pontos:acertou})
    inNome.value = ''
    inAcertos.value = ''
    console.log(candidatos)
    
    let lista = ''
    candidatos.forEach((candidato)=>{
        return lista += `Candidato: ${candidato.nome} - Pontuação ${candidato.pontos} \n`
    })
    outLista.textContent = lista
};
btnAdicionar.addEventListener("click", adicionarCandidatos);

const filtrarAprovados = () => {
    const notaCorte = Number(prompt('Digite a nota de corte'))
    if(notaCorte<= 0 || isNaN(notaCorte)){
        alert('Preencha o campo corretamente')
        return;
    }
    const notasFiltros = candidatos.filter((candidato) =>{
    return candidato.ponto >= notaCorte
    
})
    const candidatosEmOrdem = filtrarCandidato.sort((a,b)=>{
        return b.pontos - a.pontos
    })
    
    let lista = ''
    candidatosEmOrdem.forEach((candidato) => {
        return (lista += `${candidato.nome} - ${candidato.pontos} \n`);
    });
    outLista.textContent = lista;
};
btnAprovados.addEventListener("click", filtrarAprovados);