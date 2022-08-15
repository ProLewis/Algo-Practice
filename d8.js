//RGB to Hex conversion
function valToHex(val){
    if (val <= 0) {
        return "00";
    }
    else if (val >= 255) {
        return "FF";
    }
    let hex = val.toString(16).toUpperCase();
    if (hex.length == 1){
        return "0" + hex;
    }
    else {
        return hex;
    }
}


function rgb(r, g, b){
    return valToHex(r) + valToHex(g) + valToHex(b);
}

console.log(rgb(173, 255, 47));