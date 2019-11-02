/*Compare two arrays, if a[i] is bigger than b[i] then alice gets 1 point and so on*/

function compareTriplets(a, b) {
  let $output = [];
  let $alice = 0;
  let $bob = 0;
  for (let i = 0; i < a.length; i++) {
    switch (true) {
      case a[i] > b[i]:
        $alice++;
        break;
      case a[i] < b[i]:
        $bob++;
        break;
      case a[i] == b[i]:
        $alice = $alice;
        $bob = $bob;
        break;
    }
  }
  $output.push($alice, $bob);
  return $output;
}
compareTriplets([5, 6, 7], [3, 6, 10]);
