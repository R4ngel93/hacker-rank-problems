/*Complete the function minimumSwaps in the editor below. 
It must return an integer representing the minimum number of swaps to sort the array.*/

function minimumSwaps(arr) {
    let swap = 0;
    let a = 0;
    for(let i = 0; i < arr.length; i++){
        while(arr[i] != i + 1){
            a = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = a;
            swap++;
        }
    }
    return swap;
}
