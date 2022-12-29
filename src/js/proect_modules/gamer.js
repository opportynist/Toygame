export function Gamers() {
  const btn = document.querySelector(".game__block-btn");

  let blocGamers = document.querySelector(".game__block__numberGamer");
  let flagtt = 1;
  blocGamers.innerText = `Игрок ${flagtt}`;

  btn.addEventListener("click", () => {
    let gamers = document.querySelector("#gamers").value;
    flagtt++;
    if (flagtt > gamers) {
      flagtt = 1;
    }
    blocGamers.innerText = `Игрок ${flagtt}`;
  });
}
