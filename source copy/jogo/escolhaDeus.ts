export class EscolhaDeus {
  iniciar(): void {
    alert("Você é Deus. Você criou um mundo — mas não por necessidade, nem por amor. Você criou por impulso, por tédio, por experimentação.");
    alert("No silêncio do plano superior, Deus observa a Criação percorrendo a floresta...");
    
    let escolha1 = Number(prompt(
      "Escolha o que fazer:\n" +
      "1 - Guiar a evolução.\n" +
      "2 - Levar tragédia à Criação."
    ));

    if (escolha1 === 1) {
      alert("A Criação evolui, adquirindo o poder da expansão mental.");
      this.continuarHistoria();
    } else if (escolha1 === 2) {
      alert("A Criação é atacada por um monstro e morre. GAME OVER.");
    } else {
      alert("Escolha inválida.");
    }
  }

  continuarHistoria(): void {
    alert("Você observa intrigado... a Criação está crescendo rápido demais.");
    
    let escolha2 = Number(prompt(
      "Faça sua próxima escolha:\n" +
      "1 - Enviar visões falsas.\n" +
      "2 - Instruir a Criação a subir de nível.\n" +
      "3 - Modificar o corpo dela para lutar."
    ));

    switch (escolha2) {
      case 1:
        alert("A Criação vence as ilusões e se torna mais forte.");
        break;
      case 2:
        alert("A Criação se distancia e busca ser um novo deus... mas morre. GAME OVER.");
        break;
      case 3:
        this.decisaoFinal();
        break;
      default:
        alert("Escolha inválida.");
    }
  }

  decisaoFinal(): void {
    let escolha3 = Number(prompt("1 - Punir a Criação.\n2 - Deixar ela seguir."));
    if (escolha3 === 1) {
      alert("Você apaga a Criação. Fim.");
    } else if (escolha3 === 2) {
      alert("A Criação se rebela e tenta tomar seu lugar. Fim.");
    }
  }
}
