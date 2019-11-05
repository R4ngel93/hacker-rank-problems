/**your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3, 
 * she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.  */

function birthdayCakeCandles(ar) {
  let $array = ar.sort((a, b) => b - a);
  let $maxHeight = $array[0];
  let $output = $array.filter(n => n == $maxHeight).length;
  console.log($output);
  return $output;
}
birthdayCakeCandles([3, 2, 1, 3]);
