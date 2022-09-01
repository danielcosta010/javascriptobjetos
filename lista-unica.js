const clientes = [
  {
    nome: 'Daniel',
    idade: 39,
    cpf: '6565465465',
    email: 'daniel@gmail.com',
    fones: ['55988663322', '55966332255'],
  
    dependentes: [{
      nome: 'Isabella Costa',
      parentesco: 'Filha',
      dataNasc: '02/05/2014'
    }],
  },
  {
    nome: 'Polliana',
    idade: 40,
    cpf: '66955488712',
    email: 'polliana@gmail.com',
    fones: ['55988663322', '55966332255'],

    dependentes: [{
      nome: 'Isaac Costa',
      parentesco: 'Filho',
      dataNasc: '02/05/2020'
    }]
  }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(listaDependentes);
console.table(listaDependentes);

// Destructuring espalhamento
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

console.log(numeros);

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];


console.log(num1, num2, outrosNumeros);