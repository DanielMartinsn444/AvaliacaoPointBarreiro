const animaisCadastrados = [];


class Animal {
    #nome
    #numpatas
    constructor(nome, numPatas){
        this.#nome = nome;
        this.#numpatas = numPatas;
    }

    get nome(){
        return this.#nome;
    }

    emitirSom(){
        console.log('som genérico!')
    }
}

class Cachorro extends Animal {
    constructor(nome, numPatas){
        super(nome, numPatas)
    }
    emitirSom(){
        console.log('AU AU 🐶')
    }
}

class Passaro extends Animal{
    constructor(nome, numPatas){
        super(nome, numPatas)
    }
    emitirSom(){
        console.log('Pru Pru 🐦!')
    }
}

class Gato extends Animal {
    constructor(nome, numPatas){
        super(nome, numPatas)
    }

    emitirSom(){
        console.log('Miau 😸')
    }
}

function cadastrarCachorro() {
 
    let nome = prompt("Digite o nome do Cachorro:");

    if (nome === null || nome.trim() === "") {
        alert("O nome não pode ser vazio ou o cadastro foi cancelado.");
        return; 
    }
    
    let numPatasStr = prompt(`Quantas patas o ${nome} tem? (Digite um número)`);
    
    if (numPatasStr === null) {
        alert("Cadastro cancelado.");
        return;
    }
    
    let numPatas = parseInt(numPatasStr);

  
    if (isNaN(numPatas) || numPatas < 0) {
        alert("Número de patas inválido. Cadastro cancelado.");
        return;
    }
    
    const novoCachorro = new Cachorro(nome, numPatas);
   
    animaisCadastrados.push(novoCachorro);

    console.log(`Cachorro "${novoCachorro.nome}" cadastrado com sucesso!`);
    alert(`Cachorro "${novoCachorro.nome}" cadastrado com sucesso!`);
}

function cadastrarGatos(){
    let nome = prompt('Digite o nome do Gato: ');
    if (nome  === null || nome.trim() === ""){
        alert('esse campo não pode ser vazio!')
        return;
    }

    let numPatasStr = prompt(`Quantas patas o ${nome} tem?: (digite um número)`);

    if (numPatasStr === null){
        alert('Cadastro Cancelado!')
        return;
    }

    let numPatas = parseInt(numPatasStr);

    if(isNaN(numPatas) || numPatas < 0){
        alert("Numero de patas inválido!");
        return;
    }

    const novoGato = new Gato(nome, numPatas);
    animaisCadastrados.push(novoGato);

    console.log(`Gato "${novoGato.nome}" cadastrado com sucesso!`);
    alert(`Gato "${novoGato.nome}" cadastrado com sucesso!`);
}


function cadastrarPassaro(){
    let nome = prompt('Digite o nome do Pássaro: ');
    if (nome === null || nome.trim() === ""){
        alert('Este campo não pode ser vazio!');
        return;
    }

    let numPatasStr = prompt(`Quantas patas ${nome} tem? `);

    if (numPatasStr === null){
        alert('campo vazio!')
        return;
    }

    let numPatas = parseInt(numPatasStr);
    if( isNaN(numPatas) || numPatas < 0 ){
        alert('Campo vazio!');
        return;
    }

    const novoPassaro = new Passaro(nome, numPatas);
    animaisCadastrados.push(novoPassaro);
    
    console.log(`Pássaro "${novoPassaro.nome}" cadastrado com sucesso!`);
    alert(`Pássaro "${novoPassaro.nome}" cadastrado com sucesso!`);
}
    
function emitirSons(){
    if (animaisCadastrados.length === 0){
        alert('Nenhum animal adicionado para emitir som.');
        return;
    }

    let sons = "== Zoológico ==\n";

    for (const animal of animaisCadastrados){
        sons += `- O ${animal.nome} faz:`;
        animal.emitirSom();
    }
}


function listarAnimais() {
    if (animaisCadastrados.length === 0) {
        alert("Nenhum animal cadastrado ainda.");
        return;
    }

    let lista = "== Animais Cadastrados ==\n";
    
   
    for(const animal of animaisCadastrados){
        const tipo = animal.constructor.name;
        lista += `Tipo: ${tipo} | Nome: ${animal.nome}\n`;
    }
    alert(lista);
}

function cadastrarOutroanimal(){
    let nome = prompt('Digite o nome do animal: ');
    if (nome === null || nome.trim() === ""){
        alert('campo vazio!');
        return;
    }

    let numPatasStr = prompt(`Quantas patas ${nome} tem? `);

    if(numPatasStr === null || numPatasStr.trim()===''){
        alert("campo vazio!")
        return;
    }

    let numPatas = parseInt(numPatasStr);
    if(isNaN(numPatas) || numPatas < 0){
        alert('você deve digitar um número: ');
        return;
    }

    const animalNovo = new Animal(nome, numPatas);
    animaisCadastrados.push(animalNovo);
    alert(`Animal"${animalNovo.nome}" cadastrado com sucesso!`);
}




function menu(){
    let opcao = prompt(
        "== Menu Interativo ==\n\n" +
        "Opções:\n" +
        "1 - Cadastrar Cachorro\n" +
        "2 - Cadastrar Gato\n" +
        "3 - Cadastrar Pássaro\n" +
        "4 - Cadastrar outro Animal\n" +
        "5 - Listar todos os animais\n" +
        "6 - Emitir sons de todos os animais\n\n" +
        "Digite a opção desejada:"
    );
    let opcaoNum = parseInt(opcao)
    
    if (opcao === null){
        alert("Encerrando o sistema. Até logo!");
        return;
    }

    if(isNaN(opcaoNum) || opcaoNum < 1 || opcaoNum > 6){
        alert('Opção inválida!');
        menu()
        return;
    }

    switch (opcaoNum){
        case  1:
            cadastrarCachorro();
            break
        case  2:
            cadastrarGatos();
            break
        case  3:
            cadastrarPassaro();
            break
        case 4:
            cadastrarOutroanimal();
            break
        case  5:
            listarAnimais();
            break
        case  6:
            emitirSons();
            break
        default:
            alert('Opção inválida!')
            menu();
            break
    }

    menu();
}

menu()