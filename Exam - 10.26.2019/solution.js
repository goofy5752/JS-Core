function solve() {
    const [name, quantity, price] = Array.from(document.querySelectorAll('form > input'));

    const addBtn = document.querySelector('form > button');
    const totalPriceHeader = Array.from(document.querySelectorAll('h1'))[1];
    const totalSum = 0;

    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const nameOfProduct = name.value;
        const quantityOfProduct = Number(quantity.value);
        const priceOfProduct = Number(price.value);

        console.log(nameOfProduct);
        console.log(quantityOfProduct);
        console.log(priceOfProduct);
    })
}