export function endmodalWin() {
  let modal = document.getElementById("endGameModal");

  let span = document.getElementsByClassName("closeEnd")[0];

  function showModalWin() {
    modal.classList.toggle("modal_active");
  }

  span.onclick = function () {
    modal.classList.toggle("modal_active");
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.toggle("modal_active");
    }
  };
  showModalWin();
}
