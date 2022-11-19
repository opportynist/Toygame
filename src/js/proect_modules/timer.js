let t = document.querySelector(".game__timer-length");
const btnTimer = document.querySelector(".game__block-btn");
const input = document.querySelector(".game__block-input");

input.addEventListener("focus", function () {});
export function Timer(inputTimer) {
  let timerMin = (inputTimer * 60 + "s").toString();
  let r = (t.style.animationDuration = timerMin);

  fanAminationTimer();
}

export function fanAminationTimer() {
  t.classList.toggle("animation-timer");
}
