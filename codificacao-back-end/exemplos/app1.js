const clubes = [];

const inNome = document.getElementById('inNome');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnListar = document.getElementById('btnListar');
const btnMontarTabela = document.getElementById('btnMontarTabela');
const outLista = document.getElementById('outLista');

const adicionarClube = () => {
    const clube = inNome.value
    if(clube ===''){
        alert('Por favor, digite o nome do clube')
        inNome.focus()
        return
    }
    if(clubes.includes(clube)) { //includes = verificar se o valor foi inserido no array
        clubes.push(clube)
    }else{
        alert('Clube já existe')
    }
    inNome.value=''

}
btnAdicionar.addEventListener("click", adicionarClube);

const mostrarClubes = () => {
    if(clubes.length === 0){
        alert('Não clubes cadastrados')
        return
    }
    let lista = ''
    clubes.forEach((clube, index)=>{
        return(lista += `${index + 1}. ${clube}/n`)
    })
    outLista.textContent = lista
    console.log("Listar");
}
btnListar.addEventListener("click", mostrarClubes);

const montarTabela = () => {
    if(clubes.length == 0 || clubes.length % 2 !=0){
        alert('Erro: Números de times ímpar ou zero')
        return
    }
    console.log(clubes);
    const metadeInicio = clubes.slice(0, clubes.length /2);
    console.log(metadeInicio);
    const metadeFim = clubes.slice(clubes.length / 2, clubes.length).reverse;
    console.log(metadeFim);

    let lista = "";
    for(let i = 0; i< metadeInicio.length; i++) {
        lista += `${i+ 1} Jogo - ${metadeInicio{i} x ${metadeFim[i]}}`

    }
};
btnListar.addEventListener("click", mostrarClubes);