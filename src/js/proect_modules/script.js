let masTown = ["sssss", "gggg", "ffff", "lkdyyeg"];
let input = document.querySelector("input");
let btn = document.querySelector("button");
btn.addEventListener("click", funct);

function funct() {
  let val = input.value.toLowerCase();
  if (masTown.length == 0) {
    masTown.push(val);
  } else if (masTown.length > 0) {
    let oneWord = lastWordOfMasTown();
    let towWord = firstWord(val);

    if (oneWord == towWord) {
      let s = masTown.includes(val);
      if (!s) {
        masTown.push(val);
      } else if (s) {
        console.log("элемент уже есть ");
      }
      console.log(masTown);
    }
  }
}

function lastWordOfMasTown() {
  let lastTown = "";
  for (let i = 0; i < masTown.length; i++) {
    lastTown = masTown[i];
  }

  let lastw = lastWord(lastTown);
  return lastw;
}

function lastWord(arg) {
  return arg.substr(arg.length - 1);
}

function firstWord(arg) {
  return arg[0];
}

 
