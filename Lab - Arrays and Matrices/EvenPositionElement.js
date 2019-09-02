function solve(arr){
    let evenPos = '';

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            let evenElement = arr[i];
            evenPos += (evenElement + ' ');
        }
    }

    console.log(evenPos.trim());
}

solve(['5', '10']);