function solve(arr) {
    let numbersToPrint = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        if (i % 2 === 1) {
            numbersToPrint += element * 2 + ' ';
        }
    }

    console.log(numbersToPrint.trim());
}

solve([3, 0, 10, 4, 7, 3]);