function solve(arr) {
    result = [];
    currentNumber = 1;
    for (const el of arr) {
        if (el === 'add') {
            result.push(currentNumber)
            currentNumber++;
        } else {
            result.pop();
            currentNumber++;
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    }

    for (const el of result) {
        console.log(el);
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);