function solve(arr) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const index = arr[i];
        let row = index.split(' ')[0];
        let col = index.split(' ')[1];
        if (dashboard[row][col] === false) {
            if (counter % 2 === 0) {
                dashboard[row][col] = 'X';
            } else {
                dashboard[row][col] = 'O';
            }

            let x = 'XXX';
            let o = 'OOO';

            let isXwinner = '';
            let isOwinner = '';

            //---
            for (let i = 0; i < dashboard.length; i++) {
                for (let k = 0; k < dashboard[i].length; k++) {
                    if (dashboard[i][k] === 'X') {
                        isXwinner += dashboard[i][k];
                    } else if (dashboard[i][k] === 'O') {
                        isOwinner += dashboard[i][k];
                    }
                }
                if (x === isXwinner) {
                    console.log('Player X wins!');
                    printDashboard(dashboard);
                    return;
                } else if (o === isOwinner) {
                    console.log('Player O wins!');
                    printDashboard(dashboard);
                    return;
                } else {
                    isOwinner = '';
                    isXwinner = '';
                }
            }

            //|||
            for (let i = 0; i < dashboard[0].length; i++) {
                dashboard.forEach(array => {
                    if (dashboard[i] === 'X') {
                        isXwinner += array[i];
                    } else {
                        isOwinner += array[i];
                    }
                });
                if (x === isXwinner) {
                    console.log('Player X wins!');
                    printDashboard(dashboard);
                    return;
                } else if (o === isOwinner) {
                    console.log('Player O wins!');
                    printDashboard(dashboard);
                    return;
                } else {
                    isOwinner = '';
                    isXwinner = '';
                }
            }

            // XXXXXXXXXXXXXXXXXXXXX

            let firstIndexForX = 0;
            let secondIndexForX = dashboard[0].length - 1;
            //XXX
            dashboard.forEach(array => {
                isXwinner += array[firstIndexForX++];
            });
            if (x === isXwinner) {
                console.log('Player X wins!');
                printDashboard(dashboard);
                return;
            }
            isXwinner = '';
            dashboard.forEach(array => {
                isXwinner += array[secondIndexForX--];
            });
            if (x === isXwinner) {
                console.log('Player X wins!');
                printDashboard(dashboard);
                return;
            }
            isXwinner = '';

            //------------------------------------------------

            let firstIndexForO = 0;
            let secondIndexForO = dashboard[0].length - 1;
            //OOO
            dashboard.forEach(array => {
                isOwinner += array[firstIndexForO++];
            });
            if (o === isOwinner) {
                console.log('Player O wins!');
                printDashboard(dashboard);
                return;
            }
            isOwinner = '';
            dashboard.forEach(array => {
                isOwinner += array[secondIndexForO--];
            });
            if (o === isOwinner) {
                console.log('Player O wins!');
                printDashboard(dashboard);
                return;
            }
            isOwinner = '';
            counter++;
        } else if (dashboard[row][col] === 'X' || dashboard[row][col] === 'O' && dashboard.includes(false)) {
            console.log('This place is already taken. Please choose another!');
        } else {
            console.log('The game ended! Nobody wins :(');
            printDashboard(dashboard);
        }
    }

    function printDashboard(dashboard) {
        dashboard.forEach(el => {
            console.log(el.join('	'))
        });
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);