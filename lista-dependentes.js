const cliente = {
  nome: 'Daniel',
  idade: 39,
  cpf: '6565465465',
  email: 'daniel@gmail.com',
  fones: ['55988663322', '55966332255'],
  dependentes: [{
    nome: 'Isabella Costa',
    parentesco: 'Filha',
    dataNasc: '02/05/2014'
  }]
}

cliente.dependentes.push({
  nome: 'Isaac Costa',
  parentesco: 'Filho',
  dataNasc: '14/12/2020'
})

console.log(cliente);

const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === '14/12/2020');

console.log(filhoMaisNovo[0].nome);