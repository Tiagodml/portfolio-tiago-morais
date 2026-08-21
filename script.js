// Seleciona o formulário de contato
const formulario = document.getElementById("formContato");


// Validação do formulário
formulario.addEventListener("submit", function(event) {

    // Impede o envio real do formulário
    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    const resultado = document.getElementById("resultado");


    // Verifica se os campos estão preenchidos
    if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        mensagem.value.trim() === ""
    ) {

        resultado.textContent = "Preencha todos os campos.";
        resultado.style.color = "red";

        return;
    }


    // Verifica o formato do e-mail
    const emailValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email.value)) {

        resultado.textContent =
            "Digite um e-mail válido.";

        resultado.style.color = "red";

        return;
    }


    // Simula o envio
    resultado.textContent =
        "Mensagem enviada com sucesso!";

    resultado.style.color = "green";


    // Limpa os campos
    formulario.reset();

});


// Alternância entre tema claro e escuro
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});