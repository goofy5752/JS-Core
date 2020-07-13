function solve(arr) {
    let obj = {};
    let regex = /\s*\|\s*/;
    let finalObj = {};

    for (const i of arr.splice(0)) {
        let tokens = i.split(regex);
        if (obj.hasOwnProperty(tokens[0])) {
            if (!obj[tokens[0].hasOwnProperty(tokens[1])]) {
                obj[tokens[0]][tokens[1]] = +tokens[2];
            } else {
                if (obj[tokens[0]][tokens[1]] <= +tokens[2]) {
                    for (const k of obj) {
                        if (k.hasOwnProperty(tokens[1])) {
                            if (k[tokens[1]] <= tokens[2]) {
                                obj[tokens[0]][tokens[1]] = +tokens[2];
                            }
                        }
                    }
                }
            }
        } else {
            obj[tokens[0]] = {};
            if (!obj[tokens[0].hasOwnProperty(tokens[1])]) {
                obj[tokens[0]][tokens[1]] = +tokens[2];
            } else {
                if (obj[tokens[0]][tokens[1]] <= +tokens[2]) {
                    for (const k of obj) {
                        if (k.hasOwnProperty(tokens[1])) {
                            if (k[tokens[1]] <= tokens[2]) {
                                obj[tokens[0]][tokens[1]] = +tokens[2];
                            }
                        }
                    }
                }
            }
        }
    }

    for (const i in obj) {
        for (const k in obj[i]) {
            if (!finalObj.hasOwnProperty(i)) {
                finalObj[i] = {};
                if (!finalObj[i.hasOwnProperty(k)]) {

                    finalObj[i][k] = +obj[i][k];
                } else {
                    if (finalObj[i][k] <= +obj[i][k]) {
                        finalObj[i][k] = +obj[i][k];
                    }
                }
            } else {
                if (!finalObj[i.hasOwnProperty(k)]) {
                    finalObj[i][k] = +obj[i][k];
                } else {
                    if (finalObj[i][k] <= +obj[i][k]) {
                        finalObj[i][k] = +obj[i][k];
                    }
                }
            }
        }
    }
    console.log(obj)
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);