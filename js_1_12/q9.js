const readline = require("readline");

const code = readline.createInterface({
    input: process.stdin
});
const userInput = [];


code.on("line", (data) => { userInput.push(data) });

code.on("close", () => {

    let input = userInput

    let a = parseInt(input[0])

    let remainder = 1

    let reverse = 1

    remainder = a % 10;
    reverse = parseInt(a / 10)
    reverse = remainder * 10 + reverse;

    console.log(reverse);
});
