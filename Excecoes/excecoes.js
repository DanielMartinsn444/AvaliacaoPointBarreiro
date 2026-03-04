class ValorNaoNumericoError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "ValorNaoNumericoError";
    }
}

class ValorNegativoError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "ValorNegativoError";
    }
}

class DivisaoPorZeroError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "DivisaoPorZeroError";
    }
}

class SaldoInsuficienteError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "SaldoInsuficienteError";
    }
}


class ContaBancaria {
    #saldo;
    #nome;
    #entradas;
    #saidas;

    constructor(nome) {
        this.#saldo = 0;
        this.#nome = nome;
        this.#entradas = [];
        this.#saidas = [];
    }

    get saldo() { return this.#saldo; }
    get historicoEntradas() { return [...this.#entradas]; }
    get historicoSaidas() { return [...this.#saidas]; }

    depositar(valor) {
        try {
            this.#validarValor(valor);
            this.#saldo += Number(valor);
            this.#entradas.push(Number(valor));
            return `Depósito de R$ ${Number(valor).toFixed(2)} realizado.`;
        } catch (error) {
            return `[ERRO] ${error.name}: ${error.message}`;
        }
    }

    sacar(valor) {
        try {
            this.#validarValor(valor);
            const valorNum = Number(valor);

            if (valorNum > this.#saldo) {
                throw new SaldoInsuficienteError("Saldo insuficiente para completar o saque.");
            }

            this.#saldo -= valorNum;
            this.#saidas.push(valorNum);
            return `Saque de R$ ${valorNum.toFixed(2)} realizado.`;
        } catch (error) {
            return `[ERRO] ${error.name}: ${error.message}`;
        }
    }

    #validarValor(valor) {
        if (typeof valor !== 'number' && isNaN(Number(valor))) {
            throw new ValorNaoNumericoError("O valor fornecido não é um número.");
        }
        if (Number(valor) < 0) {
            throw new ValorNegativoError("Não são permitidos valores negativos.");
        }
    }
}


const realizarDivisao = (a, b) => {
    try {
        if (b === 0) throw new DivisaoPorZeroError("Impossível dividir por zero!");
        return a / b;
    } catch (error) {
        return `[ERRO] ${error.name}: ${error.message}`;
    }
};

const minhaConta = new ContaBancaria("Daniel Martins");

console.log(minhaConta.depositar(-50));
console.log(minhaConta.depositar("pix"));
console.log(minhaConta.depositar(200));
console.log(realizarDivisao(10, 0));       