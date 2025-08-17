// Seleciona a div com as cartas
const cartasDiv = document.getElementById('cartass');

// Seleciona todos os parágrafos dentro da div
const cartas = cartasDiv.querySelectorAll('.cartas');

// Função para selecionar uma carta aleatória
function selecionarCartaAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * cartas.length);
  cartasDiv.style.display = 'block';
  return cartas[indiceAleatorio].innerHTML;
}

// Função para trocar a mensagem da div
function trocarMensagem() {
  const mensagemAleatoria = selecionarCartaAleatoria();
  cartasDiv.innerHTML = mensagemAleatoria;
}

// Adiciona um evento de clique no botão
document.getElementById('btn_revelar_carta').addEventListener('click', trocarMensagem);