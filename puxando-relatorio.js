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
  },
  {
    nome: 'Isaac Costa',
    parentesco: 'Filho',
    dataNasc: '14/12/2020'
  }],
  saldo: 100,
  depositar: function(valor) {
    this.saldo += valor;
  }
}

let relatorio = '';
for (let dado in cliente) {
  if(typeof cliente[dado] === 'object' || typeof cliente[dado] === 'function') {
    continue
  } else {
      relatorio += `
      ${dado}: ${cliente[dado]}
      `
  }
}

console.log(relatorio);
