/*This function rounds values greater than 38 to the next multiple of 5 */
function gradingStudents(grades) {
  return grades.map(mapping);
  function mapping(item) {
    switch (true) {
      case item < 38:
        return item;
      case (item + 1) % 5 == 0:
        return item + 1;
      case (item + 2) % 5 == 0:
        return item + 2;
      default:
        return item;
    }
  }
}

let $test = gradingStudents([73, 67, 38, 33]); //Should return [ 75, 67, 40, 33 ]
console.log($test);
