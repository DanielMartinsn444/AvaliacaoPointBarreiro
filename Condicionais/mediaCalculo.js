/**
 * um programa que recebe 2 notas de um aluno, verifica se as notas são válidas e exibe na tela a média destas notas. 
 * 
 */

const mediaChecker = () => {
    const n1 = parseFloat(prompt("Digite a primeira nota: "));
    const n2 = parseFloat(prompt("Digite a segunda nota: "));

    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
        alert("Nota inválida! Digite valores entre 0 e 10.");
        return;
    }

    const mediaFinal = (n1 + n2) / 2;
    alert(`Média das notas: ${mediaFinal.toFixed(2)}`);
}

mediaChecker();