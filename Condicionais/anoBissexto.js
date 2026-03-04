const checkYear = () => {
    const ano = Number(prompt("Digite o ano para verificar se é bissexto: "));

    if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
        alert(`${ano} é bissexto!`);
    } else {
        alert(`${ano} NÃO é bissexto`);
    }
}

checkYear();