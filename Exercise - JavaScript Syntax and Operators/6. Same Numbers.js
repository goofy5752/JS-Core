function solve(number) {
    let final = false;
    number = (""+number).split("");
    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] === number[i + 1]){
            final = true;
        }
        else{
            final = false;
            break;
        }
    }
    console.log(final);
    let sum = 0;
    for (let i = 0; i < number.length; i++) {

        sum += +number[+i];

    }
    console.log(sum);
}

solve(2222222);