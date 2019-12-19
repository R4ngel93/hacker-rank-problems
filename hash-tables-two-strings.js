let test = input => console.log(input);

function twoStrings(s1, s2) {
  let hash_table = {};
  let output = 'NO';

  for (let i = 0; i < s2.length; i++) {
    let letter = s2[i];
    hash_table[letter] = null;
  }
  for (let j = 0; j < s1.length; j++) {
    if (s1[j] in hash_table) {
      output = 'YES';
    }
  }
  return output;
}

test(twoStrings("hello", "world"));
