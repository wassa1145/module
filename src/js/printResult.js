const result = document.getElementById('datecalc__result');

const strTimer = document.getElementById('timer');

const formatTime = (val) => {
  if (Number.isNaN(val)) return '00';
  if (Number(val) < 10) {
    return `0${val}`
  }
  return val
};

export const printError = (errorText) => {
  result.innerText = errorText
}

export const printResult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
} 

export const printTime = (hour, min, sec) => {
  strTimer.innerHTML = `${formatTime(Math.trunc(hour))}:${formatTime(Math.trunc(min))}:${formatTime(sec)}`;
}
