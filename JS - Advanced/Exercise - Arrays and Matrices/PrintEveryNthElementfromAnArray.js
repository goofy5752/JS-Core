function solve(arr) {
    let lastEl = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
        const el = arr[i];
        if (i % lastEl === 0) {
            console.log(el);
        }
    }
}

solve(['5', '20', '31', '4', '20', '2']);