const data = require('./onibus.json')
console.log(data)

// ctrl + alt n 

const Horarios = (x) => {
  const linha = data.linhas.find((linha)=>linha.id === x)
  if(linha){
    const horarios = linha.horarios.map((horario)=> `Saída: ${horario.saida}
    , Chegada: ${horario.chegada}`)
      return horarios.joim('\n')
  }else {
    return {message: 'Não existe essa linha'}
  }

}

const id_linha = 1
console.log(Horarios(id_linha))

 
