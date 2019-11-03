/*
 *Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. 
 *Print the decimal value of each fraction on a new line. 
 * */

function plusMinus(arr) {
  let $array = arr.slice();
  let $div = $array.length;
  let $pos = $array.filter(n => n > 0).length;
  let $neg = $array.filter(n => n < 0).length;
  let $zer = $array.filter(n => n == 0).length;

  console.log($pos / $div);
  console.log($neg / $div);
  console.log($zer / $div);
}

plusMinus([-4, 3, - 9, 0, 4, 1])
