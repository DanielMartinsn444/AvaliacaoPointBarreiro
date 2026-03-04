function somarQuadrado(){
  let n = Number(prompt('Digite um valor positivo para n: '))

  if (isNaN(n) || n <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return;
    }
  let somaDosQuadrados = 0;
  let expressao = "";

  for (let i = 1; i <= n; i++){
    const quadrado = i * i;
    somaDosQuadrados = somaDosQuadrados + quadrado;
    expressao += `${i}²`
    if (i < n ){
    expressao += " + ";
    }
  } 
    console.log(`Expressão: (${expressao})`);
    console.log(`Resultado da Soma dos Quadrados: ${somaDosQuadrados}`);
    alert(`A soma dos quadrados de 1 a ${n} é:\n(${expressao}) = ${somaDosQuadrados}`);
}

somarQuadrado()
