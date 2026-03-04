const encontrarMaiorMenor = () => {
    let maior = -Infinity;
    let menor = Infinity;

    for (let i = 1; i <= 10; i++) {
        let num = parseFloat(prompt(`Digite o ${i}º número:`));

        if (i === 1) {
            maior = num;
            menor = num;
        } else {
            if (num > maior) maior = num;
            if (num < menor) menor = num;
        }
    }
    console.log(`O MENOR valor encontrado é: ${menor}`);
    console.log(`O MAIOR valor encontrado é: ${maior}`);
}

encontrarMaiorMenor();