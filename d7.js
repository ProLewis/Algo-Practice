//Valid Parentheses

function validParentheses(parens) {
    let openCount = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === "(") {
            openCount++;
        }
        if (parens[i] === ")") {
            if (openCount < 1) {
                return false;
            }
            else {
                openCount--;
            }
        }
    }
    if (openCount > 0) {
        return false;
    }
    return true;
}

console.log(validParentheses("()"));

