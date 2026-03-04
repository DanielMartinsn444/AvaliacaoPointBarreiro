let listaItens = [];

const createItem = (array) => {
    const newItem = prompt("Digite o item que deseja adicionar:");
    if (newItem === null || newItem.trim() === "") {
        alert("Erro: O campo não pode ser vazio.");
        return;
    }
    array.push(newItem.trim().toLowerCase());
    alert(`Item "${newItem}" adicionado com sucesso!`);
};

const readItems = (array) => {
    if (array.length === 0) {
        alert("A lista está vazia.");
        return;
    }
    let listaFormatada = "--- Lista de Itens ---\n";
    for (let i = 0; i < array.length; i++) {
        listaFormatada += `${i} - ${array[i]}\n`;
    }
    alert(listaFormatada);
};

const updateItem = (array) => {
    if (array.length === 0) return alert("Nada para atualizar.");

    const indice = parseInt(prompt("Digite o índice (número) do item que deseja alterar:"));

    if (isNaN(indice) || indice < 0 || indice >= array.length) {
        alert("Posição inválida!");
        return;
    }

    const novoValor = prompt(`Alterando o item "${array[indice]}". Digite o novo valor:`);
    if (novoValor && novoValor.trim() !== "") {
        array[indice] = novoValor.trim().toLowerCase();
        alert("Item atualizado!");
    }
};

const deleteItem = (array) => {
    if (array.length === 0) return alert("Lista vazia, impossível remover.");

    const opcao = prompt("Digite [1] para remover o PRIMEIRO ou [2] para o ÚLTIMO:");

    if (opcao === "1") {
        const removido = array.shift();
        alert(`Item "${removido}" removido.`);
    } else if (opcao === "2") {
        const removido = array.pop();
        alert(`Item "${removido}" removido.`);
    } else {
        alert("Opção inválida.");
    }
};

const menu = () => {
    let loop = true;
    while (loop) {
        const escolha = prompt(`
        --- SISTEMA CRUD ---
        1. Adicionar Item
        2. Mostrar Itens
        3. Atualizar Item
        4. Remover Item (Início/Fim)
        5. Sair
        `);

        switch (escolha) {
            case "1": createItem(listaItens); break;
            case "2": readItems(listaItens); break;
            case "3": updateItem(listaItens); break;
            case "4": deleteItem(listaItens); break;
            case "5": loop = false; break;
            case null: loop = false; break;
            default: alert("Opção inválida!");
        }
    }
    alert("Sistema encerrado.");
};

menu();