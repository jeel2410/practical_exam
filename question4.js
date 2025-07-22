function addChar(str) {
  let len = str.length;
  let s = 0;
  let e = len - 1;
  let res = 1;

  while (s < e) {
    if (str[s] === str[e]) {
      s++;
      e--;
    } else {
      res++;
      s = 0;
      e = len - res - 1;
    }
  }
  return res;
}

console.log(addChar("abc"));
console.log(addChar("aacecaaa"));
console.log(addChar("madam"));
