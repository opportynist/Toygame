import { showErrorWord } from "./function";
import { lastWordOfMasTown } from "./function";
import { firstWord } from "./function";

export function showError(arrayAllTown) {
  let outputLastWowd = document.querySelector(".last-word");
  const btn = document.querySelector(".game__block-btn");
  const game__block = document.querySelector(".game__block");
  const input = document.querySelector(".game__block-input");
  let firstLetterTown = lastWordOfMasTown(arrayAllTown);
  let val = input.value.toLowerCase().trim();
  let firstLatter = firstWord(val);
  game__block.classList.remove("_error");

  if (firstLetterTown != firstLatter && arrayAllTown.length > 0) {
    btn.disabled = true;
    game__block.classList.add("_error");
    showErrorWord(firstLetterTown, outputLastWowd);
  } else {
    btn.disabled = false;
    game__block.classList.remove("_error");
  }
}
