// Complete the primality function below.

function primality(n) {
let modArray = [];
  for(let i = 1; i <= n; i++){
    n % i === 0 ? modArray.push(n % i) : null;
  }
  return modArray.length === 2 ? 'Prime' : 'Not prime';
}
