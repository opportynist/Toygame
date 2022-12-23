import { lastWordOfMasTown } from "./function";
import { lastWord } from "./function";
import { firstWord } from "./function";
import { showLastWorld } from "./function";
import { showErrorRepet } from "./function";
import { showErrorWord } from "./function";
import { Timer } from "./timer";
import { funStart } from "./startGame";
import { startTimer } from "./timer";
import { showError } from "./showError";

export function mainFan() {
  //the main array
  let arrayAllTown = [];
  const input = document.querySelector(".game__block-input");
  const btn = document.querySelector(".game__block-btn");
  const allmain = document.querySelector(".game");
  const outputLastWowd = allmain.querySelector(".last-word");
  const startGame = document.querySelector(".page__start__game");

  // animation of the timer at the start
  startGame.addEventListener("click", funStart);
  // launching the check and add function
  btn.addEventListener("click", fanMain);

  // starting the timer function
  btn.addEventListener("click", Timer);

  // getting the last letter of the last word in the array

  // deleting input
  input.addEventListener("focus", function () {
    input.value = "";
  });
  input.addEventListener("input", function () {
    showError(arrayAllTown);
  });

  //  the check and add function
  function fanMain() {
    let val = input.value.toLowerCase().trim();
    let firstLetterTown = lastWordOfMasTown(arrayAllTown);
    // getting the first letter in input
    let firstLatter = firstWord(val);
    // checking for a match
    let checkWord = arrayAllTown.includes(val);
    console.log(val);

    // check 1
    if (arrayAllTown.length == 0 && val.length > 0) {
      arrayAllTown.push(val);

      // showing the last word in the array
      showLastWorld(arrayAllTown, outputLastWowd);
      // check 2
    } else if (arrayAllTown.length > 0) {
      if (firstLetterTown == firstLatter && !checkWord) {
        arrayAllTown.push(val);

        showLastWorld(arrayAllTown, outputLastWowd);
      } else if (checkWord) {
        // error output
        showErrorRepet(val, outputLastWowd);
      } else if (firstLetterTown != firstLatter) {
        // error output
        showErrorWord(firstLetterTown, outputLastWowd);
      }
    }
  }
}
