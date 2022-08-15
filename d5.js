//Product of Consecutive Fib numbers

function productFib(prod){
    let fibSeq = [0, 1];
    let i = 0;
    let fibProd = fibSeq[i] * fibSeq[i+1];
    while (prod > fibProd) {
        fibSeq.push(fibSeq[i] + fibSeq[i+1]);
        i++;
        fibProd = fibSeq[i] * fibSeq[i+1];
    }
    return [fibSeq[i], fibSeq[i+1], prod === fibProd];
}

console.log(productFib(8));