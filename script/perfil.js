const btnEditar = document.querySelector("#editar")
const nomeUsuario = document.querySelector("#nomeUsuario")
const emailUsuario = document.querySelector("#emailUsuario")
const dataNascUsuario = document.querySelector("#dataNascUsuario")
const dadosUsu = document.querySelector(".dadosUsu")
const forms = document.querySelector("#form")

const perfil = [
    {
        nome: "Nome exemplo",
        email: "user@example.com",
        dataNasc: "00/00/0000"
    }
]

btnEditar.addEventListener('click', function (e){
    e.preventDefault();
    editarPerfil($perfil)
})

window.onload = renderizarNaTela()
// READ
function renderizarNaTela(){

    dadosUsu.innerHTML = ""

    perfil.forEach(
        pUsu => {
            let perfilAlterado = document.createElement('div')
            perfilAlterado.innerHTML = `
            <p><h3>Nome de Usuário: </h3>${pUsu.nome}</p>
            <p><h3>Email: </h3> ${pUsu.email}</p>
            <p><h3>Data de nascimento </h3>${pUsu.dataNasc}</p>
            <button onclick="editarPerfil(${perfil.indexOf(pUsu)})"> Editar </button>
            `
            dadosUsu.append(perfilAlterado)
        }
    )
}

function editarPerfil(p){
    // 2 - Pegar as informações que a pessoa quer editar
    let nomeNovo = prompt('Digite o novo nome de usuário',perfil[p].nome)
    let emailNovo = prompt('Digite o novo email',perfil[p].email)
    let dataNascNovo = prompt('Digite a nova data de nacimento',perfil[p].dataNasc)

    // 3 - Mudar as informações
    perfil[p].nome = nomeNovo
    perfil[p].email = emailNovo
    perfil[p].dataNasc = dataNascNovo

    // 4 - Atualizar a página
    renderizarNaTela()
}

// CARROSSEL
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let i = 0;

function carrossel(){
    i++;
    if(i > img.length - 1){
        i = 0;
    }

    imgs.style.transform = `translateX(${-i*100}%)`
}

setInterval(carrossel, 1800);