function solve() {
    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title) {
            if (this.events.includes(title)) {
                throw Error('This event is already added!');
            }

            this.events.push(title);
            return "Event is added.";
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`;
        }

        toString() {
            let output = [
                `${this.name} hall - ${this.capacity}`
            ];
            if (this.events.length > 0) {
                output.push(`Events: ${this.events.join(', ')}`);
            }

            return output.join('\n');
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);

            this.events = [];
            this.screenSize = screenSize;
        }

        close() {
            return super.close() + 'All screenings are over.';
        }

        toString() {
            return super.toString() + `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name);
            this.events = [];
            this.performers = [];
        }

        hallEvent(title, performers) {
            if (performers.length > 0) {
                this.performers.push(performers)
            }
            return super.hallEvent(title);
        }

        close() {
            this.performers = [];
            return super.close() + 'Аll performances are over.'
        }

        toString() {
            if (this.performers.length > 0) {
                return super.toString() + `\nPerformers: ${this.performers.join(', ')}.`
            }
            return super.toString();
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}

let classes = solve();
let hall = new classes.Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close()); 

let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
console.log(movieHall.hallEvent('Top Gun: Maverick'));
console.log(movieHall.close());
console.log(movieHall.toString());

let concert = new classes.ConcertHall(5000, 'Diamond');        
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));  
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());
