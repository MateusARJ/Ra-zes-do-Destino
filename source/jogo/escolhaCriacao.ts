export class EscolhaCriacao {
  iniciar(): void {
    alert(`Após despertar, você surge do absoluto nada em uma floresta mágica criada por Deus.
Mesmo com poucos minutos de vida, você "nasceu" com a aparência de um adolescente.
Fisicamente fraco e sem conhecimento do mundo que agora você habita.
Você anda pela floresta...`);

    let escolha1: number | null = Number(prompt(`Inimigos fisicamente mais fortes que você aparecem!
O que você faz?
1 - Atacar.
2 - Fugir.`));

    while (isNaN(escolha1) || (escolha1 !== 1 && escolha1 !== 2)) {
      alert("Escolha uma opção válida, por favor.");
      escolha1 = Number(prompt("1 - Atacar.\n2 - Fugir."));
    }

    if (escolha1 === 1) {
      alert("Você tenta lutar, mas por ser fraco e não conhecer as leis desse mundo, é ferido e morre.");
      alert("GAME OVER.");

      let reviver = (prompt("Deseja reviver? \nSIM ou NÃO") || "").toLowerCase();

      while (reviver !== "sim" && reviver !== "não") {
        reviver = (prompt("Por favor, digite apenas 'SIM' ou 'NÃO'") || "").toLowerCase();
      }

      if (reviver === "sim") {
        alert("VOCÊ SENTE O PESO DA MORTE... MAS ALGO O PUXA DE VOLTA.".toUpperCase());
        alert("A memória da dor permanece. Você não é mais o mesmo.");
        this.retomarCriacao(); 
      } else {
        alert("O vazio o consome e sua consciência se apaga lentamente...");
      }

    } else if (escolha1 === 2) {
      alert("Você foge e se refugia. O eco das escolhas de Deus ressoa na floresta...");
      alert("No coração da floresta, o espelho ancestral brilha com uma luz etérea...");
    }
  }

  private retomarCriacao(): void {
    alert(`Você renasce no mesmo local, mas algo mudou.
Sua forma é a mesma, mas dentro de você há algo novo... lembranças, medo e raiva.
Deus o observa em silêncio, como quem vê um experimento se repetir.`);

    let escolha2: number | null = Number(prompt(
      `Agora que renasceu, o que você fará?\n
1 - Buscar conhecimento sobre o mundo.\n
2 - Procurar por Deus.`
    ));

    while (isNaN(escolha2) || (escolha2 !== 1 && escolha2 !== 2)) {
      alert("Escolha uma opção válida, por favor.");
      escolha2 = Number(prompt("1 - Buscar conhecimento.\n2 - Procurar por Deus."));
    }

    if (escolha2 === 1) {
      alert("Você decide aprender. Cada folha, cada som da floresta lhe ensina algo sobre a vida.");
      alert("Pela primeira vez, você sente algo diferente... vontade própria.");
    } else {
      alert("Você grita por Ele. Mas o céu permanece em silêncio.\nTalvez o Criador não responda... ou talvez não se importe.");
    }
  }
}
