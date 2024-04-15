const numeros = [];

const inNumero = document.getElementById('inNumero');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnVerificar = document.getElementById('btnVerificar');
const outNumero = document.getElementById('outNumero');
const outResposta = document.getElementById('outResposta');

const adicinarNumero = () => {
    const numero = Number(inNumero.value)
    if(numero === 0 || isNaN(numero)){
        alert('Digite um valor válido')
        inNumero.focus();
        return;
    }
    if(!numeros.includes(numero)){
        numeros.push(numero);
    }else {
        alert("Digite um número diferente");
    }

    outNumero.innerHTML = `Números (${numeros.join(', ')})`
    inNumero.value = ''
    inNumero.focus()
};
btnAdicionar.addEventListener("click", adicinarNumero);

const verificarOrdem = () => {
    if(numeros.length === 0){
        alert('Quantidade de numeros insuficiente!')
        inNumero.focus()
        return
    }

    const validaOrdem = numeros.every((numero, index)=>{
            if(index === numros.length - 1){
                return true;
            }
            return numero < numeros
            if (validaOrdem) {}
    })
    console.log(`Retorno do array: ${validaOrdem}`)
};
btnVerificar.addEventListener("click", verificarOrdem)