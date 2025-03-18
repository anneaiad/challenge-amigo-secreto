let amigos = []; 
let sorteados = []; 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let nome = input.value.trim(); 

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome); 
        atualizarLista();
        input.value = ""; 
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione nomes antes de sortear!");
        return;
    }

    let nomesDisponiveis = amigos.filter(nome => !sorteados.includes(nome));

    if (nomesDisponiveis.length === 0) {
        alert("Todos os nomes já foram sorteados!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomesDisponiveis.length);
    let nomeSorteado = nomesDisponiveis[indiceSorteado];

    sorteados.push(nomeSorteado);
    mostrarSorteado(nomeSorteado);
}

function mostrarSorteado(nome) {
    let resultado = document.querySelector("#resultado");
    let li = document.createElement("li");
    li.textContent = `🎉 ${nome} 🎉`;
    resultado.appendChild(li);
}




