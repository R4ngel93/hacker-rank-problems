/*Rotate a given array(a) d times to left*/
function rotLeft(a, d) {
  let $array = a.slice();
  for (let i = 0; i < d; i++) {
    $array.push($array[0]);
    $array.shift();
  }
  return $array;
}

let test = rotLeft([1, 2, 3, 4, 5], 4);
console.log(test);
