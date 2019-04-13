function solve(fruit, grams, price) {
    console.log(`I need ${(price * (grams / 1000)).toFixed(2)} leva to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`);
}