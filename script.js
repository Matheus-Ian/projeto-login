const formulario = document.getElementById("form-login");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const checkboxSenha = document.getElementById("checkbox-senha");
const mensagem = document.getElementById("mensagem");

checkboxSenha.addEventListener("change", function () {
    if (checkboxSenha.checked) {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
});

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (email.value === "aluno@faculdade.com" && senha.value === "123456") {
        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.className = "sucesso";
    } else {
        mensagem.textContent = "E-mail ou senha incorretos.";
        mensagem.className = "erro";
    }
});
