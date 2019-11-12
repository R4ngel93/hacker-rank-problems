/*2D Array - DS*/
function hourglassSum(arr) {
  let $output = 0;
  let $array = [];
  let $sum = 0;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      //TOP
      $sum += arr[i][j];
      $sum += arr[i][j + 1];
      $sum += arr[i][j + 2];
      //MIDDLE
      $sum += arr[i + 1][j + 1];
      //BOTTOM
      $sum += arr[i + 2][j];
      $sum += arr[i + 2][j + 1];
      $sum += arr[i + 2][j + 2];
      $array.push($sum);
      $sum = 0;
    }
  }
  $output = $array.reduce((a, b) => a > b ? a : b);
  return $output;
}
let test = hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]]);
console.log(test);

/**Link to description */
https://github.com/R4ngel93/Instructions/blob/master/2d-array-English.pdf
