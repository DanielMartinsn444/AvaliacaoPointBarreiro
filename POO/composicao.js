class Endereco {
    #logradouro;
    #numero;
    #bairro;
    #cidade;
    #estado;
    #cep;
    constructor(logradouro, numero, bairro, cidade, estado, cep){
        this.#logradouro = logradouro;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#cep = cep;
    }

    get logradouro(){
        return this.#logradouro;
    }

    get numero(){
        return this.#numero;
    }

    get bairro(){
        return this.#bairro;
    }
    get cidade(){
        return this.#cidade;
    }
    get estado(){
        return this.#estado;
    }
    get cep(){
        return this.#cep;
    }
}

class Pessoa {
    #nome
    #cpf
    #endereco
    constructor(nome, cpf, enderecoObjeto){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#endereco = enderecoObjeto;
    }

    get nome(){
        return this.#nome;
    }
    get cpf(){
        return this.#cpf;
    }
    get endereco(){
        return this.#endereco;
    }
}

const meuEndereco = new Endereco(
    "Rua das Flores", 
    "100", 
    "Centro", 
    "Contagem", 
    "MG", 
    "32000-000"
);


const eu = new Pessoa("Daniel", "123.456.789-00", meuEndereco);


console.log(`${eu.nome} mora na cidade de ${eu.endereco.cidade}.`);