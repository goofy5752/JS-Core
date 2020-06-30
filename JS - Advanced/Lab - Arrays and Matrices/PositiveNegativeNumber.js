function solve(arr) {
    let negativeArr = [];
    let positiveArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < 0) {
            negativeArr.push(element);
        } else {
            positiveArr.push(element);
        }
    }

    negativeArr = negativeArr.sort((a, b) => a - b).reverse();

    for (let i = 0; i < negativeArr.length; i++) {
        const element = negativeArr[i];
        console.log(element);
    }

    for (let i = 0; i < positiveArr.length; i++) {
        const element = positiveArr[i];
        console.log(element);
    }
}

solve([3,-2,0,-1]);