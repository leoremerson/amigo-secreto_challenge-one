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