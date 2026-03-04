function calcularFatorial() {
    let n = Number(prompt("Digite um valor não negativo N para calcular o Fatorial (N!):"));
    if (isNaN(n) || n < 0) {
        alert("Por favor, digite um número inteiro não negativo (0 ou maior).");
        return;
    }
    if (n === 0) {
        console.log("0! = 1");
        alert("O Fatorial de 0 é: 1");
        return;
    }
    let fatorial = 1;
    
    let expressao = "";

    for (let i = n; i >= 1; i--) {
        
        fatorial = fatorial * i;
        expressao += `${i}`;
        if (i > 1) {
            expressao += " * ";
        }
    }

    
    console.log(`N: ${n}`);
    console.log(`Expressão: (${expressao})`);
    console.log(`O Fatorial de ${n} é: ${fatorial}`);
    
    alert(`O Fatorial de ${n} (${expressao}) é: ${fatorial}`);
}

calcularFatorial();
