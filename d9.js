//Sudoku Checker

function doneOrNot(board) {

    for (let y = 0; y < 9; y++) {
        let map = {};
        for (let x = 0; x < 9; x++) {
            if (map[board[y][x]]) {
                return "Try again!"
            }
            else {
                map[board[y][x]] = 1;
            }
        }
    }
        
    for (let x = 0; x < 9; x++) {
        map = {};
        for (let y = 0; y < 9; y++) {
            if (map[board[y][x]]) {
                return "Try again!"
            }
            else {
                map[board[y][x]] = 1;
            }
        }
    }

    map = {};
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (map[board[y][x]]) {
                return "Try again!"
            }
            else {
                map[board[y][x]] = 1;
            }
        }
    }
    map = {};
    for (let y = 3; y < 6; y++) {
        for (let x = 3; x < 6; x++) {
            if (map[board[y][x]]) {
                return "Try again!"
            }
            else {
                map[board[y][x]] = 1;
            }
        }
    }
    map = {};
    for (let y = 6; y < 9; y++) {
        for (let x = 6; x < 9; x++) {
            if (map[board[y][x]]) {
                return "Try again!"
            }
            else {
                map[board[y][x]] = 1;
            }
        }
    }
    return "Finished!";
}
