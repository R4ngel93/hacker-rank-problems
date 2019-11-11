/*
Return the number of pairs of numbers from an array
*/
function sockMerchant(n, ar) {
  let $pairs = 0;
  let $array = ar.slice().sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if ($array[i] == $array[i + 1]) {
      $pairs++;
      i++;
    }
  }
  return $pairs;
}

let $test = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log($test);
