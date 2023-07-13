
const button = document.getElementById("button");
const circleLoad = document.getElementById('circle-load');
const alerta = document.getElementById("alert");
const root = document.documentElement;
const timeAnimation = '1s';

root.style.setProperty('--timeAnimation', timeAnimation);

button.addEventListener('click', () => {
  alerta.classList.remove('animation-movealert');
  circleLoad.classList.remove('hide');
  circleLoad.classList.add('animation-rotatecircleload');
  setTimeout(() => {
    circleLoad.classList.remove('animation-rotatecircleload');
    alerta.classList.add('animation-movealert');
    circleLoad.classList.add('hide');
  }, 2000);
});