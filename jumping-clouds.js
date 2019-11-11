//Jump some clouds

function jumpingOnClouds(c) {
  let $jumps = 0;
  for (let i = 0; i < c.length; i++) {
    switch (true) {
      case c[i] == 0 && c[i + 1] == 0 && c[i + 2] == 0:
        $jumps++;
        i++;
        break;
      case (c[i] == 0 && c[i + 1] == 0 && c[i + 2] == 1) || (c[i] == 0 && c[i + 1] == 0):
        $jumps++;
        break;
      case c[i] == 0 && c[i + 1] == 1:
        $jumps++;
        i++;
        break;
    }
  }
  return $jumps;
}

let $test = jumpingOnClouds([0, 0, 0, 1, 0, 0,]);
console.log($test);
