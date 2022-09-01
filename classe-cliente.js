class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo);
  }

}

const daniel = new Cliente('Daniel', 'daniel@email.com', '12365487899', 100);

daniel.depositar(122);

console.log(daniel);
daniel.exibirSaldo();


// 

daniel.depositar(3838);
daniel.exibirSaldo();
