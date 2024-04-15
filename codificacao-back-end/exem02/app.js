const erros = []
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);
const tentativas = 6

//inserir dados
const inNumero = document.getElementById('inNumero')

//ações
const btnApostar = document.getElementById('btnApostar')
const btnJogarNovamente = document.getElementById('btnJogar')

//saída de dados
const outErros = document.getElementById('outErros')
const outChances = document.getElementById('outChances')
const outDica = document.getElementById('outDica')


const apostarNumero = () => {
    const numero = Number(inNumero.value)
    if (numero === 0 || isNaN(numero)) {
        alert('Número inválido')
        return
    }

    if (numero == numeroAleatorio) {
        alert('Você acertou o número')
        outDica.textContent = 'Parabéns! Você acertou!'
        btnApostar.disabled = true  // disabled: para desabilitar o botão 
    } else {
        if (erros.indexOf(numero) >= 0) {
            alert(`Você já apostou o número, tente outro!`)
        } else {
            erros.push(numero)
            let numeroErros = erros.length
            let numeroChances = tentativas - numeroErros

            outErros.textContent = `${numeroErros} (${erros.join(', ')})`
            outChances.textContent = numeroChances

            if (numero > numeroAleatorio) {
                outDica.textContent = `O número secreto é menor que ${numero}`
            } else {
                outDica.textContent = `O número secreto é maior que ${numero}`
            }

            if (numeroChances == 0) {
                btnApostar.disabled = true
                alert `Suas chances acabaram`
                outDica.textContent = `o número secreto era: ${numeroAleatorio}`
            }
        }

        inNumero.value = ''
    }
}

btnApostar.addEventListener('click', apostarNumero)

const jogarDeNovo = () => {
    window.location.reload()
}
btnJogarNovamente.addEventListener('click', jogarDeNovo)