const cliente = {
  nome: 'Daniel',
  idade: 39,
  cpf: '6565465465',
  email: 'daniel@gmail.com'
}

cliente.dependentes = {
  nome: 'Isabella',
  parentesco: 'Filha',
  dataNasc: '02/05/2014'
}

console.log(cliente);

cliente.dependentes.nome = 'Isabella Costa';

console.log(cliente);