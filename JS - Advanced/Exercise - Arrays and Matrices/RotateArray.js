function solve(arr) {
    let rotationCount = arr[arr.length - 1]
    let resultArr = [];
    for (const el of arr) {
        resultArr.push(el);
    }
    resultArr.pop();
    for (let i = 0; i < rotationCount; i++) {
        const lastElement = resultArr[resultArr.length - 1];
        resultArr.unshift(lastElement);
        resultArr.pop();
    }

    console.log(resultArr.join(' '));
}

solve(['1', '2', '3', '4', '2'])