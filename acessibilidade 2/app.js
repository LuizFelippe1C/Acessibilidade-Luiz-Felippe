// script.js

// ---------------------------
// Painel de acessibilidade
// ---------------------------
const btnAcessibilidade = document.getElementById('acessibilidade-fixo');
const painel = document.getElementById('painel-acessibilidade');

btnAcessibilidade.addEventListener('click', () => {
    const aberto = painel.style.display === 'block';
    painel.style.display = aberto ? 'none' : 'block';
    btnAcessibilidade.setAttribute('aria-expanded', !aberto);
});

// Fecha painel ao clicar fora
document.addEventListener('click', (e) => {
    if (!painel.contains(e.target) && !btnAcessibilidade.contains(e.target)) {
        painel.style.display = 'none';
        btnAcessibilidade.setAttribute('aria-expanded', 'false');
    }
});

// ---------------------------
// Controle de tamanho da fonte
// ---------------------------
const aumentarFonteBtn = document.getElementById('aumentar-fonte');
const diminuirFonteBtn = document.getElementById('diminuir-fonte');
let tamanhoFonteAtual = 100; // %

function aplicarTamanhoFonte() {
    document.documentElement.style.fontSize = tamanhoFonteAtual + '%';
}

aumentarFonteBtn.addEventListener('click', () => {
    if (tamanhoFonteAtual < 150) { // limite superior
        tamanhoFonteAtual += 10;
        aplicarTamanhoFonte();
    }
});

diminuirFonteBtn.addEventListener('click', () => {
    if (tamanhoFonteAtual > 60) { // limite inferior
        tamanhoFonteAtual -= 10;
        aplicarTamanhoFonte();
    }
});

// ---------------------------
// Alternar tema escuro/claro
// ---------------------------
const btnTema = document.getElementById('alternar-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
