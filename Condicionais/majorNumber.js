
const checkNumberValue = (x, y) => {
    const values = [];
    if (isNaN(y) || y < 0) {
        alert("Digite um valor positivo válido");
        return;
    }
    values.push(x);
    values.push(y);

    const majorNumber = Math.max(...values);
    const minorNumber = Math.min(...values);

    console.log(`Maior Número: ${majorNumber}`);
    console.log(`Menor Número: ${minorNumber}`);
    return;
}

checkNumberValue("cinco", 41);