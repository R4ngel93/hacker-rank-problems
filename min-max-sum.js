/** 
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr) {
  let $array = arr.sort((a, b) => a - b);
  let $min = $array.slice(0, $array.length - 1).reduce((a, b) => a + b);
  let $max = $array.slice(1, $array.length).reduce((a, b) => a + b);

  console.log(`${$min} ${$max}`);
}
miniMaxSum([1, 2, 3, 4, 5]);//Should return: 10 14 
