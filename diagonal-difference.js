/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 * The function sums both diagonals of the array.
 */

function diagonalDifference(arr) {
  let $array = arr.slice();
  let a = 0;
  let b = 0;

  for (let j = 0, i = $array.length - 1; j < $array.length && i >= 0; j++ , i--) {
    a += $array[j][j];
    b += $array[j][i];
  }
  return Math.abs(a - b);
}

diagonalDifference([
  [1, 2, 5],
  [4, 5, 6],
  [10, 8, 9]]);
