class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        const movieHall = this.screenings[hall];

        if (Object.values(this.screenings[hall]).includes(date)) {
            throw Error(`Sorry, ${hall} hall is not available on ${date}`);
        }

        this.screenings.push(hall);
        this.screenings[hall] = [
            date,
            description
        ];
        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {
        const movieHall = this.screenings[hall];

        //check also is hall exist
        if (movieHall === undefined) {
            throw Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        let currentProfit = soldTickets * 100

        this.totalProfit += currentProfit;
        this.totalSoldTickets += soldTickets;
        this.screenings[hall] = null;

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${this.currentProfit}`
    }

    toString() {

    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
