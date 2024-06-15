const container = document.querySelector('.container')
const btnSignIn = document.querySelector('.btnSign-in')
const btnSignUp = document.querySelector('.btnSign-up')

btnSignIn.addEventListener('click', () => {
    container.classList.add('active')
})

btnSignUp.addEventListener('click', () => {
    container.classList.remove('active')
})


function login() {
    const email = document.querySelector('#emailLogin').value;
    const senha = document.querySelector('#senhaLogin').value;

    if (email === "user@example.com" && senha === "senha123") {
        alert("Seja Bem-vindo(a) a nossa plataforma!")
        // Redireciona para a página principal após login bem-sucedido
        window.location.href = '../perfil.html'
    } else 
    {
        alert("Email ou senha incorretos")
    }
}

function cadastrarSe(){
    const nomeCadastro = document.querySelector('#nomeCadastro').value;
    const emailCadastro = document.querySelector('#emailCadastro').value;
    const senha1 = document.querySelector('#senha1').value;
    const senha2 = document.querySelector('#senha2').value;
    
    if(nomeCadastro != '' && emailCadastro != '' && senha1 != '' && senha2 != '')
    {
        alert("Cadastro realizado com sucesso!")
        window.location.href = '../perfil.html'
    }
    else
    {
        alert("Não foi possível fazer o cadastro. Tente novamente!")
    }
  }
  