function solve(arr) {
    numbersToPrint = arr[0];
    let firstLineNumbers = '';
    let secondLineNumbers = '';
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        secondLineNumbers += element + ' ';
        if (i === numbersToPrint) {
            break;
        }
    }
    console.log(firstLineNumbers.trim());

    for (let i = arr.length - numbersToPrint; i < arr.length; i++) {
        const element = arr[i];
        secondLineNumbers += element + ' ';
    }
    console.log(secondLineNumbers.trim());
}

solve([2, 7, 8, 9]);