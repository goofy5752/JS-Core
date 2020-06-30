function solve(arr) {
    let highestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        if (i === 0) {
            console.log(highestNumber)
        }
        if (currentNumber > highestNumber) {
            highestNumber = currentNumber
            console.log(highestNumber);
        }
    }
}

solve([20,
    3,
    2,
    15,
    6,
    1
])