/**
 * 
 *  @author Daniel
 * 
 * Representa uma conta bancária simples.
 * * Essa classe contém dados privados (#) prezando as boas práticas e segurança.
 * Permite depósitos, saques e consulta de saldo e extrato.
 * * Essa classe utiliza Getters para acessar os dados.
 * * @property {string} #nome - Nome do titular da conta.
 * @property {number} #saldo - O valor atual do saldo. Inicializa em 0.
 * @property {number[]} #entradas - Lista de valores depositados (extrato de entrada).
 * @property {number[]} #saidas - Lista de valores sacados (extrato de saída).
 * * @param {string} nome - O nome do titular, passado no momento da criação da conta.
 */
class ContaBancaria {
    #nome
    #saldo
    #entradas
    #saidas
    constructor(nome){
        this.#nome = nome;
        this.#entradas = []
        this.#saidas = []
        this.#saldo = 0;
    }

    get saldo(){
            return this.#saldo;
    }

    depositar(valor){
        if (valor <= 0){
            alert('o valor não pode ser zero!')
            return;
        } else {
            this.#saldo += valor;
            this.#entradas.push(valor);
        }
    }
    sacar(valor){
        if (valor > this.#saldo){
            alert('Saldo insuficiente')
            return;
        } else {
             this.#saldo -= valor
             this.#saidas.push(valor);
        }
    }
    get entradas(){
        return this.#entradas;
    }

    get saidas(){
        return this.#saidas;
    }

    get nome(){
        return this.#nome;
    }
}

const contaDaniel = new ContaBancaria('daniel');

console.log(`Conta de: ${contaDaniel.nome}`)

contaDaniel.depositar(600);


console.log(`Saldo Atual: ${contaDaniel.saldo}`);
console.log(`Extrato Entrada: ${contaDaniel.entradas}`);

contaDaniel.depositar(300);

console.log(`Saldo Atual: ${contaDaniel.saldo}`);
console.log(`Extrato Entrada: ${contaDaniel.entradas}`);

contaDaniel.sacar(400);

console.log(`Saldo Atual: ${contaDaniel.saldo}`);
console.log(`Extrato Saida: ${contaDaniel.saidas}`)

