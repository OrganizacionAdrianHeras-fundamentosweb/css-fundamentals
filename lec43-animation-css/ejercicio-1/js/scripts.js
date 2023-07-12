
const button = document.getElementById("button");
const alerta = document.getElementById("alert");
const root = document.documentElement;
const timeAnimation = '1s';

root.style.setProperty('--timeAnimation', timeAnimation);

button.addEventListener('click', () => {
  alerta.classList.remove('add-animation');
  setTimeout(() => {
    alerta.classList.add('add-animation');
  }, timeAnimation)
});