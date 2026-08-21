// Seleciona os elementos do HTML
const botoes = document.querySelectorAll(".opcao");

const escolhas = document.getElementById("escolhas");
const mensagem = document.getElementById("mensagem");

const pontosJogador =
    document.getElementById("pontosJogador");

const pontosComputador =
    document.getElementById("pontosComputador");

const empates =
    document.getElementById("empates");

const reiniciar =
    document.getElementById("reiniciar");


// Variáveis responsáveis pelo placar
let jogador = 0;
let computador = 0;
let empate = 0;


// Opções disponíveis para o computador
const opcoes = [
    "pedra",
    "papel",
    "tesoura"
];


// Quando o jogador clicar em uma opção
botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        // Obtém a escolha do jogador
        const escolhaJogador =
            botao.dataset.jogada;


        // Computador escolhe aleatoriamente
        const escolhaComputador =
            opcoes[Math.floor(Math.random() * opcoes.length)];


        // Mostra as escolhas
        escolhas.textContent =
            `Você escolheu ${escolhaJogador}.
             O computador escolheu ${escolhaComputador}.`;


        // Verifica quem venceu
        if (escolhaJogador === escolhaComputador) {

            empate++;

            mensagem.textContent =
                "Empate!";

        }

        else if (

            (escolhaJogador === "pedra" &&
                escolhaComputador === "tesoura") ||

            (escolhaJogador === "papel" &&
                escolhaComputador === "pedra") ||

            (escolhaJogador === "tesoura" &&
                escolhaComputador === "papel")

        ) {

            jogador++;

            mensagem.textContent =
                "Você venceu!";

        }

        else {

            computador++;

            mensagem.textContent =
                "O computador venceu!";

        }


        // Atualiza o placar na tela
        pontosJogador.textContent = jogador;

        pontosComputador.textContent = computador;

        empates.textContent = empate;

    });

});


// Botão para reiniciar o jogo
reiniciar.addEventListener("click", function() {

    jogador = 0;
    computador = 0;
    empate = 0;

    pontosJogador.textContent = 0;
    pontosComputador.textContent = 0;
    empates.textContent = 0;

    escolhas.textContent =
        "Faça sua escolha!";

    mensagem.textContent = "-";

});