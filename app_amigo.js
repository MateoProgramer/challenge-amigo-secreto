let amigos = []; 

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // Comprobar si el nombre ya existe 
    if (amigos.includes(nombre)) {
        alert("este amigo ya esta en la lista");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();

    document.getElementById('amigo').value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("no hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    alert("¡El amigo sorteado es: " + amigoSorteado + "!");
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    }
}