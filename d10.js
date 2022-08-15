//Next bigger number with the same digits

function nextBigger(n){
    let stringNum  = n.toString();
    console.log(stringNum);
    let size = stringNum.length;
    //console.log(size);
    for (let i = size - 1; i > 0; i--){
        if (stringNum[i] > stringNum[i - 1]) {
            console.log(stringNum[i]);
            let temp = 
            [stringNum[i - 1], stringNum[i]] = [stringNum[i], stringNum[i-1]];
            console.log(stringNum);
            
            break;
        }

        
    }
    //return -1;
}

console.log(nextBigger(12543))