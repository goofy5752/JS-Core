function solve(arr) {
    let obj = {};

    for (const i of arr) {
        let town = i.split(' <-> ')[0];
        let population = i.split(' <-> ')[1];
        if (!obj.hasOwnProperty(town)) {
            obj[town] = +population;
        } else {
            obj[town] += +population;
        }
    }

    for (const i in obj) {
        console.log(i + ' : ' + obj[i])
    }
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);