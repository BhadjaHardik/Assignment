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

    let c = parseInt(input[2])

    let d = parseInt(input[3])

    let e = parseInt(input[4])

    console.log((a+b+c+d+e)/5);
});
