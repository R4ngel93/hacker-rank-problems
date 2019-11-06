/*Change 12 hrs format to 24 hrs format*/
function timeConversion(s) {
  let $array = s.split(':');
  switch (true) {
    case $array[2].includes('PM'):
      if ($array[0] != '12') {
        $array[0] = parseInt($array) + 12;
      }
      $array[2] = $array[2].slice(0, 2);
      break;
    case $array[2].includes('AM'):
      if ($array[0] == '12') {
        $array[0] = '00';
      }
      $array[2] = $array[2].slice(0, 2);
      break;
  }
  $array = $array.join(':');
  console.log($array);
  return $array;
}
timeConversion("12:05:45AM");
