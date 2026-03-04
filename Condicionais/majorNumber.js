/**
 * Um programa que receba dois números e mostra qual deles é o maior.

 * @param {number} x - O primeiro número.
 * @param {number} y - O segundo número.
 * @returns {Majornumber} Devolve o maior resultado.
 * @returns {Minornumber} Devolve o menor resultado.
 */

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