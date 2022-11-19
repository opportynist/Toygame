import { lastWordOfMasTown } from "./function";
import { lastWord } from "./function";
import { firstWord } from "./function";
import { showLastWorld } from "./function";
import { showErrorRepet } from "./function";
import { showErrorWord } from "./function";
import { Timer } from "./timer";
import { funStart } from "./startGame";

export function mainFan() {
  let masTown = [];
  const input = document.querySelector(".game__block-input");
  const btn = document.querySelector(".game__block-btn");
  let allmain = document.querySelector(".game");
  let lestWord = allmain.querySelector(".last-word");
  const animationTimer = allmain.querySelector(".game__timer-length");
  const startGame = document.querySelector(".page__start__game");
  startGame.addEventListener("click", funStart(allmain, startGame));

  btn.addEventListener("click", fanMain);
  btn.addEventListener("click", Timer);

  input.addEventListener("focus", function () {
    input.value = "";
  });

  function fanMain() {
    let val = input.value.toLowerCase().trim();

    if (masTown.length == 0 && val.length > 0) {
      masTown.push(val);

      showLastWorld(masTown, lestWord);
    } else if (masTown.length > 0) {
      let oneWord = lastWordOfMasTown(masTown);

      let towWord = firstWord(val);

      let s = masTown.includes(val);
      if (oneWord == towWord && !s) {
        masTown.push(val);
        showLastWorld(masTown, lestWord);
      } else if (s) {
        showErrorRepet(val, lestWord);
      } else if (oneWord != towWord) {
        showErrorWord(oneWord, towWord, lestWord);
      }
    }

    console.log(masTown);
  }
}
