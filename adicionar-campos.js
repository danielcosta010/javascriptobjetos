const cliente = {
  nome: 'Daniel',
  idade: 39,
  cpf: '6565465465',
  email: 'daniel@gmail.com'
}

console.log(cliente);

cliente.fone = '958658874';

console.log(cliente);

cliente.fone = '988556622';

console.log(cliente);

delete cliente.idade;
console.log(cliente);