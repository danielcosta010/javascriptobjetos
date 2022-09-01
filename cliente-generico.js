function cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;

  this.depositar = function(valor) {
    this.saldo += valor;
  }
}

const daniel = new cliente('Daniel', '03214569874', 'danie@email.com', 100);

console.log(daniel);