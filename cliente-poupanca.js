function cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;

  this.depositar = function(valor) {
    this.saldo += valor;
  }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  cliente.call(this, nome, cpf, email, saldo)
  this.saldoPoup = saldoPoup;
}

const daniel = new cliente('Daniel', '03214569874', 'danie@email.com', 100);

const isabella = new clientePoupanca('Isabella', '21233365489877', 'isabella@email.com', 100, 200)

console.log(isabella);

clientePoupanca.prototype.depositarPoup = function(valor) {
  this.saldoPoup += valor;
}
isabella.depositarPoup(125);

console.log(isabella.saldoPoup);

const catalogo = {
  "editora": "Casa do Código",
  "catalogo": [
  {
    "id": 50,
    "titulo": "Primeiros Passos com NodeJS",
    "autor": "João Rubens",
    "categoria": "programação",
    "versoes": ["ebook", "impresso"]
  }
 ]}

 console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"));

  console.log(daniel.hasOwnProperty("saldoPoup"))
  console.log(isabella.hasOwnProperty("saldoPoup"))
  console.log(daniel instanceof cliente)
  console.log(typeof daniel)
  console.log(typeof isabella)
  console.log(isabella instanceof clientePoupanca)
  console.log(Function.prototype.isPrototypeOf(cliente))
  console.log(cliente.constructor === Function)