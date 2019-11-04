function staircase(n) {
  let $str = '#';
  let $spc = ' ';
  let $output = '';
  for (let i = 1, j = n - 1; i <= n; i++ , j--) {
    console.log($output.concat($spc.repeat(j), $str.repeat(i)));
  }
}

staircase(6);
//      #
//     ##
//    ###
//   ####
//  #####
// ######
