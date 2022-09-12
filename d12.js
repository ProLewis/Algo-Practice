//Converting String to Number
const stringToNumber = function (str) {
    return Number(str);
}

//Sorting a given string based on the number inside each word
function order(words) {
    if (words.length === 0) {
        return words;
    }
    let wordArray = words.split(" ");
    let sortedArray = [];
    let r = /\d+/;
    for (let i = 0; i < wordArray.length; i++) {
        sortedArray[wordArray[i].match(r)-1] = wordArray[i];
    }
    return sortedArray.join(" ");
}
