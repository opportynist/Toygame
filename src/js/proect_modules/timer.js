let t = document.querySelector(".game__timer-length");
const btnTimer = document.querySelector(".game__block-btn");
const input = document.querySelector(".game__block-input");
let timerNumber = document.querySelector(".game__timer-minutes");
let time = document.querySelector("#timer").value;

const btn = document.querySelector(".game__block-btn");

export function Timer(inputTimer, inputTimerSec) {
  let timerMin = (inputTimer * 60 + "s" + inputTimerSec).toString();
  let r = (t.style.animationDuration = timerMin);

  fanAminationTimer();
}

export function fanAminationTimer() {
  t.classList.toggle("animation-timer");
}

// таймер
let secon = timerNumber.querySelector(".second");
let min = timerNumber.querySelector(".min");

export function timeStar(minutes = 1, seconds = 1) {
  let flag = true;
  let interval;
  let minut = minutes;
  let second = seconds;
  secon.innerText = second > 10 ? second : `0${second}`;
  min.innerText = minut > 10 ? minut : `0${minut}`;
  function startTimer() {
    if (second <= 0 && minut > 0) {
      min.innerText = minut--;
      secon.innerHTML = `00`;
      second = 60;
    }
    if (second < 10) {
      secon.innerText = `0${second}`;
    }

    if (minut < 10) {
      min.innerText = `0${minut}`;
    }
    if (minut <= 0 && secon == 0) {
      clearInterval(interval);
      secon.innerText = "00";
      min.innerText = "00";
    }
    if (second > 0 || minut > 0) {
      second--;
      secon.innerText = second;
      console.log(second);
    }
  }

  btn.addEventListener("click", () => {
    clearInterval(interval);
    second = seconds;
    minut = minutes;
    flag = true;
    input.focus();
  });

  input.addEventListener("blur", function () {
    flag = false;
  });

  input.addEventListener("focus", function () {
    if (flag) {
      interval = setInterval(startTimer, 1000);
    }
  });
}
