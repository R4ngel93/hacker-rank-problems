/*New year chaos - HackerRank*/
function minimumBribes(q) {
    let myArray = q.slice();
    let counter = 0;
    
    for(let i = myArray.length - 1; i >= 0; i--){
        if (myArray[i] - (i + 1) >= 3){
            return "Too chaotic";
        }
        for(let j = myArray[i]-2; j<i ;j++ ){
            if(myArray[j]>myArray[i]){
                counter++;
            }
        }
    };
    return counter;
}
