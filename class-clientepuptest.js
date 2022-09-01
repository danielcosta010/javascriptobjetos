class Cliente {
  constructor(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }
  exibirSaldo() {
    console.log(this.saldo);
  }
}
 const daniel = new Cliente('Daniel', '11365478966', 'daniel@email.com', 100);


 class ClientePoupanca extends Cliente {
  constructor(nome, cpf, email, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
  exibirSaldoPupanca() {
    console.log(this.saldoPoupanca);
  }
 }

 const isabella = new ClientePoupanca('Isabella', '12365456988', 'isabella@email.com', 100, 600);

 console.log(daniel);
 console.log(isabella);

 daniel.depositar(450);
 isabella.depositar(150);
 isabella.depositarPoupanca(330);

 console.log(daniel);
 daniel.exibirSaldo()
 console.log(isabella);
 isabella.exibirSaldo();
 isabella.exibirSaldoPupanca()