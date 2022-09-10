import { printError, printResult, printTime } from './js/printResult.js';
import getDateDiff from './js/getDateDiff.js';
import { openTab } from './js/openTab.js';
import stratTimer from './js/stratTimer.js';

import './style.scss'

const tabs = document.querySelector('.tab')
tabs.addEventListener('click', openTab)
document.querySelectorAll('.tablinks')[0].classList.add('tab-active');
document.querySelectorAll('.tabcontent')[0].style.display = 'block';

const form = document.getElementById('datecalc-form');

form.onsubmit = (event) => {
  event.preventDefault(event);

  const formData = new FormData(event.target)

  const firstInput = formData.get('firstDate')
  const secondInput = formData.get('secondDate')

  const dateDiff = getDateDiff(firstInput, secondInput)

  if (!firstInput || !secondInput) {
    printError('Oooppppsss - Введите дату!!!!')
  } else {
    printResult(dateDiff)
  }
}

const buttonRun = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');

const timerInput = document.getElementById('input-time'); 
let timeMinut;
let timer;

buttonRun.addEventListener('click', function () {
  timeMinut = parseInt(timerInput.value) * 60;
  if (timeMinut) timer = stratTimer(timeMinut);
})
buttonStop.addEventListener('click', function () {
  clearInterval(timer);
  timeMinut = 0;
  printTime(0, 0, 0);
})


