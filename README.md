# Raízes do Destino

**Raízes do Destino** é um jogo interativo de escolhas, desenvolvido como atividade prática na disciplina de Algoritmos do primeiro módulo do curso de Análise e Desenvolvimento de Sistemas.  

O jogo explora um enredo filosófico e de fantasia, onde o jogador assume uma das duas perspectivas:

- **Deus**: Um ser que criou o mundo por impulso, moldando as leis do universo e influenciando a evolução da Criação.  
- **Criação**: A primeira consciência do mundo, que explora a Floresta Encantada, descobre seus segredos e enfrenta desafios impostos pelo ambiente e por Deus.  

---

## Objetivos do Jogo

O jogo permite que o jogador:

- Tome decisões que afetam diretamente a narrativa e o destino da Criação.  
- Experimente diferentes desfechos baseados em suas escolhas.  
- Compreenda conceitos básicos de **fluxo de controle**, **condicionais (if/else)** e interação com o usuário em TypeScript.  

---

## Tecnologias Utilizadas

- **TypeScript**: Para lógica de escolhas, condicionais e interação com o usuário via `prompt` e `alert`.  
- **Parcel**: Para executar o jogo no navegador.
- **Node.js**: Para executar o jogo localmente(Pode ser utilizado tambem).  
- **VS Code** ou outro editor compatível com TypeScript.  

---

## Estrutura do Jogo

1. Introdução narrativa explicando a origem de Deus e da Criação.  
2. O jogador escolhe sua perspectiva (**Deus** ou **Criação**).  
3. Dependendo da escolha, diferentes caminhos e decisões surgem, podendo levar a:
   - Evolução da Criação  
   - Conflitos e batalhas  
   - Fins alternativos ou **GAME OVER**  
4. As escolhas são armazenadas em variáveis e condicionais (`if/else`) determinam o fluxo da história.  

---

## Estrutura de Pastas

```text
jogoRaizes1.0/
├── source/
│   └── jogo/
│       ├── historia.ts
│       ├── escolhaDeus.ts
│       ├── escolhaCriacao.ts
│       └── jogo.ts
├── index.ts
├── index.html
├── package.json
└── tsconfig.json

