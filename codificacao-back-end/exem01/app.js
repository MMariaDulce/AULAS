const pacientes = []

//entrada de dados
const inPaciente = document.getElementById('inPaciente')

//ações
const btnAdicionar = document.getElementById('btnAdicionar')
const btnUrgência = document.getElementById('btnUrgência')
const btnAtender = document.getElementById('btnAtender')

//saída de dados
const outAtendimento = document.getElementById('outAtendimento')
const outLista = document.getElementById('outLista')

const adicionarPaciente = () => {
    const paciente = inPaciente.value
    if(paciente === ''){
        alert('Preencha os dados corretamente')
        return
    }
    pacientes.push(paciente)

    let lista = ''

    pacientes.forEach((paciente, index) => {
        return lista += `${index+1}. ${paciente} \n` 
    })

    outLista.textContent = lista

    console.log(pacientes)
    inPaciente.value = ''
}

btnAdicionar.addEventListener('click', adicionarPaciente)

const adicinarUrgencia = () => {
    const paciente = inPaciente.value
    if(paciente === ''){
        alert('Preencha os dados corretamente')
        return
    }
    pacientes.unshift(paciente)

    let lista = ''

    pacientes.forEach((paciente, index) => {
        return lista += `${index+1}. ${paciente} \n` 
    })

    outLista.textContent = lista

    console.log(pacientes)
    inPaciente.value = ''
}

btnUrgência.addEventListener('click', adicinarUrgencia)

const atenderPaciente = () => {
    if(pacientes === ''){
        alert('Preencha os dados corretamente')
        return
    }
    const atendimento = pacientes.shift()
    outAtendimento.textContent = atendimento

    let lista = ''

    pacientes.forEach((paciente, index) => {
        return lista += `${index+1}. ${paciente} \n` 
    })

    outLista.textContent = lista

    console.log(pacientes)
    inPaciente.value = ''
}

btnAtender.addEventListener('click', atenderPaciente)

