function solve(arr) {
    let isEqualNumber = 0;
    let numberToCheck = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            isEqualNumber += arr[i][k];
        }
        break;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            numberToCheck += arr[i][k];
        }
        if (numberToCheck !== isEqualNumber) {
            console.log('false')
            return;
        }
        numberToCheck = 0;
    }

    for (let i = 0; i < arr[0].length; i++) {
        arr.forEach(array => {
            numberToCheck += array[i]
        });
        if (numberToCheck !== isEqualNumber) {
            console.log('false')
            return;
        }
        numberToCheck = 0;
    }

    console.log('true')
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])