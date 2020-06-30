function solve(arr) {
    let delimiter = arr[arr.length - 1];
    let result = '';
    for (let i = 0; i < arr.length - 2; i++) {
        const el = arr[i];
        result += el + delimiter
    }

    console.log(result + arr[arr.length - 2]);
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);