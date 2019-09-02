function solve(input) {
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        let minNumber = Math.min(...input);
        let indexToRemove = input.indexOf(minNumber);

        let forDeletion = [minNumber];

        input = input.filter(item => !forDeletion.includes(item));
    }
    console.log(input);
}

solve([1, 2, 3, 4]);