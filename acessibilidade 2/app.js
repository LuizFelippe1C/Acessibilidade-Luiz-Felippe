const form = document.getElementById('treinoForm');
const resultado = document.getElementById('resultado');

const temaBtn = document.getElementById('temaBtn');
const contrasteBtn = document.getElementById('contrasteBtn');
const fonteBtn = document.getElementById('fonteBtn');
const salvarBtn = document.getElementById('salvarBtn');
const imprimirBtn = document.getElementById('imprimirBtn');

// Alternar tema
temaBtn.addEventListener('click', () => {
  document.body.classList.toggle('tema-escuro');
  localStorage.setItem('tema', document.body.classList.contains('tema-escuro'));
});

// Alto contraste
contrasteBtn.addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
});

// Aumentar fonte
fonteBtn.addEventListener('click', () => {
  document.body.classList.toggle('fonte-grande');
});

// Gerar plano de treino
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const posicao = form.posicao.value;
  const estilo = form.estilo.value;
  const nivel = form.nivel.value;
  const objetivos = form.objetivos.value;
  const tempo = form.tempo.value;
  const dias = form.dias.value;

  resultado.innerHTML = `
    <div class="plano">
      <h3>Plano para ${posicao} (${nivel})</h3>
      <p><strong>Estilo:</strong> ${estilo}</p>
      <p><strong>Tempo por treino:</strong> ${tempo} min</p>
      <p><strong>Dias por semana:</strong> ${dias}</p>
      <p><strong>Objetivos:</strong> ${objetivos}</p>
    </div>
  `;
});

// Salvar plano no localStorage
salvarBtn.addEventListener('click', () => {
  localStorage.setItem('planoTreino', resultado.innerHTML);
  alert('Plano salvo!');
});

// Carregar plano salvo ao abrir
window.addEventListener('load', () => {
  if (localStorage.getItem('planoTreino')) {
    resultado.innerHTML = localStorage.getItem('planoTreino');
  }

  if (localStorage.getItem('tema') === 'true') {
    document.body.classList.add('tema-escuro');
  }
});

// Imprimir / PDF
imprimirBtn.addEventListener('click', () => {
  window.print();
});
