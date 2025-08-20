// Atualiza a variável CSS --vh para corresponder à altura real da viewport.
// Corrige problemas em dispositivos móveis onde 100vh pode incluir a barra do navegador.
function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}


// Atualiza ao carregar a página
setVh();

// Atualiza ao redimensionar a tela (por exemplo, mudar orientação no mobile)
window.addEventListener('resize', setVh);
