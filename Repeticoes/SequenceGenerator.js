function gerarSequencia() {
    let n = Number(prompt("Digite um valor positivo N para gerar a sequência:"));

    if (isNaN(n) || n <= 0) {
        alert('digite um valor inteiro positivo!')
        return;
    }
    let sequencia = "";

    for (let i = 1; i <= n; i++) {
        sequencia += i;
        if (i < n) {
            sequencia += " + ";
        }
    }
    console.log(`Sequência para N = ${n}:`);
    console.log(sequencia);
    alert(`A sequência gerada é:\n${sequencia}`);
}

gerarSequencia()

