//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//-------------------------------------------------------------------------
// Lista que vai armazenar os nomes
let amigos = [];
//-------------------------------------------------------------------------
// Função para adicionar amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome !== "") {

            if (amigos.length === 0) {
                amigos.push(nome);
            } else {
                // Verifica se o nome já está na lista
                if (amigos.includes(nome)) {
                    let escolha = prompt("Nome já adicionado na lista, deseja adicioná-lo novamente? s=sim/n=não");
                    if (escolha.toLowerCase() === 's') {
                        amigos.push(nome);
                    } else {
                        alert("Nome não adicionado");
                    }
                } else {
                    amigos.push(nome);
                }
            }



        // Atualiza a lista no HTML
        atualizarLista();

        // limpa o campo
        input.value = "";
    } else {
        alert("Digite um nome válido!");
    }
}

//-------------------------------------------------------------------------
// Atualiza a <ul> com os nomes
function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // limpa antes de atualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

//-------------------------------------------------------------------------
// Função para sortear um amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo!");
    return;
  }

  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

//-------------------------------------------------------------------------
// FUnção para limpar a lista 
function limparLista() {
  amigos = []; // esvazia o array
  document.getElementById("listaAmigos").innerHTML = ""; // limpa a lista na tela
  document.getElementById("resultado").innerHTML = "";   // limpa o resultado também
}