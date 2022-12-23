import { Timer } from "./timer";
import { timeStar } from "./timer";
export function modalWin() {
  let modal = document.getElementById("myModal");
  let checkbox = document.querySelector("#slideThree");
  let timerShow = document.querySelector(".game__timer");
  let btn = modal.querySelector(".btn-timer");
  let span = document.getElementsByClassName("close")[0];
  let time = modal.querySelector("#timer");
  let bff = document.querySelector(".check_box__div");
  let gamers = modal.querySelector("#gamers").value.length;
  let timer = document.querySelector(".timer");
  const allmain = document.querySelector(".game");
  const startGame = document.querySelector(".page__start__game");
  let sec = modal.querySelector("#timerSec").value;

  function cheboxActive() {
    timer.classList.toggle("_active");
  }
  bff.addEventListener("click", cheboxActive);
  btn.onclick = function () {
    time = modal.querySelector("#timer").value;
    sec = modal.querySelector("#timerSec").value;
    gamers = modal.querySelector("#gamers").value;
    if (timer.classList.contains("_active")) {
      if (time > 0 || (sec > 0 && gamers > 0)) {
        allmain.classList.toggle("_active");

        startGame.classList.toggle("_active");

        modal.classList.toggle("_active");
        Timer(time, sec);
      }
    }
    if (!timer.classList.contains("_active")) {
      if (gamers > 0) {
        timerShow.style.display = "none";
        allmain.classList.toggle("_active");

        startGame.classList.toggle("_active");

        modal.classList.toggle("_active");
      }
    }
    timeStar(time, sec);
  };

  function showModalWin() {
    modal.classList.toggle("_active");
  }

  span.onclick = function () {
    modal.classList.toggle("_active");
    bff.removeEventListener("click", cheboxActive);
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.toggle("_active");
      bff.removeEventListener("click", cheboxActive);
    }
  };
  showModalWin();
}
