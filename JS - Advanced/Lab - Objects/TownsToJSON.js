function solve(input) {
    let towns = [];
    let regex = /\s*\|\s*/;

    for (let line of input.splice(1)) {
        let tokens = line.split(regex);
        let townObj = { Town: tokens[1], Latitude: +Number(tokens[2]).toFixed(2), Longitude: +Number(tokens[3]).toFixed(2) };
        towns.push(townObj);
    }

    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);