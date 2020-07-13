function solve() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }

        addComment(comment) {
            if (this.comments.includes(comment)) {
                throw Error('This comment is already added!');
            }

            this.comments.push(comment);
            return "Comment is added.";
        }

        feed() {
            return `${this.name} is fed`
        }

        toString() {
            if (this.comments.length > 0) {
                return `Here is ${this.owner}'s pet ${this.name}.\n` + `Special requirements: ${this.comments.join(', ')}`
            } else {
                return `Here is ${this.owner}'s pet ${this.name}.`
            }
        }
    }

    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);

            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }

        feed() {
            return super.feed() + ", happy and purring."
        }

        toString() {
            if (this.scratching) {
                return super.toString() + `\nMain information:\n${this.name} is a cat with ${this.insideHabits}, but beware of scratches.`;
            }
            return `${this.name} is a cat with ${this.insideHabits}.`;
        }
    }

    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);

            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }

        feed() {
            return super.feed() + ', happy and wagging tail.'
        }

        toString() {
            return super.toString() + `\nMain information:\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`;
        }
    }

    return {
        Pet,
        Cat,
        Dog
    }
}

let classes = solve();
let pet = new classes.Pet('Ann', 'Merry');
console.log(pet.addComment('likes bananas'));
console.log(pet.addComment('likes sweets'));
console.log(pet.feed());
console.log(pet.toString());

let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);
console.log(cat.addComment('likes to be brushed'));
console.log(cat.addComment('sleeps a lot'));
console.log(cat.feed());
console.log(cat.toString());

let dog = new classes.Dog('Susan', 'Max', 5, 'good');
console.log(dog.addComment('likes to be brushed'));
console.log(dog.addComment('sleeps a lot'));
console.log(dog.feed());
console.log(dog.toString());