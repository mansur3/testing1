function sudoku_main(input) {
    input = input.trim().split("\n");
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        arr.push(input[i].trim().split(" ").map(Number));
    }

    let ans = [];
    sudoku(arr, 0, 0, ans);
    if(ans.length === 0) { 
        console.log(-1);
    } else {
        console.log(data);
    }


}

var data = [];

sudoku_main(`0 4 0 0 0 0 1 7 9 
0 0 2 0 0 8 0 5 4 
0 0 6 0 0 5 0 0 8 
0 8 0 0 7 0 9 1 0 
0 5 0 0 9 0 0 3 0 
0 1 9 0 6 0 0 4 0 
3 0 0 4 0 0 7 0 0 
5 7 0 1 0 0 2 0 0 
9 2 8 0 0 0 0 6 0`)
// console.log(data); 

function sudoku(arr, row, column, ans) {
    if(column > 8) {
        if(row === 8) {
            for (let k = 0; k < arr.length; k++) {
                // console.log(arr[k].join(" "));
                data.push(arr[k].join(" "))
                
            }
            ans.push(1);
            return;
        }
        row++;
        column = 0; 
    }

    if(arr[row][column] !== 0) {
        sudoku(arr, row, column + 1, ans);
    } else {
        for (let k = 1; k <= 9; k++) {
            if(checkStraight(arr, row, column, k) && checkrow(arr, row, column, k) && checkTiles(arr, row, column, k)) {
                arr[row][column] = k;
                sudoku(arr, row, column + 1, ans);
                arr[row][column] = 0;
            }
        }
    }
}

function checkStraight(arr, row, column, ans) {
    for (let k = 0; k <= 8; k++) {
        if(arr[k][column] === ans) {
            return false;
        }
    }
    return true;
}

function checkrow(arr, row, column, ans) {
    for (let k = 0; k <= 8; k++) {
        if(arr[row][k] === ans) {
            return false;
        }
    }
    return true;
}

function checkTiles(arr, row, column, ans) {
    let startRow = row - row % 3;
    let startCol = column - column % 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(arr[startRow + i][startCol + j] === ans) {
                return false;
            }
        }
    }
    return true;
}


module.exports = sudoku_main;