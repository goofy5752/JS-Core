function solve(arr) {
    let array = [];
    arr.forEach(el => {
        array.push(el.split(' '))
    });

    let newArr = [];
    while (array.length) {
        newArr.push(array.splice(0, array.length));
    }
    console.table(newArr);

    for (let i = 0; i < newArr[0].length; i++) {
        for (let k = 0; k < newArr.length; k++) {}
    }
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])