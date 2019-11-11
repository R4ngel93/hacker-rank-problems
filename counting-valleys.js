
/*Print a single integer that denotes the number of valleys Gary walked through during his hike.*/
function countingValleys(n, s) {
  let count = 0;
  let alt = 0;
  let $array = s.split('');
  for (let i = 0; i < n; i++) {
    if ((alt == 0 && $array[i] == 'D') || (alt == -1 && $array[i] == 'U')) {
      count += 0.5;
    }
    switch ($array[i]) {
      case 'U':
        alt++;
        break;
      case 'D':
        alt--;
        break;
    }
  }
  return count;
}
let test = countingValleys(8, "UDDDUDUU");
console.log(test);


