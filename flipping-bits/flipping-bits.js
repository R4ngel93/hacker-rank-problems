
function flippingBits(N) {

  let bin = N.toString(2).split('');

  for(let i = bin.length; i < 32; i++ ){
    bin.unshift('0');
  }

  bin = bin.map(bit => bit == '0' ? '1' : '0').join('');

  return parseInt(bin,2);
}
