const calcularHarmonica = () => {
    const n1 = parseInt(prompt("Digite o primeiro número: "));
    const n2 = parseInt(prompt("Digite o segundo número: "));
    const n3 = parseInt(prompt("Digite o terceiro número: "));

    if (n1 === 0 || n2 === 0 || n3 === 0) {
        alert("Não é possível calcular a média com valores zero.");
    } else {
        const mediaH = 3 / ((1 / n1) + (1 / n2) + (1 / n3));
        alert(`A média harmônica é: ${mediaH.toFixed(2)}`);
    }
}

calcularHarmonica();