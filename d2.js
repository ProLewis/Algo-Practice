var countBits = function (n) {
    // Program Me
    let nBit = n.toString(2);
    console.log(nBit);
    let count = 0;
    for (let i = 0; i < nBit.length; i++) {
        if (nBit[i] == 1) {
            count ++;
        }
    }
    return count;
};

console.log(countBits(1234));