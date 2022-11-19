import { Timer } from "./timer";

export function modalWin(el, elems) {
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];

  function showModalWin() {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  };
  btn.onclick = function () {
    if (
      modal.querySelector("#timer").value.length > 0 &&
      modal.querySelector("#gamers").value.length > 0
    ) {
      el.style.display = "block";
      elems.style.display = "none";
      modal.style.display = "none";
      let inputTimer = modal.querySelector("#timer").value;
      Timer(inputTimer);
    }
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  showModalWin();
}
