let amigos = [];

function adicionarAmigo() {
    const addAmigo = document.querySelector("#amigo");
    const listaAmigos = document.querySelector("#listaAmigos");
    
    const nome = addAmigo.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();

    addAmigo.value = "";   
}

function atualizarLista() {
    const listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    for (let amigo of amigos){
        const listaNomes = document.createElement("li");
        listaNomes.textContent = amigo;
        listaAmigos.appendChild(listaNomes);
    }   
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos para sorteio.");
        return;
    }
    
    const nomeSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[nomeSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
