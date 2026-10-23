// PROJETO DO ALUNO - completo
// Execute com: npm start
const fs = require('node:fs');
const caminho = require('node:path');
const ARQUIVO = caminho.join(__dirname, 'maquinas.json');

function carregarMaquinas() {
  const texto = fs.readFileSync(ARQUIVO, 'utf8');
  const maquinas = JSON.parse(texto);
  return maquinas;
}

function listarMaquinas(maquinas) {
  maquinas.forEach(maquina => {
    console.log(maquina.id + ' - ' + maquina.nome + ' - ' + maquina.status);
  });
}

function buscarPorId(maquinas, id) {
  return maquinas.find(maquina => maquina.id === Number(id)); //Procura na lista e devolve apenas um item (o primeiro que encontrar)
}

function filtrarPorStatus(maquinas, status) {
  return maquinas.filter(maquina => maquina.status === status);//Procura na lista e devolve uma nova lista com todos os itens que cumprem a regra.
}

function filtrarPorSetor(maquinas, setor) {
  return maquinas.filter(maquina => maquina.setor === setor);
}

function executar() {
  console.log('--- Sistema de consultas industriais - CRUD READ ---\n');

  const maquinas = carregarMaquinas();
  listarMaquinas(maquinas);
}

  // 1. Carrega os dados do arquivo
  const maquinas = carregarMaquinas();

  // 2. Lista todas as máquinas
  console.log('--- Lista de Todas as Máquinas ---');
  listarMaquinas(maquinas);

  // 3. Busca máquina por ID (ex: id 3 e id 99)
  console.log('\n--- Busca por ID ---');
  const maquina3 = buscarPorId(maquinas, 3);
  console.log('ID 3:', maquina3 || 'Máquina não encontrada');

  const maquina99 = buscarPorId(maquinas, 99);
  console.log('ID 99:', maquina99 || 'Máquina não encontrada');

  // 4. Filtra por status (ex: 'manutencao')
  console.log('\n--- Filtro por Status (manutencao) ---');
  const emManutencao = filtrarPorStatus(maquinas, 'manutencao');
  console.log(emManutencao);

  // 5. Desafio: Filtra por setor (ex: 'Usinagem')
  console.log('\n--- Filtro por Setor (Usinagem) ---');
  const setorUsinagem = filtrarPorSetor(maquinas, 'Usinagem');
  console.log(setorUsinagem);


if (require.main === module) executar();
module.exports = { carregarMaquinas, listarMaquinas, buscarPorId, filtrarPorStatus, filtrarPorSetor };