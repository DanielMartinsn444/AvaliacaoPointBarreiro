function calcularNumeroHarmonico() {
    let n = Number(prompt("Digite um valor positivo N para calcular o Número Harmônico H(n):"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return;
    }

    let h_n = 0.0;
    let expressao = "";

    for (let i = 1; i <= n; i++) {
        const termo = 1 / i;
        h_n += termo;

        expressao += `1/${i}`;
        if (i < n) {
            expressao += " + ";
        }
    }
    const resultadoFormatado = h_n.toFixed(4);

    console.log(`N: ${n}`);
    console.log(`Expressão: H(${n}) = (${expressao})`);
    console.log(`Valor de H(${n}) é: ${h_n}`);
    alert(`O Número Harmônico H(${n}) é:\n(${expressao})\nResultado: ${resultadoFormatado}`);
}

calcularNumeroHarmonico();


