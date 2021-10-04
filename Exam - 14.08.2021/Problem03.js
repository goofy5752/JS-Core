function solve(input) {
    let animalObj = {};
    let areaObj = {};
    let command = input.shift();
    while (command != 'EndDay') {
        let commands = command.split(' ')
        let action = commands[0];

        if (action == 'Add:') {
            let animalName = commands[1].split('-')[0];
            let neededFood = Number(commands[1].split('-')[1]);
            let area = commands[1].split('-')[2];

            if (animalObj.hasOwnProperty(animalName)) {
                animalObj[animalName].neededFood += neededFood;
                animalObj[animalName].area = area;
            }
            else {
                animalObj[animalName] = {
                    neededFood: neededFood,
                    area: area
                }
            }

            if (areaObj.hasOwnProperty(area)) {
                if (!areaObj[area].animalName.includes(animalName)) {
                    areaObj[area].animalName.push(animalName);
                }
            }
            else {
                areaObj[area] = {
                    animalName: []
                }

                areaObj[area].animalName.push(animalName);
            }
        } else {
            let animalName = commands[1].split('-')[0];
            let food = Number(commands[1].split('-')[1]);

            if (animalObj.hasOwnProperty(animalName)) {
                animalObj[animalName].neededFood -= food;

                if (animalObj[animalName].neededFood <= 0) {
                    console.log(`${animalName} was successfully fed`)

                    let areaToRemove = animalObj[animalName].area;
                    delete animalObj[animalName];

                    areaObj[areaToRemove].animalName.shift();

                    if (areaObj[areaToRemove].animalName.length == 0) {
                        delete areaObj[areaToRemove]
                    }
                }
            }
        }

        command = input.shift();
    }

    let animalArr = Object.entries(animalObj)
    let sortedAnimal = animalArr.sort((a, b) => {
        if (a[1].neededFood == b[1].neededFood) {
            return a[0].localeCompare(b[0]);
        }
        else {
            return b[1].neededFood - a[1].neededFood;
        }
    })

    let areaArr = Object.entries(areaObj)
    let sortedArea = areaArr.sort((a, b) => {
        if (a[1].animalName.length == b[1].animalName.length) {
            return a[0].localeCompare(b[0]);
        }
        else {
            return b[1].animalName.length - a[1].animalName.length;
        }
    })

    let result = 'Animals:';

    for (const animal of sortedAnimal) {
        result += "\n" + ` ${animal[0]} -> ${animal[1].neededFood}g`
    }

    result += '\nAreas with hungry animals:'

    for (const area of sortedArea) {
        result += "\n" + ` ${area[0]}: ${area[1].animalName.length}`
    }

    console.log(result)
}

solve(["Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"])
