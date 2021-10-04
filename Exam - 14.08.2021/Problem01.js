function solve(input) {
    let email = input.splice(0, 1)[0];

    let commands = input.splice(0, 1)[0].split(' ');

    let asciiCodeChars = [];

    while (commands[0] != 'Complete') {
        if (commands.length == 2) {
            if (commands[1] == 'Upper') {
                email = email.toUpperCase();
                console.log(email);
            } else if (commands[1] == 'Lower') {
                email = email.toLowerCase();
                console.log(email);
            } else if (commands[0] == 'Replace') {
                email = email.split(`${commands[1]}`).join("-");
                console.log(email)
            } else {
                console.log(email.slice(email.length - commands[1]));
            }
        } else {
            if (commands[0] == 'GetUsername') {
                if (!email.includes('@')) {
                    console.log(`The email ${email} doesn't contain the @ symbol.`)
                } else {
                    let indexOfMaimunskoA = email.indexOf('@')
                    console.log(email.slice(0, indexOfMaimunskoA))
                }
            } else {
                for (const asciiChar of email) {
                    asciiCodeChars.push(asciiChar.charCodeAt(0))
                }
                console.log(asciiCodeChars.join(' '))
            }
        }

        commands = input.splice(0, 1)[0].split(' ');
    }
}

solve(["Mike123@somemail.com",
"Make Upper",
"GetDomain 3",
"GetUsername",
"Encrypt",
"Complete"])