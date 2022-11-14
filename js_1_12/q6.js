const readline = require("readline");

const code = readline.createInterface({
    input: process.stdin
});
const userInput = [];


code.on("line", (data) => { userInput.push(data) });

code.on("close", () => {

    let input = userInput

    let cost = parseInt(input[0])

    let prize = parseInt(input[1])

    console.log(prize-cost);
});
