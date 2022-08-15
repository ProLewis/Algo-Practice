function zero(op) {
    if (!op) {
        return 0;
    }
    return op(0)
}
function one(op) {
    if (!op) {
        return 1;
    }
    return op(1)
}
function two(op) {
    if (!op) {
        return 2;
    }
    return op(2)
}
function three(op) {
    if (!op) {
        return 3;
    }
    return op(3)
}
function four(op) {
    if (!op) {
        return 4;
    }
    return op(4)
}
function five(op) {
    if (!op) {
        return 5;
    }
    return op(5)
}
function six(op) {
    if (!op) {
        return 6;
    }
    return op(6)
}

function seven(op) {
    if (!op) {
        return 7;
    }
    return op(7)
}

function eight(op) {
    if (!op) {
        return 8;
    }
    return op(8)
}
function nine(op) {
    if (!op) {
        return 9;
    }
    return op(9)
}

function plus(x) {
    return function(y) {
        return y + x;
    }
}
function minus(x) {
    return function(y) {
        return y - x;
    }
}
function times(x) {
    return function(y) {
        return y * x;
    }
}
function dividedBy(x) {
    return function(y) {
        return Math.floor(y / x);
    }
}

console.log(seven(plus(one())));

