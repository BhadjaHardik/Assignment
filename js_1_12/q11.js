const readline = require("readline");

const code = readline.createInterface({
    input: process.stdin
});
const userInput = [];


code.on("line", (data) => { userInput.push(data) });

code.on("close", () => {

    let input = userInput

    let a = parseInt(input[0])

    let b = parseInt(input[1])

    let temp = a;
    a = b;
    b = temp;

    console.log(a);
    console.log(b);
});
