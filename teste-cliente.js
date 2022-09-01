function cliente (nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;

  this.depositar = function(valor) {
    this.saldo += valor;
  }
}

const daniel = new cliente('Daniel', '01254569899', 'daniel@email.com', 100);


daniel.depositar(30);
console.log(daniel);