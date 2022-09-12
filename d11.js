function getPINs(observed) {
    // Possible neighbor values for each PIN button
    let neighbors = {
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['5', '7', '8', '9', '0'],
        '9': ['6', '8', '9'],
        '0': ['8', '0']
    }
    let combos = [];
    let digits = observed.toString().split('');
    console.log(digits);

    if (digits.length === 0) {
        return [];
    }

    for (var i = 0; i < digits.length; i++){

    }
    
    for (var i = 0; i < digits.length; i++) {
        console.log("loop: " + i)
        console.log("digit: " + digits[i]);

        for (var j = 0; j < neighbors[digits[i]].length; j++) {
            //console.log(neighbor);

            //combos.push(neighbor);
        }
    }
    console.log(combos);
    
}

getPINs(12);