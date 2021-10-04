function solve(input) {
    let regexPattern = /(@|\*)(?<values>[A-Z][a-z]{2,})(\1):\s\[[A-Za-z]\]\|\[[A-Za-z]\]\|\[[A-Za-z]\]\|$/g

    let finalAsciiCodeChars = []

    for (let i = 1; i < input.length; i++) {
        const element = input[i];
        let match = element.match(regexPattern);
        if (match == null) {
            console.log('Valid message not found!')
            continue;
        } else {
            let chars = match[0].split(' ')[1]
            chars = chars.split(']|[')
            for (let singleChar of chars) {
                singleChar = singleChar.replace(/[^\w\s]/gi, '')
                finalAsciiCodeChars.push(singleChar.charCodeAt(0));
            }
        }

        console.log(match[0].split(' ')[0].replace(/[^\w\s:]/gi, '') + ` ${finalAsciiCodeChars.join(' ')}`)

        finalAsciiCodeChars = []
    }
}

solve(["3",
"*Request*: [I]|[s]|[i]|",
"*Taggy@: [73]|[73]|[73]|",
"Should be valid @Taggy@: [v]|[a]|[l]|"])
