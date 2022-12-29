export function lastWordOfMasTown(elems) {
  let lastTown = "";

  for (let e of elems) {
    lastTown = e;
  }

  let lastw = lastWord(lastTown);
  return lastw;
}

export function lastWord(arg) {
  return arg.substr(arg.length - 1);
}

export function firstWord(arg) {
  return arg[0];
}
export function showLastWorld(el, block) {
  let lastWordMssTown = el.length - 1;
  block.textContent = el[lastWordMssTown];
}

export function showErrorRepet(val, block) {
  block.textContent = `Это слово уже было ${val}`;
}
export function showErrorWord(oneWord, block) {
  block.textContent = `Слово должно начинаться с ${oneWord}`;
}
