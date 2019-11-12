/*Given an integer, , find and print the number of letter a's in the first letters of Lilah's infinite string.*/

function repeatedString(s, n) {
  let $as = s.split('').filter(item => item == 'a').length;
  let $times = Math.floor(n / s.length);
  let $extra = s.slice(0, n % s.length).split('').filter(item => item == 'a').length;

  return $times * $as + $extra;
}

let test = repeatedString("aba", 10);
console.log(test);
