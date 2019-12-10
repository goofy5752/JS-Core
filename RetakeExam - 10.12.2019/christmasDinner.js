class ChristmasDinner {
    constructor(budget) {
        if (budget <= 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
        this.dishes = new Array();
        this.products = new Array();
        this.guests = new Object();
        this.dishesConsistOf = new Object();
    }

    shopping(product) {
        if (this.budget - +product[1] < 0) {
            throw new Error('Not enough money to buy this product');
        }
        this.budget -= +product[1];
        this.products.push(product[0]);

        return `You have successfully bought ${product[0]}!`;
    }

    recipes(recipe) {
        let recipeName = recipe.recipeName;
        let neededProducts = recipe.productsList;
        this.dishesConsistOf[recipeName] = new Array();
        for (const i of neededProducts) {
            this.dishesConsistOf[recipeName].push(i);
        }
        for (const p of neededProducts) {
            if (!this.products.includes(`${p}`)) {
                throw new Error('We do not have this product')
            }
        }

        this.dishes.push(recipeName);
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.includes(`${dish}`)) {
            throw new Error('We do not have this dish')
        }
        if (name in this.guests) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = '';
        for (let key in this.guests) {
            let dish = this.guests[key];
            result += `${key} will eat ${dish}, which consists of ${this.dishesConsistOf[dish].join(', ')}\n`;
        }

        return result.toString().trim();
    }
}

let dinner = new ChristmasDinner(0);

dinner.shopping(['Salt', -2]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Peppers', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());