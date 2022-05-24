// Variável do Score atual
var score = 20;
// High Score
var high_score = 0;
// Número aleatório
let random_number = Math.floor((Math.random() * 10));
random_number += Math.floor((Math.random() * 10) + 1);

console.log(random_number);


function generateNumber() {
  /* Retorna número aleatório entre 1 e 20 */
  
  // Número sorteado;
  let random_number = Math.floor((Math.random() * 10));
  random_number += Math.floor((Math.random() * 10) + 1);
  console.log(random_number);
  
  return random_number
}


function respostaCorreta(){
  /* Quando o usuário acertar a resposta */

  // Mudando a cor da página para verde
  document.querySelector("body").style.backgroundColor = "rgba(115, 196, 112, 0.897)";
  document.querySelector("p.message").textContent = "Correct Answer!"
  // Setando o novo High Score caso seja o maior
  if (score > high_score){
    high_score = score;
    document.querySelector("span.highscore").textContent = high_score;
  }

}


function respostaErrada(resposta_user){
  /* Quando o usuário errar a resposta */

  // Caso o número digitado seja maior que o número certo
  if (resposta_user > random_number) {
    document.querySelector("p.message").textContent = "Try a lower number!";
  }
  // Caso seja menor
  else {
    document.querySelector("p.message").textContent = "Try a higher number!";
  }

  // Diminuindo o score
  score --;
  document.querySelector("span.score").textContent = score;
}


function resetarGame(){
  /* Resetando o jogo */

  // Background padrão
  document.querySelector("body").style.backgroundColor = "rgb(34, 34, 34)";
  // Resetando score
  document.querySelector("span.score").textContent = 20;
  score = 20;
  // Resetando mensagem
  document.querySelector("p.message").textContent = "Start guessing...";
  // Zerando a resposta
  document.getElementById("#guess").value = "";
  // Gerando outro número aleatório
  random_number = generateNumber();
}


function testingResp(){
  // Resposta do usuário
  let user_resp = Number(document.getElementById("#guess").value);

  // Caso a resposta esteja correta
  if (user_resp == random_number) {
    respostaCorreta();
  }
  // Caso esteja errada
  else {
    respostaErrada(user_resp);
  }

}
