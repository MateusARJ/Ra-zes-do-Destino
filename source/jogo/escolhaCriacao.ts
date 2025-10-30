export class EscolhaCriacao {
  iniciar(): void {
    alert("Você é a Criação, a primeira consciência do mundo.");
    alert("Após despertar, você surge em uma floresta mágica criada por Deus.");

    let escolha1 = Number(prompt(
      "Inimigos aparecem! O que você faz?\n" +
      "1 - Atacar.\n" +
      "2 - Fugir."
    ));

    if (escolha1 === 1) {
      alert("Você tenta lutar, mas é ferido e morre. GAME OVER.");
    } else if (escolha1 === 2) {
      alert("Você foge e se refugia. O eco das escolhas de Deus ressoa na floresta...");
      alert("No coração da floresta, o espelho ancestral brilha com uma luz etérea...");
    } else {
      alert("Escolha inválida.");
    }
  }
}
