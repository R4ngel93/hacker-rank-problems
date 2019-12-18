/*
Solution taken from:
https://dev.to/edmondso006/hashtables-ransom-note-hackerrank-1p14
*/

function checkMagazine(magazine, note) {
  let hashTable = {};
  let output = 'Yes';

  for(let i = 0; i < magazine.length; i++){
    let word = magazine[i];
    hashTable[word] = hashTable[word] ? hashTable[word] + 1 : 1;
  }

  for(let j = 0; j < note.length; j++){
    
    if(!(note[j] in hashTable)){
      output = "No";
      break;
    }else{
      if(hashTable[note[j]] < 1){
        output = "No";
        break;
      }
      hashTable[note[j]]-=1;
    }
  }
  console.log(output);
}
