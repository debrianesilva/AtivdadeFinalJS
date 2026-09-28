
const prompt = require("prompt-sync")();

let jogadores = [
  { nome: "Fallen", time: "Imperial", pontuacao: 2500 },
  { nome: "Fer", time: "Imperial", pontuacao: 1800 },
  { nome: "Coldzera", time: "MIBR", pontuacao: 3000 },
];



function cadastrarJogador() {
  console.log("\n--- CADASTRO DE JOGADOR ---");
  const nome = prompt("Nome do jogador: ");
  const time = prompt("Time do jogador: ");
  const pontuacao = Number(prompt("Pontuação inicial: "));

  const novoJogador = {
    nome: nome,
    time: time,
    pontuacao: pontuacao,
  };

  jogadores.push(novoJogador);
  console.log(`Jogador ${nome} cadastrado com sucesso!\n`);
}

function listarJogadores() {
  console.log("\n--- LISTA DE JOGADORES ---");
  if (jogadores.length === 0) {
    console.log("Nenhum jogador cadastrado ainda.");
    return;
  }

  for (let i = 0; i < jogadores.length; i++) {
    const jogadorAtual = jogadores[i];
    console.log(
      `${i + 1}) Nome: ${jogadorAtual.nome} | Time: ${jogadorAtual.time} | Pontuação: ${jogadorAtual.pontuacao}`
    );
  }
  console.log("");
}

function buscarJogador() {
  console.log("\n--- BUSCA DE JOGADOR ---");
  const nomeBuscado = prompt("Qual o nome do jogador que você quer buscar? ");

  let encontrado = false;

  for (let i = 0; i < jogadores.length; i++) {
    const jogadorAtual = jogadores[i];

    if (jogadorAtual.nome === nomeBuscado) {
      console.log(
        `Jogador encontrado! Nome: ${jogadorAtual.nome} | Time: ${jogadorAtual.time} | Pontuação: ${jogadorAtual.pontuacao}`
      );
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    console.log(`Jogador "${nomeBuscado}" não encontrado.\n`);
  } else {
    console.log("");
  }
}


function atualizarPontuacao() {
  console.log("\n--- ATUALIZAÇÃO DE RANKING ---");
  const nomeBuscado = prompt("Qual jogador deseja atualizar? ");

  let encontrado = false;

  for (let i = 0; i < jogadores.length; i++) {
    const jogadorAtual = jogadores[i];

    if (jogadorAtual.nome === nomeBuscado) {
      const pontosNovos = Number(prompt("Quantos pontos ele ganhou hoje? "));

      jogadorAtual.pontuacao += pontosNovos;

      console.log(
        `SUCESSO! A pontuação de ${jogadorAtual.nome} subiu para ${jogadorAtual.pontuacao} pontos!\n`
      );

      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    console.log(`ERRO! Jogador "${nomeBuscado}" não foi encontrado na lista.\n`);
  }
}

function exibirMenu() {
  console.log("========== GAMERTEAM MANAGER ==========");
  console.log("1 - Cadastrar jogador");
  console.log("2 - Listar jogadores");
  console.log("3 - Buscar jogador");
  console.log("4 - Sair");
  console.log("5 - Atualizar Pontos");
  console.log("========================================");
}


let opcao;

do {
  exibirMenu();
  opcao = Number(prompt("Escolha uma opção do menu: "));

  switch (opcao) {
    case 1:
      cadastrarJogador();
      break;
    case 2:
      listarJogadores();
      break;
    case 3:
      buscarJogador();
      break;
    case 4:
      console.log("Saindo do sistema... Até mais!");
      break;
    case 5:
      atualizarPontuacao();
      break;
    default:
      console.log("Opção inválida! Tente novamente.\n");
  }
} while (opcao !== 4);