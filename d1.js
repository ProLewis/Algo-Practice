//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    let result = "";
    let stringNum = num.toString();
    let len = stringNum.length;
    for (let i = 0; i < len; i++) {
        result = "" + result + (stringNum[i] * stringNum[i]);
    }
    return parseInt(result);
}

//console.log(squareDigits(9119));


//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    
    str = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]=="x") {
            xCount++;
        }
        if (str[i]=="o") {
            oCount++;
        }
    }
    if (xCount == oCount) return true;
    else return false;
}

console.log(XO("XOx"));
