function arrayManipulation(n, queries) {
  /* Variables */
  let myArray = [];
  let output = 0;
  let itt = 0;

  /* Array of zeros */
  for (let i = 0; i < n; i++) {
    myArray.push(0);
  }

  /* Queries */
  for (let i = 0; i < queries.length; i++) {
    myArray[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] != myArray.length) {
      myArray[queries[i][1]] -= queries[i][2];
    }
  }
  console.log(myArray);

  /* Maximum value */
  for (let j = 0; j < myArray.length; j++) {
    itt += myArray[j];
    if (itt > output) {
      output = itt;
    }
  }
  return output;
}

let test = arrayManipulation(10, [
  //a b  k 
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1]]);

console.log(test);

