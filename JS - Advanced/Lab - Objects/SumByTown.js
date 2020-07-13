function solve(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (i % 2 === 0) {
            if (obj.hasOwnProperty(`${el}`)) {
                obj[el] += +arr[i + 1];
            } else {
                obj[el] = +arr[i + 1];
            }
        }
    }

    console.log(JSON.stringify(obj))
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);