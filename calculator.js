var screen = document.getElementById('screen'),
    fullscreen = document.getElementById('fullscreen'),
    fullscreenInner = document.getElementById('fullscreenInner'),
    keyboard = document.getElementById('keyboard'),
    keys = document.getElementsByClassName('key'),
    buttonHome = document.getElementById('buttonHome'),
    expr = 0;

screen.value = 0;

function pressKey(e) {
  var target = e.target;
  if (target.innerText === 'AC') {
    screen.value = '0';
  } else if (target.innerText === '+') {
    expr = screen.value + ' + ';
    screen.value = '0';
  } else if (target.innerText === '−') {
    if (screen.value !== '0') {
      expr = screen.value + ' - ';
      screen.value = '0';
    } else {
      screen.value = '-';
    }
  } else if (target.innerText === '×') {
    expr = screen.value + ' * ';
    screen.value = '0';
  } else if (target.innerText === '÷') {
    expr = screen.value + ' / ';
    screen.value = '0';
  } else if (target.innerText === ',') {
    if (!~screen.value.indexOf('.')) { // allows to input only one period symbol
      screen.value += '.';
    }
  } else if (target.innerText === '=') {
    screen.value = eval(expr += '(' + screen.value + ')');
    expr = '';
  } else {
    if (screen.value !== '0') {
      screen.value  += target.innerText;
    } else { // removes zero at the start of the number
      screen.value = '';
      screen.value  += target.innerText;
    }
  }
}

function pressHome() {
  expr = 0;
  screen.value = 0;
  fullscreen.classList.toggle('fullscreen-off');
  fullscreenInner.classList.toggle('fullscreen-inner');
}

keyboard.addEventListener('click', pressKey);
buttonHome.addEventListener('click', pressHome);
