let resultOfwinningBalance = playerClassifier(120, 40)
let playerLevel = ""


function playerClassifier(numberOfVictories, numberOfDefeats) {
  let winningBalance = numberOfVictories - numberOfDefeats
  return winningBalance
}


  for (i = 0; i < 1; i++) {
    if (resultOfwinningBalance <= 10) {
      playerLevel = "Ferro"
    } else if (resultOfwinningBalance >= 11 && resultOfwinningBalance <= 20) {
      playerLevel = "Bronze"
    } else if (resultOfwinningBalance >= 21 && resultOfwinningBalance <= 50) {
      playerLevel = "Prata"
    } else if (resultOfwinningBalance >= 51 && resultOfwinningBalance <= 80) {
      playerLevel = "Ouro"
    } else if (resultOfwinningBalance >= 81 && resultOfwinningBalance <= 90) {
      playerLevel = "Diamante"
    } else if (resultOfwinningBalance >= 91 && resultOfwinningBalance <= 100) {
      playerLevel = "Lendário"
    } else if (resultOfwinningBalance > 100) {
      playerLevel = "Imortal"
    } else {
      console.log("Operação Inválida")
    }
  }


console.log(
  `O Jogador tem de saldo de ${resultOfwinningBalance} está no nível de ${playerLevel}`
)