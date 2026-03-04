const precoAntigo = parseFloat(prompt("Digite o preço antigo:"));
let novoPreco = 0;

if (precoAntigo <= 50) {
    novoPreco = precoAntigo * 1.05;
} else if (precoAntigo <= 100) {
    novoPreco = precoAntigo * 1.10;
} else {
    novoPreco = precoAntigo * 1.15;
}

let msg = "";
if (novoPreco <= 80) {
    msg = "Barato";
} else if (novoPreco <= 120) {
    msg = "Normal";
} else if (novoPreco <= 200) {
    msg = "Caro";
} else {
    msg = "Muito caro";
}

alert(`Preço novo: R$ ${novoPreco.toFixed(2)} - Classificação: ${msg}`);