import { Historia } from "./historia";
import { EscolhaDeus } from "./escolhaDeus";
import { EscolhaCriacao } from "./escolhaCriacao";

export class Jogo {
  iniciar(): void {
    Historia.introducao();

    let escolhaPersonagem = Number(prompt(
      "Escolha sua perspectiva:\n1 - Deus\n2 - A Criação"
    ));

    if (escolhaPersonagem === 1) {
      new EscolhaDeus().iniciar();
    } else if (escolhaPersonagem === 2) {
      new EscolhaCriacao().iniciar();
    } else {
      alert("Escolha inválida. Recarregue a página para tentar novamente.");
    }
  }
}
