/**
 Recebe salário de um trabalhador e o valor da prestação de um empréstimo. Se a prestação for maior que 20% do salário imprime: Empréstimo não concedido, caso contrário imprime: Empréstimo concedido.

 */

const emprestimoChecker = () => {
    const salario = Number(prompt(`
        Digite seu salário aqui:\n(Caso a prestação seja superior à 20%, NÃO será concedido.)
        `));
        const prestacao = salario * 0.2;

    if (isNaN(salario) || salario < 0) {
        alert("Digite um valor positivo válido");
    } else if (prestacao > salario){
        alert("Emprestimo não concedido.");
    } else {
        alert("Empréstimo concedido!\nValor da prestação:" + prestacao.toFixed(2));
    }
}

emprestimoChecker()