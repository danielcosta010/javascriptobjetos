const cliente = {
  nome: 'Daniel',
  idade: 39,
  cpf: '6565465465',
  email: 'daniel@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];

console.log(cliente[chaves[1]]);

chaves.forEach( info => console.log(cliente[info]));