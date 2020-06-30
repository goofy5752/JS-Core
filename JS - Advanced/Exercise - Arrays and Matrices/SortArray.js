function solve(arr) {
    arr.sort(function(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0
    });

    arr.sort(function(a, b) {
        return a.length - b.length;
    });

    arr.forEach(el => {
        console.log(el);
    });
}

solve(['test',
    'Deny',
    'omen',
    'Default'
])