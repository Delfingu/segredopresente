// Selecione o botão com a classe "btn_mais_secreto"
const btnMaisSecreto = document.querySelector('.btn_mais_secreto');

// Selecione a div com o id "revelacao"
const revelacao = document.querySelector('#revelacao');

// Adicione um evento de click ao botão
btnMaisSecreto.addEventListener('click', () => {
  // Revele o h1 e a imagem secreta
  revelacao.innerHTML = `
    <br>
    <h1>Obrigado por tudo mãe!!</h1>
    <br>
    <img src="497527861_3917718251814587_8394746430047097142_n.jpg" alt="" style="width: 320px">
  `;
});

