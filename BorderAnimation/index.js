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

// --------------------------------------------------------------------------------

// Mudando styles
const stylesList = ["multi", "single", "dual"];
let currentStyleIndex = 0;

function toggleStyle() {
  let card = document.getElementById("loremCard");  
  
  // remove a classe atual
  card.classList.remove(`card-${stylesList[currentStyleIndex]}`)

  if (currentStyleIndex < stylesList.length - 1)
    currentStyleIndex++;
  else
    currentStyleIndex = 0;

  // adidiona a nova classe
  card.classList.add(`card-${stylesList[currentStyleIndex]}`)
}