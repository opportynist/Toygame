import { modalWin } from "./modalWin";

export function funStart(el, elems) {
  elems.addEventListener("click", function () {
    modalWin(el, elems);
  });
}
