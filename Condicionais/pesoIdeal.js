const calcularPesoIdeal = () => {
    const altura = parseFloat(prompt("Digite sua altura (ex: 1.75): "));
    const genero = prompt("Digite seu gênero (M ou F): ").toUpperCase();
    let pesoIdeal;

    if (genero === 'M' || genero === "m") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (genero === 'F' || genero === "f") {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        alert("Gênero inválido.");
        return;
    }

    alert(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
}

calcularPesoIdeal();