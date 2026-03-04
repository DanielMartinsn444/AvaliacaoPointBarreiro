const idade = parseInt(prompt("Digite a idade:"));
const tempoServico = parseInt(prompt("Digite o tempo de serviço (anos):"));

if (idade >= 65 || tempoServico >= 30 || (idade >= 60 && tempoServico >= 25)) {
    alert("Pode se aposentar");
} else {
    alert("Não pode se aposentar");
}