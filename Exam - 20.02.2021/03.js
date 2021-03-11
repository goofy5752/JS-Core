const { describe } = require('mocha');
const { assert, expect } = require('chai');

// let dealership = {
//     newCarCost: function (oldCarModel, newCarPrice) {

//         let discountForOldCar = {
//             'Audi A4 B8': 15000,
//             'Audi A6 4K': 20000,
//             'Audi A8 D5': 25000,
//             'Audi TT 8J': 14000,
//         }

//         if (discountForOldCar.hasOwnProperty(oldCarModel)) {
//             let discount = discountForOldCar[oldCarModel];
//             let finalPrice = newCarPrice - discount;
//             return finalPrice;
//         } else {
//             return newCarPrice;
//         }
//     },

//     carEquipment: function (extrasArr, indexArr) {
//         let selectedExtras = [];
//         indexArr.forEach(i => {
//             selectedExtras.push(extrasArr[i])
//         });

//         return selectedExtras;
//     },

//     euroCategory: function (category) {
//         if (category >= 4) {
//             let price = this.newCarCost('Audi A4 B8', 30000);
//             let total = price - (price * 0.05)
//             return `We have added 5% discount to the final price: ${total}.`;
//         } else {
//             return 'Your euro category is low, so there is no discount from the final price!';
//         }
//     }
// }


// describe("Tests …", function() {
//     describe("TODO …", function() {

//         it("Check car discont", function() {
//             const newCarPrice = 50000;
//             oldCarModel = "Audi A4 B8";
//             oldCarModel1 = "Audi A4 B";
//             oldCarModel2 = "Audi A4 ";

//             assert.equal(dealership.newCarCost(oldCarModel, newCarPrice), 35000);
//             assert.equal(dealership.newCarCost(oldCarModel1, newCarPrice), 50000);
//             assert.equal(dealership.newCarCost(oldCarModel2, 0), 0);
//         });

//         it("Check car equipment", function() {
//             const extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
//             const extrasThatIWant = [0, 1];

//             const expected = ['heated seats', 'sliding roof']

//             assert.deepEqual(dealership.carEquipment(extras, extrasThatIWant), expected)
//         });

//         it("Check euro category", function() {
//             assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: ${15000 - (15000 * 0.05)}.`)
//             assert.equal(dealership.euroCategory(3), `Your euro category is low, so there is no discount from the final price!`)
//         });
//      });

//      // TODO: …
// });

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
}
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

describe("Tests …", function() {
    describe("TODO …", function() {

        it("Pow number", function() {
            assert.equal(numberOperations.powNumber(4, 4), 16);
            assert.equal(numberOperations.powNumber(0, 0), 0);

        });

        it("Number checker", function() {
            assert.throw(() => { numberOperations.numberChecker(NaN) }, Error);
            assert.equal(numberOperations.numberChecker(11), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(111), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        });

        it("Sum arrays", function() {
            let arr1 = [1, 2, 3]
            let arr2 = [1, 1]

            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [2, 3, 3]);
        });

     });
     // TODO: …
});
