
class Departamento {
    #nome;
    constructor(nome) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }
}

class Empresa {
    #nome;
    #departamentos;
    constructor(nome) {
        this.#nome = nome;
        this.#departamentos = []
    }
    get nome() {
        return this.#nome;
    }
    adicionarDepartamento(departamento) {
        if (!departamento) {
            console.error('Departamento inválido ou não fornecido.');
            return;
        }
        this.#departamentos.push(departamento);
        console.log(`Departamento ${departamento.nome} adicionado.`);
    }


    listarDepartamentos() {
        if (this.#departamentos.length === 0) {
            return 'nenhum departamento adicionado.'
        }
        let lista = `Departamentos da Empresa ${this.#nome}:\n`

        
        for (const departamento of this.#departamentos) {
            lista += `- ${departamento.nome}\n` 
        }

        return lista;
    }
}

const ti = new Departamento('Tecnologia da Informação');
const rh = new Departamento('Recursos Humanos');
const financeiro = new Departamento('Financeiro');
const empresa = new Empresa('IFMG')

console.log('--- Adicionando Departamentos ---');
empresa.adicionarDepartamento(ti);
empresa.adicionarDepartamento(rh);
empresa.adicionarDepartamento(financeiro);
empresa.adicionarDepartamento(null); 


console.log('\n--- Listagem de Departamentos ---');

console.log(empresa.listarDepartamentos()); 


const empresaVazia = new Empresa('Startup Teste');
console.log('\n--- Teste de Empresa Vazia ---');
console.log(empresaVazia.listarDepartamentos());