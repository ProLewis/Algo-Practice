// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    if (bonus < price) return 0;
    let totalBill = 0;
    let layerCounter = 1;
    while (totalBill <= bonus) {
        totalBill += layerCounter * layerCounter * price;
        console.log("layer #: " + layerCounter);
        console.log("Total bill: "+ totalBill);
        if (totalBill > bonus) return layerCounter - 1;
        else layerCounter++;
    }
}

console.log(beeramid(9, 2));