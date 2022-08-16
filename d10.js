//Next bigger number with the same digits

function nextBigger(n){
    
    let arrayNum = Array.from(String(n), Number);
    console.log(arrayNum);
    //let stringNum  = n.toString();
    let nSize = arrayNum.length;

    //looks for a pivot point where a suitable swap can start
    for (var i = nSize - 1; i > 0; i--){
        console.log(i);
        if (arrayNum[i] > arrayNum[i - 1]) {
            break;
        }
    }
    let pivot = i - 1;
    console.log("pivot is: " + arrayNum[pivot]);
    console.log("i: " + i);

    //Compares the last 2 and if no pivot point is found, returns -1
    if (i == 0) {
        return -1;
    }

    
    //Finds the smallest value to the right of the pivot, that is still greater than the pivot
    let smallest = i;
    for (let j = i; j < nSize; j++) {
        if (arrayNum[j] > arrayNum[pivot] && arrayNum[j] < arrayNum[smallest]) {
            smallest = j;
        }
        
    }
    console.log("Smallest is: " + arrayNum[smallest]);

    //Swaps the pivot and smallest value to its right
    [arrayNum[smallest], arrayNum[pivot]] = [arrayNum[pivot], arrayNum[smallest]];
    console.log(arrayNum);

    let output = [];
    output.push(arrayNum.slice(0, i).join(''));
    output.push(arrayNum.slice(i).sort().join(''));
    console.log("Output is: " + output.join(''));
    return Number(output.join(''));
}

console.log(nextBigger(68431));